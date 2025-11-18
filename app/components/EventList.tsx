import { IEvent } from "@/database";
import EventCard from "./EventCard";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const EventList = async () => {
    const response = await fetch(`${BASE_URL}/api/events`);
    const { events } = await response.json();

    if (!events || events.length === 0) {
        return <p>No events are currently scheduled.</p>;
    }

    return (
        <div className="mt-20 space-y-7">
            <h3>Featured Events</h3>
            <ul className="events list-none">
                {events.map((event: IEvent) => (
                    <li className="" key={event._id?.toString() || event.title}>
                        <EventCard {...event} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default EventList;