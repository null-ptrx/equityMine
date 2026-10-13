import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load MONGODB_URI from .env.local if not already in process.env
const envPath = path.resolve(__dirname, "../.env.local");
if (fs.existsSync(envPath)) {
  const content = fs.readFileSync(envPath, "utf-8");
  for (const line of content.split("\n")) {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith("#")) {
      const idx = trimmed.indexOf("=");
      if (idx !== -1) {
        const key = trimmed.slice(0, idx).trim();
        const val = trimmed.slice(idx + 1).trim();
        if (!process.env[key]) {
          process.env[key] = val;
        }
      }
    }
  }
}

const MONGODB_URI =
  process.env.MONGODB_URI ||
  "mongodb+srv://ds331048_db_user:dhami007@cluster0.nduucmp.mongodb.net/equitymine?appName=Cluster0";

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["user", "admin"], default: "user" },
  },
  { timestamps: true, collection: "users" }
);

const User = mongoose.models.User || mongoose.model("User", UserSchema, "users");

async function seed() {
  console.log("Connecting to MongoDB...");
  await mongoose.connect(MONGODB_URI);
  console.log("Connected successfully to MongoDB.");

  // Parse optional CLI arguments: node scripts/seed-admin.mjs [email] [password] [role] [name]
  const args = process.argv.slice(2);

  if (args.length >= 2) {
    const [customEmail, customPassword, customRole = "admin", customName = "Administrator"] = args;
    const hashedPassword = await bcrypt.hash(customPassword, 10);
    const normalizedEmail = customEmail.toLowerCase().trim();

    const existing = await User.findOne({ email: normalizedEmail });
    if (existing) {
      existing.role = customRole;
      existing.password = hashedPassword;
      if (customName) existing.name = customName;
      await existing.save();
      console.log(`\nUpdated existing user '${normalizedEmail}':`);
      console.log(`- Role: ${customRole}`);
      console.log(`- Password: updated successfully`);
    } else {
      await User.create({
        name: customName,
        email: normalizedEmail,
        password: hashedPassword,
        role: customRole,
      });
      console.log(`\nCreated new user '${normalizedEmail}':`);
      console.log(`- Role: ${customRole}`);
      console.log(`- Name: ${customName}`);
    }
  } else {
    // Seed default admin and normal test user for testing
    console.log("\n--- Seeding Default Test Accounts ---");

    // 1. Admin Account
    const adminEmail = "admin@equitymine.com";
    const adminPass = "AdminPassword123!";
    const hashedAdminPass = await bcrypt.hash(adminPass, 10);

    const existingAdmin = await User.findOne({ email: adminEmail });
    if (existingAdmin) {
      existingAdmin.role = "admin";
      existingAdmin.password = hashedAdminPass;
      existingAdmin.name = "Jitender Singh (Admin)";
      await existingAdmin.save();
      console.log(`Admin account '${adminEmail}' updated with role: admin`);
    } else {
      await User.create({
        name: "Jitender Singh (Admin)",
        email: adminEmail,
        password: hashedAdminPass,
        role: "admin",
      });
      console.log(`Admin account '${adminEmail}' created with role: admin`);
    }

    // 2. Regular User Account (role: "user")
    const userEmail = "user@equitymine.com";
    const userPass = "UserPassword123!";
    const hashedUserPass = await bcrypt.hash(userPass, 10);

    const existingUser = await User.findOne({ email: userEmail });
    if (existingUser) {
      existingUser.role = "user";
      existingUser.password = hashedUserPass;
      existingUser.name = "Standard Test User";
      await existingUser.save();
      console.log(`Regular user '${userEmail}' updated with role: user`);
    } else {
      await User.create({
        name: "Standard Test User",
        email: userEmail,
        password: hashedUserPass,
        role: "user",
      });
      console.log(`Regular user '${userEmail}' created with role: user`);
    }

    console.log("\n==========================================");
    console.log("Credentials Ready for Testing:");
    console.log("1. ADMIN USER (Full Access):");
    console.log(`   Email:    ${adminEmail}`);
    console.log(`   Password: ${adminPass}`);
    console.log(`   Role:     admin`);
    console.log("");
    console.log("2. NORMAL USER (Forbidden from Admin):");
    console.log(`   Email:    ${userEmail}`);
    console.log(`   Password: ${userPass}`);
    console.log(`   Role:     user`);
    console.log("==========================================\n");
  }

  await mongoose.disconnect();
  console.log("Database connection closed.");
}

seed().catch((err) => {
  console.error("Seed error:", err);
  process.exit(1);
});
