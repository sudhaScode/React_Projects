//import { json,Navigate} from "react-router-dom";
import EventForm from "../components/EventForm";
import { useRouteLoaderData } from "react-router-dom";

function EditEventPage(){
    const data = useRouteLoaderData("event-detail");// data gets from route defined 
    
    return(
        <div>
        <EventForm event={data.event} method='patch'/>
        </div>
    );
}
//<p><Link to ="../.." relative="path">Back</Link></p>
export default EditEventPage;


/*export async function action({params, request}){
      const eventid = params.eventid;
      const data = await request.formData();
      const updateObj = {
        title: data.get('title'),
        image: data.get('image'),
        description: data.get('description')
      }
    const response = await fetch('http://localhost:8080/events',{
        method: request.method,
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(updateObj)
    });

    if(!response.ok){
        throw json({title:"Details are not fetched", message:"Something went wrong"},{status:500});
    }
    return Navigate('/events');

}*/


