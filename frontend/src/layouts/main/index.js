import React from "react";
import { Outlet } from "react-router-dom";
import { Container, Stack } from "@mui/material";

const MainLayout = () => {
  return (
    <>,
      <Container >

        <Stack alignItems={'center'} justifyContent={'center'} sx={{height:'90vh'}}>
        <Outlet />
        </Stack>
      </Container>
    </>
  );
};

export default MainLayout;
