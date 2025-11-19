import { NextRequest, NextResponse } from 'next/server';
import Event from '@/database/event.model';
import connectDB from '@/lib/mongoose';

type RouteParams = {
  params: Promise<{ slug: string }>;
};

export async function GET(
  req: NextRequest,
  { params }: RouteParams
): Promise<NextResponse> {
  try {

    await connectDB();

    const { slug } = await params;

    if (!slug) {
      return NextResponse.json(
        { message: 'Invalid slug param' },
        { status: 400 }
      );
    }

    const sanitizedSlug = slug.trim().toLowerCase();
    const event = await Event.findOne({ slug: sanitizedSlug }).lean();

    if (!event) {
      return NextResponse.json(
        { message: `Event '${sanitizedSlug}' not found` },
        { status: 404 }
      );
    }


    return NextResponse.json(
      { message: 'Event fetched successfully', event },
      { status: 200 }
    );
  } catch (error) {


    console.error('Error fetching events by slug:', error);


    // Handle specific error types
    if (error instanceof Error) {
      // Handle database connection errors
      if (error.message.includes('MONGODB_URI')) {
        return NextResponse.json(
          { message: 'Database configuration error' },
          { status: 500 }
        );
      }

      // Return generic error with error message
      return NextResponse.json(
        { message: 'Failed to fetch events', error: error.message },
        { status: 500 }
      );
    }

    // Handle unknown errors
    return NextResponse.json(
      { message: 'Server error', error: error instanceof Error ? error.message : error },
      { status: 500 }
    );
  }
}
