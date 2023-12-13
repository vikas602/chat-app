import React from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <div></div>

      <Outlet />
    </>
  );
};

export default MainLayout;
