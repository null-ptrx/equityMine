import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import UserModel from "@/lib/models/User";
import { verifyPassword, signToken, AUTH_COOKIE_NAME, hashPassword } from "@/lib/auth";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        { success: false, error: "Email and password are required" },
        { status: 400 }
      );
    }

    await connectDB();

    const normalizedEmail = String(email).toLowerCase().trim();
    let user = await UserModel.findOne({ email: normalizedEmail });

    // Auto-seed or update admin if logging in with the configured admin credentials
    const DEFAULT_ADMIN_EMAIL = "admin@equitymine.in";
    const DEFAULT_ADMIN_PASS = "Atamjot00567@#$";

    if (normalizedEmail === DEFAULT_ADMIN_EMAIL && password === DEFAULT_ADMIN_PASS) {
      if (!user) {
        const hashedPassword = await hashPassword(password);
        user = await UserModel.create({
          name: "Jitender Singh (Admin)",
          email: normalizedEmail,
          password: hashedPassword,
          role: "admin",
        });
      } else {
        const isValid = await verifyPassword(String(password), user.password);
        if (!isValid || user.role !== "admin") {
          user.password = await hashPassword(password);
          user.role = "admin";
          await user.save();
        }
      }
    }

    if (!user || !user.password) {
      return NextResponse.json(
        { success: false, error: "Invalid email or password" },
        { status: 401 }
      );
    }

    const isValid = await verifyPassword(String(password), user.password);
    if (!isValid) {
      return NextResponse.json(
        { success: false, error: "Invalid email or password" },
        { status: 401 }
      );
    }

    const token = await signToken({
      userId: user._id.toString(),
      email: user.email,
      role: user.role,
      name: user.name,
    });

    const response = NextResponse.json({
      success: true,
      user: {
        id: user._id.toString(),
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });

    // Set secure HttpOnly cookie
    response.cookies.set({
      name: AUTH_COOKIE_NAME,
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 7 * 24 * 60 * 60, // 7 days
    });

    return response;
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { success: false, error: (error as Error).message || "Internal server error" },
      { status: 500 }
    );
  }
}
