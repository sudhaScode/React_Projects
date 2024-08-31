//import EventsNavigation from "../components/EventsNavigation";
import { Link } from 'react-router-dom';
import classes from './EventsList.module.css'


/*const PRODUCTS = [
    {id: "e1", event:" Monday special"},
    { id: "e2", event: "Wednessday special"},
    {id: "e3", event: "Friday special"}
]; */

function EventsList({events}){  

// {PRODUCTS.map((event)=>(<li key={event.id}><Link to ={`eventDetails/${event.id}`}>{event.event}</Link></li>))}
//console.log(events);

  return (
       <div className={classes.events}>
          <h1>All Events</h1>
          <ul className={classes.list}>
            {events && events.map((event) => (
              <li key={event.id} className={classes.item}>
                <Link to={`/events/${event.id}`}>
                  <img src={event.image} alt={event.title} />
                  <div className={classes.content}>
                    <h2>{event.title}</h2>
                    <time>{event.date}</time>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      );
};
export default EventsList;  