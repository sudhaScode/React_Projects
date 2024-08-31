import { Outlet } from "react-router-dom";
import EventsNavigation from "./components/EventsNavigation";


function EventRoot(){

    return (
        <>
        <EventsNavigation/>
        <Outlet/>
        </>
    );
}

export default EventRoot;