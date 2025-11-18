import { IEvent } from "@/database";
import EventCard from "./components/EventCard"
import ExploreBtn from "./components/ExploreBtn"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const Page = async () => {
  const response = await fetch(`${BASE_URL}/api/events`);
  const { events } = await response.json();
  return (
    <section><h1 className="text-center">Let's <br /> Book Your Seat</h1>
      <p className="text-center mt-5">Participate in all the events </p>
      <ExploreBtn />
      <div className="mt-20 space-y-7">
        <h3>Featured Events</h3>
        <ul className="events list-none">
          {
            events && events.length > 0 && events.map((event: IEvent) => (
              <li className="" key={event.title}>
                <EventCard {...event} />
              </li>
            ))
          }
        </ul>
      </div>
    </section>
  )
}

export default Page