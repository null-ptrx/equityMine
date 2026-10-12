import { NextResponse } from "next/server";

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

// In-memory demo store (seeded with realistic wealth management queries)
const initialQueries: ContactQuery[] = [
  {
    id: "QRY-1082",
    fullName: "Rajesh Sharma",
    email: "rajesh.sharma@gmail.com",
    mobile: "+91 98765 43210",
    goal: "Wealth Creation",
    message: "Looking to start a monthly SIP of ₹50,000 across large & mid-cap equity mutual funds. Need asset allocation guidance.",
    createdAt: new Date(Date.now() - 1000 * 60 * 25).toISOString(), // 25 mins ago
    status: "new",
    priority: "high",
    notes: ["Lead source: Organic Google Search"],
  },
  {
    id: "QRY-1081",
    fullName: "Ananya Iyer",
    email: "ananya.iyer@outlook.com",
    mobile: "+91 98201 23456",
    goal: "Retirement Planning",
    message: "Currently 36, aiming to build a ₹4 Crore corpus by age 52. Want to review existing mutual fund and EPF portfolio.",
    createdAt: new Date(Date.now() - 1000 * 60 * 180).toISOString(), // 3 hours ago
    status: "in_progress",
    priority: "high",
    notes: ["Spoke briefly at 3 PM, requested portfolio review statement via email"],
    lastContactedAt: new Date(Date.now() - 1000 * 60 * 60).toISOString(),
  },
  {
    id: "QRY-1080",
    fullName: "Vikram Malhotra",
    email: "vikram.m@techcorp.in",
    mobile: "+91 97112 88492",
    goal: "Child Education",
    message: "Need a 12-year dedicated goal-based investment strategy for daughter's overseas graduation fund.",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 14).toISOString(), // 14 hours ago
    status: "contacted",
    priority: "medium",
    notes: ["Shared brochure and goal calculator sheet via WhatsApp"],
    lastContactedAt: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString(),
  },
  {
    id: "QRY-1079",
    fullName: "Sneha Patel",
    email: "sneha.patel@rediffmail.com",
    mobile: "+91 99887 65432",
    goal: "Buying a Home",
    message: "Planning to accumulate ₹35 Lakhs down payment over the next 3.5 years. Moderate risk tolerance.",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 36).toISOString(), // 1.5 days ago
    status: "resolved",
    priority: "medium",
    notes: ["Client onboarded with hybrid & debt fund allocation plan."],
    lastContactedAt: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
  },
  {
    id: "QRY-1078",
    fullName: "Amit Deshmukh",
    email: "amit.deshmukh@yahoo.com",
    mobile: "+91 91234 56789",
    goal: "Tax Saving",
    message: "Need suggestions for top performing ELSS mutual funds under Section 80C before financial year ends.",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 72).toISOString(), // 3 days ago
    status: "new",
    priority: "low",
    notes: [],
  },
  {
    id: "QRY-1077",
    fullName: "Dr. Kavita Verma",
    email: "dr.kavita.v@apollohospitals.com",
    mobile: "+91 98451 90812",
    goal: "Wealth Creation",
    message: "Lump sum surplus of ₹25 Lakhs from clinic expansion. Looking for staggered STP deployment in equity funds.",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 96).toISOString(), // 4 days ago
    status: "contacted",
    priority: "high",
    notes: ["High Net-Worth Client. Meeting scheduled for Saturday."],
    lastContactedAt: new Date(Date.now() - 1000 * 60 * 60 * 48).toISOString(),
  },
];

// Persistent across invocations in server process
// Using globalThis to avoid reset on dev hot reloads
const globalStore = globalThis as unknown as { contactQueries?: ContactQuery[] };
if (!globalStore.contactQueries) {
  globalStore.contactQueries = [...initialQueries];
}

export async function GET() {
  const queries = globalStore.contactQueries || [];
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
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Check honeypot
    if (body.company && body.company.trim().length > 0) {
      return NextResponse.json({ success: true, message: "Spam filtered" });
    }

    const newQuery: ContactQuery = {
      id: `QRY-${Math.floor(1000 + Math.random() * 9000)}`,
      fullName: body.fullName || "Anonymous Client",
      email: body.email || "No email",
      mobile: body.mobile || "No phone",
      goal: body.goal || "Not sure yet",
      message: body.message || "",
      createdAt: new Date().toISOString(),
      status: "new",
      priority: body.goal === "Wealth Creation" || body.goal === "Retirement Planning" ? "high" : "medium",
      notes: [],
    };

    if (!globalStore.contactQueries) {
      globalStore.contactQueries = [];
    }

    globalStore.contactQueries.unshift(newQuery);

    return NextResponse.json({
      success: true,
      data: newQuery,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}

export async function PATCH(req: Request) {
  try {
    const { id, status, priority, note } = await req.json();
    const queries = globalStore.contactQueries || [];
    const index = queries.findIndex((q) => q.id === id);

    if (index === -1) {
      return NextResponse.json({ success: false, error: "Query not found" }, { status: 404 });
    }

    const target = queries[index];
    if (status) {
      target.status = status;
      if (status === "contacted" || status === "in_progress") {
        target.lastContactedAt = new Date().toISOString();
      }
    }
    if (priority) {
      target.priority = priority;
    }
    if (note) {
      target.notes = [...(target.notes || []), note];
    }

    return NextResponse.json({ success: true, data: target });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}

export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ success: false, error: "ID required" }, { status: 400 });
    }

    if (globalStore.contactQueries) {
      globalStore.contactQueries = globalStore.contactQueries.filter((q) => q.id !== id);
    }

    return NextResponse.json({ success: true, message: "Query deleted" });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}