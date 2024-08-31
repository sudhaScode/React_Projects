import { Suspense } from "react";
import { useRouteLoaderData,redirect, json, defer, Await} from "react-router-dom";
import EventItem from "../components/EventItem";
import EventsList from "./EventsList";


function EventDetailPage(){
  const {event, events} = useRouteLoaderData("event-detail");
  //const id = data.eventid;
  console.log(event);
  console.log(events)
    return (
      <>
      <Suspense fallback= {<p style={{textAlign:'center'}}>Loading..</p>}>
       <Await resolve={event}>
         {(loadEvent)=><EventItem event={loadEvent}/>}
         </Await>
      </Suspense>
      <Suspense fallback= {<p style={{textAlign:'center'}}>Loading..</p>}>
          <Await resolve={events} >
            {(loadEvents)=><EventsList events={loadEvents}/>}
          </Await>
       </Suspense>
       </>
    );
  }

export default EventDetailPage;

export async function loader({request, params}){
  const id = params.eventid;
    return defer(
    {
      event: await loadEvent(id),
      events: loadEvents(),
    })
}

export async  function action({request, params}){ // delete api
  const id = params.eventid; // it takes path id from route deffination 
  console.log(id);
  const response = await fetch('http://localhost:8080/events/'+id, {method:request.method,});
  if(!response.ok){
    throw   json({message:"action is failed"},{status: 500});
  }
  return redirect('/events'); 
}
// add two defer function loadEvents and loadEvent

async function loadEvents(){

  const response = await fetch('http://localhost:8080/events');

    if(!response.ok){
     // return {isErorr: true, message:"Couldn't"}
     throw json({title: "error", message:"Couldn't load data"},{
     status: 500}
    )
     }
    else{
      const resData = await response.json();
      //console.log(resData.events);
        return resData.events;
    }

}

async function loadEvent(id){// get api call 
  //console.log(id);
  const response = await fetch('http://localhost:8080/events/'+id);
  if(!response.ok){
    throw json({message:"action is failed"},{status: 500});
  }
 
    else{
      const resData = await response.json();
      //console.log(resData.events);
        return resData.event;
    }

}