import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { connectDB } from "@/lib/mongodb";
import ContactModel, { IContact } from "@/lib/models/Contact";
import { requireAdmin } from "@/lib/middleware/requireAdmin";

export interface ContactQuery {
  id: string;
  fullName: string;
  email: string;
  mobile: string;
  goal: string;
  message?: string;
  createdAt: string;
  status: "new" | "in_progress" | "contacted" | "resolved" | "archived";
  priority: "high" | "medium" | "low";
  notes?: string[];
  lastContactedAt?: string;
}

// Convert Mongoose document or lean object to standard ContactQuery shape
function formatDoc(doc: Partial<IContact> & { _id?: mongoose.Types.ObjectId | string; __v?: number }): ContactQuery {
  const goal = doc.goal || doc.investmentGoal || "Not sure yet";
  const id = doc.id || doc._id?.toString() || `QRY-${Math.floor(1000 + Math.random() * 9000)}`;
  
  let createdAt = new Date().toISOString();
  if (doc.createdAt) {
    createdAt = new Date(doc.createdAt).toISOString();
  } else if (doc._id && typeof doc._id === "object" && "getTimestamp" in doc._id) {
    createdAt = (doc._id as mongoose.Types.ObjectId).getTimestamp().toISOString();
  }

  return {
    id,
    fullName: doc.fullName || doc.name || "Client",
    email: doc.email || "No email",
    mobile: String(doc.mobile || "No phone"),
    goal,
    message: doc.message || "",
    createdAt,
    status: (doc.status as ContactQuery["status"]) || "new",
    priority: (doc.priority as ContactQuery["priority"]) || "medium",
    notes: Array.isArray(doc.notes) ? doc.notes : [],
    lastContactedAt: doc.lastContactedAt ? new Date(doc.lastContactedAt).toISOString() : undefined,
  };
}

export async function GET(req: Request) {
  try {
    const auth = await requireAdmin(req);
    if (!auth.authorized) {
      return auth.errorResponse!;
    }

    await connectDB();
    const docs = await ContactModel.find().sort({ createdAt: -1, _id: -1 }).lean();
    const queries: ContactQuery[] = docs.map((d) => formatDoc(d as any));

    return NextResponse.json({
      success: true,
      data: queries,
      stats: {
        total: queries.length,
        new: queries.filter((q) => q.status === "new").length,
        inProgress: queries.filter((q) => q.status === "in_progress").length,
        contacted: queries.filter((q) => q.status === "contacted").length,
        resolved: queries.filter((q) => q.status === "resolved").length,
      },
    });
  } catch (error) {
    console.error("Failed to fetch queries from database:", error);
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Check honeypot
    if (body.company && body.company.trim().length > 0) {
      return NextResponse.json({ success: true, message: "Spam filtered" });
    }

    await connectDB();

    const goal = (body.goal || body.investmentGoal || "Not sure yet").trim();
    const priority =
      goal.toLowerCase().includes("wealth") || goal.toLowerCase().includes("retirement")
        ? "high"
        : "medium";

    const customId = `QRY-${Math.floor(1000 + Math.random() * 9000)}`;

    const newContact = await ContactModel.create({
      id: customId,
      fullName: (body.fullName || body.name || "Anonymous Client").trim(),
      email: (body.email || "No email").trim(),
      mobile: (body.mobile || "No phone").trim(),
      goal,
      investmentGoal: goal,
      message: (body.message || "").trim(),
      status: "new",
      priority,
      notes: [],
    });

    const formatted = formatDoc(newContact.toObject ? newContact.toObject() : newContact);

    return NextResponse.json({
      success: true,
      data: formatted,
    });
  } catch (error) {
    console.error("Failed to save contact query to database:", error);
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}

export async function PATCH(req: Request) {
  try {
    const auth = await requireAdmin(req);
    if (!auth.authorized) {
      return auth.errorResponse!;
    }

    const { id, status, priority, note } = await req.json();

    if (!id) {
      return NextResponse.json({ success: false, error: "ID required" }, { status: 400 });
    }

    await connectDB();

    const query = mongoose.isValidObjectId(id) ? { $or: [{ id }, { _id: id }] } : { id };

    const updateDoc: Record<string, any> = {};
    if (status) {
      updateDoc.status = status;
      if (status === "contacted" || status === "in_progress") {
        updateDoc.lastContactedAt = new Date();
      }
    }
    if (priority) {
      updateDoc.priority = priority;
    }

    const updateOps: Record<string, any> = {};
    if (Object.keys(updateDoc).length > 0) {
      updateOps.$set = updateDoc;
    }
    if (note) {
      updateOps.$push = { notes: note };
    }

    const updated = await ContactModel.findOneAndUpdate(query, updateOps, { new: true }).lean();

    if (!updated) {
      return NextResponse.json({ success: false, error: "Query not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: formatDoc(updated as any) });
  } catch (error) {
    console.error("Failed to update query in database:", error);
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}

export async function DELETE(req: Request) {
  try {
    const auth = await requireAdmin(req);
    if (!auth.authorized) {
      return auth.errorResponse!;
    }

    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ success: false, error: "ID required" }, { status: 400 });
    }

    await connectDB();

    const query = mongoose.isValidObjectId(id) ? { $or: [{ id }, { _id: id }] } : { id };
    const result = await ContactModel.findOneAndDelete(query);

    if (!result) {
      return NextResponse.json({ success: false, error: "Query not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: "Query deleted" });
  } catch (error) {
    console.error("Failed to delete query from database:", error);
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}