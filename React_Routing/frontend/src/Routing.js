import EditEventPage from "./Pages/EditEventPage";
import EventDetailPage, {loader as useEventLoad, action as deleteAction} from "./Pages/EventDetailPage";
//import EventsList from "./Pages/EventsList";
import  EventsPage, {loader as eventsLoader} from "./Pages/EventsPage";
import HomePage from "./Pages/HomePage";
import NewEventPage, {action as newEventAction} from "./Pages/NewEventPage";
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import RootLayout from "./RootLayout";
import  ErrorPage from "./ErrorPage";
import EventRoot from "./EventRoot";
import { action as updateEventAction} from './components/EventForm';
import NewsletterPage, {action as newsletterAction} from "./Pages/NewsLetter";

const router = createBrowserRouter(
    [{      // Route
      path:'/',
      element:<RootLayout/>,
      errorElement: <ErrorPage/>,
      children:[
        //{path:'', element: <HomePage/>},  
        {index:true, 
         element: <HomePage/>,},
        {path: 'events', 
        element:<EventRoot/>,
         children:[
             {index:true, 
              element: <EventsPage/>, 
              loader: eventsLoader, 
             },
             {path: ':eventid', 
              id:"event-detail",
              loader: useEventLoad, 
              children:[
                {index: true, element: <EventDetailPage/>, action: deleteAction  },
                {path: 'edit', element:<EditEventPage/>, action: updateEventAction}
              ]
            },  
             {path:'new', element:<NewEventPage/>, action: updateEventAction}, 
             ]},
             {
              path: 'newsletter',
              element: <NewsletterPage/>,
              action: newsletterAction,
            }, 
            ],
      }
    ]);

    export default router;