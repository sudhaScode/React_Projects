import { Link, useNavigate } from "react-router-dom";

function HomePage(){
   const navigate = useNavigate();

   const navigateHandler = ()=>{
      navigate('/events/new');
   }

   return(
    <div>
        <h1>
           Event card creation and manage.
        </h1>
        <div>
            <button onClick={navigateHandler}>Add New Event</button>
        </div>
    </div>
   );
}
 export default HomePage;