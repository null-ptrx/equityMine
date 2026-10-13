import mongoose, { Schema, Document, Model } from "mongoose";

export interface IContact extends Document {
  id?: string;
  fullName?: string;
  name?: string;
  email: string;
  mobile: string | number;
  goal?: string;
  investmentGoal?: string;
  message?: string;
  status: "new" | "in_progress" | "contacted" | "resolved" | "archived";
  priority: "high" | "medium" | "low";
  notes?: string[];
  lastContactedAt?: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

const ContactSchema = new Schema<IContact>(
  {
    id: { type: String, index: true },
    fullName: { type: String },
    name: { type: String },
    email: { type: String, required: true },
    mobile: { type: Schema.Types.Mixed, required: true },
    goal: { type: String },
    investmentGoal: { type: String },
    message: { type: String, default: "" },
    status: {
      type: String,
      enum: ["new", "in_progress", "contacted", "resolved", "archived"],
      default: "new",
      index: true,
    },
    priority: {
      type: String,
      enum: ["high", "medium", "low"],
      default: "medium",
    },
    notes: { type: [String], default: [] },
    lastContactedAt: { type: Date },
  },
  {
    timestamps: true,
    collection: "contacts",
  }
);

const ContactModel: Model<IContact> =
  mongoose.models.Contact || mongoose.model<IContact>("Contact", ContactSchema, "contacts");

export default ContactModel;
