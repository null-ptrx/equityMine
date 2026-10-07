import { NextResponse } from "next/server";
import { connectDb } from "@/config/db";
import { Contact } from "@/models/contactSchema";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        await connectDb();

        const saved = await Contact.create({
            name : body.fullname,
            mobile : body.mobile,
            email : body.email,
            investmentGoal : body.goal,
            message : body.message
        });
        return NextResponse.json(body, {status : 201});
    } catch(error) {
        console.log(error)
        return NextResponse.json({message : "failed to request call"}, {status : 500});
    }

}