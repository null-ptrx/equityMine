import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import UserModel, { IUser } from "@/lib/models/User";
import { getTokenFromRequest, verifyToken } from "@/lib/auth";

export interface RequireAdminResult {
  authorized: boolean;
  user?: IUser;
  errorResponse?: NextResponse;
}

/**
 * Server-side admin verification:
 * 1. Reads token from cookie (auth_token) or Authorization header (Bearer <token>)
 * 2. Verifies JWT signature and expiry
 * 3. Loads the user from MongoDB
 * 4. Verifies role === "admin"
 * Returns:
 * - 401 if unauthenticated / invalid token
 * - 403 if authenticated but not admin
 * - user & authorized: true if authorized
 */
export async function requireAdmin(req: Request): Promise<RequireAdminResult> {
  const token = getTokenFromRequest(req);

  // 1. Check if token exists
  if (!token) {
    return {
      authorized: false,
      errorResponse: NextResponse.json(
        {
          success: false,
          error: "Unauthorized: Authentication required. Please log in.",
          code: "UNAUTHORIZED",
        },
        { status: 401 }
      ),
    };
  }

  // 2. Verify token
  const payload = await verifyToken(token);
  if (!payload || !payload.userId) {
    return {
      authorized: false,
      errorResponse: NextResponse.json(
        {
          success: false,
          error: "Unauthorized: Invalid or expired session token. Please log in again.",
          code: "INVALID_TOKEN",
        },
        { status: 401 }
      ),
    };
  }

  // 3. Load user from DB
  await connectDB();
  const user = await UserModel.findById(payload.userId);
  if (!user) {
    return {
      authorized: false,
      errorResponse: NextResponse.json(
        {
          success: false,
          error: "Unauthorized: User account not found.",
          code: "USER_NOT_FOUND",
        },
        { status: 401 }
      ),
    };
  }

  // 4. Check role === "admin"
  if (user.role !== "admin") {
    return {
      authorized: false,
      errorResponse: NextResponse.json(
        {
          success: false,
          error: "Forbidden: Access denied. Admin role required.",
          code: "FORBIDDEN",
        },
        { status: 403 }
      ),
    };
  }

  return {
    authorized: true,
    user,
  };
}
