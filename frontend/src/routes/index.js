import { Suspense, lazy} from 'react';
import {Navigate, useRoutes} from 'react-router-dom';
import DashboardLayout from '../layouts/dashboard';
import Mainlayout from '../layouts/main'


import React from 'react';

import {DEFAULT_PATH} from "../config";
import LoadingScreen from '../components/LoadingScreen';


const Loadable= (Component)=>(props)=>{
  return(
    <Suspense fallback={<LoadingScreen/>}>
      <Component {...props}/>
    </Suspense>
  );
    
}

export default function Router() {
  return useRoutes([
    {
      path:'/auth',
      element: <Mainlayout />,
      children: [
        {element:<LoginPage />, path:'login'}
      ]
    },
   {
    path:"/",
    element: <DashboardLayout />,
    children: [
      {element: <Navigate to={DEFAULT_PATH} replace/>, index:true},
      {path: "app", element:<GeneralApp/>},
      {path: "settings", element:<Setting/>},
      {path: "404", element:< Page404 />},
      {path: "*", element:< Page404/>},
    ]
    
   },
   {path:'*', element:< Page404/>}
  ]);
}

const GeneralApp = Loadable(
  lazy(() => import("../pages/dashboard/Generalapp")),
);
const Setting = Loadable(
  lazy(() => import("../pages/dashboard/Setting")),
);
const Page404 = Loadable(lazy(() => import("../pages/page404")));
const LoginPage = Loadable(lazy(()=>import("../pages/auth/LoginPage")))


