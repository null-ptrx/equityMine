import React from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { verifyToken, AUTH_COOKIE_NAME } from "@/lib/auth";
import { connectDB } from "@/lib/mongodb";
import UserModel from "@/lib/models/User";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const token = cookieStore.get(AUTH_COOKIE_NAME)?.value;

  // 1. Not logged in: Redirect to login
  if (!token) {
    redirect("/login?from=/admin");
  }

  // 2. Invalid or expired token: Redirect to login
  const payload = await verifyToken(token);
  if (!payload || !payload.userId) {
    redirect("/login?from=/admin");
  }

  // 3. Verify user in database
  await connectDB();
  const user = await UserModel.findById(payload.userId).lean();

  if (!user) {
    redirect("/login?from=/admin");
  }

  // 4. Enforce role === "admin" on the server
  if (user.role !== "admin") {
    redirect("/login?error=forbidden&from=/admin");
  }

  return <>{children}</>;
}
