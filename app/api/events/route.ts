import { Event } from "@/database";
import connectDB from "@/lib/mongoose";
import { NextRequest, NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary"

export async function POST(req: NextRequest){
    try{
        await connectDB();
        
        // Use req.json() to read the JSON body directly
        const eventData = await req.json(); 
        
        // No need for a separate try/catch block for Object.fromEntries
        const createdEvent = await Event.create(eventData); 

        return NextResponse.json({message: "Event Created Successfully",event: createdEvent},{status: 201})

    } catch (e){
        // Now this catch block handles actual database/mongoose errors
        console.error(e);
        return NextResponse.json({message:"Event Creation Failed", error: e}, {status: 500})
    }
}

export async function GET() {
    try {
        await connectDB();
        const events = await Event.find().sort({ createdAt: -1 });
        return NextResponse.json({ message: "Events fetched Successfully", events }, { status: 200 })
    } catch (e) {
        return NextResponse.json({ message: "Event Fetching Failed", error: e }, { status: 500 })
    }
}