import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    name : String,
    mobile : Number,
    email : String,
    investmentGoal : String,
    message : String,
});

export const Contact = mongoose.models.Contact || mongoose.model("Contact", contactSchema);