import ExploreBtn from "./components/ExploreBtn"


const Home = () => {
  console.log('what component am i?')
  return (
    <section><h1 className="text-center">The Hub for Every Day <br /> Event You can't Miss</h1>
      <p className="text-center mt-5">Hackathons,Meetups, and Conference, All in one place </p>
      <ExploreBtn />
      <div className="mt-20 space-y-7">
        <h3>Featured Events</h3>
        <ul className="events">
          {
            [1, 2, 3, 4, 5].map((event) => (
              <li key={event}>Event {event}</li>
            ))
          }
        </ul>
      </div>
    </section>
  )
}

export default Home