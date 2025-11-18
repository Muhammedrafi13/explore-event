import { Suspense } from 'react'; 
import EventList from './components/EventList';  
import ExploreBtn from "./components/ExploreBtn";


const Page = () => {
    return (
        <section>
            <h1 className="text-center">Let's <br /> Book Your Seat</h1>
            <p className="text-center mt-5">Participate in all the events</p>
            <ExploreBtn />

            <Suspense fallback={
                <div className="text-center mt-20 p-8 rounded-lg">
                    <p>Loading events...</p>
                </div>
            }>
                <EventList />
            </Suspense>

        </section>
    );
}

export default Page;