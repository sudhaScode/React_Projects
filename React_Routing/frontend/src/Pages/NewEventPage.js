import { Link} from "react-router-dom";
import EventForm from "../components/EventForm";


function NewEventPage(){
    return(
        <div>
        <EventForm method="post"/>
        <p><Link to ="../.." relative="path">Back</Link></p>
        </div>
    );
}
export default NewEventPage;
