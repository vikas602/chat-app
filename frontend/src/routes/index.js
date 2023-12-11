import {Component, Suspense, lazy} from 'react';
import {Navigate, useRoutes} from 'react-router-dom';
import {Dashboard} from '../layouts/dashboard'


import React from 'react'
import { element } from 'prop-types';
import {DEFAULT_PATH} from "../"
import LoadingScreen from '../components/LoadingScreen'

const Loadable= (component)=>(props)=>{
  retrun(
    <Suspense fallback={<LoadingScreen/>}>
      <Component {...props}/>
    </Suspense>
  );
    
}

export default function Router() {
  return useRoutes([
   {
    path:"/",
    element: <Dashboard />,
    children: [
      {element: <Navigate to={DEFAULT_PATH} replace/>, index:true},
      {path: "app", element:<GeneralApp/>},
      {path: "404", element:< Page404 />},
      {path: "*", element:< Page404/>},
    ]
    
   },
   {path:'*', element:< Page404/>}

   


  ])
  
}


