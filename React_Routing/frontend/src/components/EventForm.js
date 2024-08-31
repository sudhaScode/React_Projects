import { Form,useNavigate,useNavigation, useActionData, json, redirect} from 'react-router-dom';

import Page from '../UI/Page';
//import { useState } from 'react';

import classes from './EventForm.module.css';

function EventForm({ method, event}) {
  // const [title, setTitle] = useState();
  // const [image, setImage] = useState();
  // const [date, setDate] = useState();
  // const [description, setDescription] = useState();


  const navigate = useNavigate();
  const navigation = useNavigation();
  const data = useActionData(); // from backend 
  function cancelHandler() {
    navigate('..');
  } 
  const isSubmitting = navigation.state === 'submitting';
  /*function inputHandler(key, value){
    if(key === 'title'){
      setTitle(value);

    }
    else if(key === 'image'){
        setImage(value);
    }
    else if(key === date){
          setDate(value);
    }
    else{
      setDescription(value);
    }

  }
  function submitEventHandler(event){
     event.preventDefault();
     const newEvent={
      title: title,
      image: image,
      date: date,
      description, description
     }
     
     console.log(newEvent)
     navigate("..");
     setDate();
     setDescription();
     setImage()
     setTitle()
  }
*/
  return (
    <Page className={classes.data}>
    <Form method = {method} className={classes.form} >
      {data && data.errors &&(
        <ul style={{color:'red'}}>
          {Object.values(data.errors).map((err)=>(
            <li key ={err}>{err}</li  >
          ))}
        </ul>
      )}
      <p>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" name="title" required 
        defaultValue={event?event.title:""}
        />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input id="image" type="url" name="image" required defaultValue={event?event.image:""} 
        />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input id="date" type="date" name="date" required defaultValue={event?event.date:""}
        />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" rows="5" required defaultValue={event?event.description:""} 
        />
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler} disabled={isSubmitting}>  
          Cancel
        </button>
        <button disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Save'}
        </button>
      </div>
    </Form>
    </Page>
  );
}

export default EventForm;


export async function action({request, params}){
    const data = await request.formData();
    const method = request.method;
    const eventData = {
      title: data.get('title'),
      image: data.get('image'),
      date: data.get('date'),
      description: data.get('description')
    }
    console.log(method)
    let url =   'http://localhost:8080/events';
    if(method === 'PATCH'){
      const eventid = params.eventid;
      url ='http://localhost:8080/events/'+ eventid;
    }
const response = await fetch(url,  {
  method: method,
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify(eventData),
});
if(response.status === 422){
     return response;
}
if(!response.ok){
  throw json({title:"Server is not responding",message:"Data can't sent" }, {status: 500} );
}
return redirect('/events');
}

