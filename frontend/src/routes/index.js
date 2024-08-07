import { Suspense, lazy} from 'react';
import {Navigate, useRoutes} from 'react-router-dom';
import DashboardLayout from '../layouts/dashboard';
import Mainlayout from '../layouts/main';
import Layout from '../pages/auth/Layout';


import React from 'react';

import {DEFAULT_PATH} from "../config";
import LoadingScreen from '../components/LoadingScreen';
import ForgetPasword from '../pages/auth/ForgetPassword/ForgetPasword';


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
      element: <Layout />,
      children: [
        {element:<LoginPage />, path:'login'},
        {element:<SignUpPage />, path:'signup'},
        {element:<ForgetPasword/>, path:'forget-password'}
      ]
    },
   {
    path:"/",
    element: <DashboardLayout />,
    children: [
      {element: <Navigate to={DEFAULT_PATH} replace/>, index:true},
      {path: "app", element:<GeneralApp/>},
      {path: "settings", element:<Setting/>},
      {path:"group", element:<GroupPage/>},
      {path:"call", element:<CallLogPage/>},
      {path:"profile", element:<ProfilePage/>},
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

const ProfilePage = Loadable(lazy(()=> import("../pages/dashboard/Profile")))
const LoginPage = Loadable(lazy(()=>import("../pages/auth/LoginPage/LoginPage")));
const SignUpPage = Loadable(lazy(()=>import("../pages/auth/SignupPage/SignupPage")));
const GroupPage = Loadable(lazy(()=>import("../pages/dashboard/Group")));
const ForgetPassword = Loadable(lazy(()=>import("../pages/auth/ForgetPassword/ForgetPasword")));
const CallLogPage = Loadable(lazy(()=>import("../pages/dashboard/Call")));


