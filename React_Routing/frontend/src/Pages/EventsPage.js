//import { useState, useEffect } from "react";
import EventsList from "./EventsList";
import { useLoaderData, defer, Await, json } from "react-router-dom";
import { Suspense } from "react";


function EventsPage(){
  /*const [fetchedEvents, setFetchedEvents] = useState();
 const [loading, setLoading] =  useState(false);
 const [error,setError] = useState();

useEffect(()=>{
    async function fetchEvents(){
        setLoading(true);
     try{
        const response = await fetch('http://localhost:8080/events');
        
        if(!response.ok){
            setError("Fetching events got failed");
        }
        else{
            const resData = await response.json();
            console.log("event "+ JSON.stringify(resData.events) || "no event");
            setFetchedEvents(resData.events);
        }
    }
    catch(error){
        console.error("Error fetching events:", error);
        setError("An error occurred while fetching events");
    }
        setLoading(false);
        
    }
    fetchEvents();
 }, []);*/
 const {events} = useLoaderData();
 console.log(events);
 return(
    <Suspense fallback={<p style={{textAlign: 'center'}}>Loading...</p>}>
        <Await resolve={events}> 
            {(loadEvents)=><EventsList events={loadEvents}/>}
        </Await>
    </Suspense>
 );
}
/**<div style={{textAlign: 'center'}}>     
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}

    </div> 
    {!loading && <EventsList events = {fetchedEvents}/>}*/
export default EventsPage;

async function loadEvents(){
    const response = await fetch('http://localhost:8080/events'); // get API Call

    if(!response.ok){
     // return {isErorr: true, message:"Couldn't"}
     throw json({title: "error", message:"Couldn't load data"},{
     status: 500}
    )
     }
    else{
      const resData = await response.json();
      console.log(resData.events);// undefined
        return resData.events;
    }
}
export function loader(){   
 return defer({
    events: loadEvents(),
 });
}