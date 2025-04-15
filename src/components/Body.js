


// import React, { createElement } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './login'
import Browse from './Browse'


const Body = () => {
 
   const appRouter=createBrowserRouter([
    {
        path:"/",
        element: <Login/>
    },
    {
        path: "/browse",
        element: <Browse/>
    }
   ]);
 
 
 
    return (
       <div>
         <RouterProvider router={appRouter}/>
       </div>
    );
};

export default Body;