import mongoose from "mongoose";
export async function connectDb() {
    if (mongoose.connection.readyState >= 1) return // already connected
    await mongoose.connect(process.env.MONGODB_URI as string)
}

