// Challenge / Exercise

import router from "./Routing";
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

//createBrowserRouter || BrowserRouter , Routes, Link


function App() {
  return (
    <div>
      
      <RouterProvider router= {router}/>
      
    </div>
  );
}

export default App;
