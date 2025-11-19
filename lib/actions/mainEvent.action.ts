import Event from "@/database/event.model";
import connectDB from "@/lib/mongoose";

export async function getAllEvents() {
    await connectDB();
    const events = await Event.find().lean();
    return JSON.parse(JSON.stringify(events));
}
