import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import UserModel from "@/lib/models/User";
import { requireAdmin } from "@/lib/middleware/requireAdmin";

// GET /api/admin/users — List registered users (Admin only)
export async function GET(req: Request) {
  try {
    const auth = await requireAdmin(req);
    if (!auth.authorized) {
      return auth.errorResponse!;
    }

    await connectDB();
    const users = await UserModel.find().select("-password").sort({ createdAt: -1 }).lean();

    return NextResponse.json({
      success: true,
      data: users.map((u) => ({
        id: u._id.toString(),
        name: u.name,
        email: u.email,
        role: u.role,
        createdAt: u.createdAt,
      })),
    });
  } catch (error) {
    console.error("Admin users fetch error:", error);
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}
