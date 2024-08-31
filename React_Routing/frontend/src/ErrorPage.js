import { useRouteError } from "react-router-dom";
import MainNavigation from "./components/MainNavigation";
import PageContent from "./components/PageContent";


function ErrorPage(){
    const error = useRouteError();
    let message = "Something went wrong with server";
    let title = "Something went wrong!";
    console.log(error);
    if(error.status === 500){
     message = error.data.message;
    }
    if(error.status === 404){
    title = "Something went wrong with web server";
     message = "server data processing failed"
    }   

    return (
        <>
        <MainNavigation/>
        <PageContent title={title}>
          <p>{message}</p>
        </PageContent>
        </>

    );
 /*  
return (
      <>
      <MainNavigation/>
      <main>
          <h1>
             An error accured
          </h1>
          <p>Cloud not find a your destination!</p>
      </main>   
      </> 
);*/
}
export default ErrorPage;