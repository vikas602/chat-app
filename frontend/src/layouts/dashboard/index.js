import { Box, Divider, Stack, Switch, IconButton } from "@mui/material";
import { useTheme, styled } from "@mui/material/styles";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { AiFillMessage } from "react-icons/ai";
import { RiGroupFill } from "react-icons/ri";
import { IoIosSettings } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import "../dashboard/dashboard.scss"
import useSettings from '../../hooks/useSettings';
import { IoChatbox } from "react-icons/io5";
import { MdNightsStay } from "react-icons/md";
import { BsFillSunFill } from "react-icons/bs";
const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 40,
  height: 20,
  padding: 0,
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 15,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(20px)',
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 2,
    '&.Mui-checked': {
      transform: 'translateX(20px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 16,
    height: 16,
    borderRadius: 8,
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: 20 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
    boxSizing: 'border-box',
  },
}));

const DashboardLayout = () => {
  const theme = useTheme();
  const [selected, setSelected] = useState(0);
  const { onToggleMode } = useSettings();



  return (
    <>
      <Stack direction="row">
        <Box p={2} sx={{
          backgroundColor: theme.palette.background.paper,
          boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
          height: "100vh", width: 100,
        }}>

          <Stack direction="column" alignItems="center" justifyContent="space-between" sx={{ height: "100%" }} spacing={4}>
            <Stack alignItems="center" spacing={3}>
              <Box sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "purple",
                height: 64,
                width: 64,
                borderRadius: 1.5
              }}><IoChatbox className="mainIcon" /></Box>
              <Stack spacing={3} sx={{ widht: "max-content" }} direction="column" alignItems="center">
                <div onClick={() => { setSelected(0) }} className={selected == 0 ? "activeIcon" : "icon"}>
                  <AiFillMessage />
                </div>
                <div onClick={() => { setSelected(1) }} className={selected == 1 ? "activeIcon" : "icon"}>
                  <RiGroupFill />
                </div>
                <div onClick={() => { setSelected(2) }} className={selected == 2 ? "activeIcon" : "icon"}>
                  <IoCall />
                </div>
                <Divider sx={{ width: "48px" }} />
                <div onClick={() => { setSelected(3) }} className={selected == 3 ? "activeIcon" : "icon"}>
                  <IoIosSettings />
                </div>
              </Stack>
            </Stack >
            <Stack sx={{ width: "100%" }} alignItems="center" spacing={2} >
              { theme.palette.mode=='light'? <IconButton> <BsFillSunFill style={{color: 'orange', fontSize:'25px'}} onClick={()=>{onToggleMode()}}/></IconButton>: <IconButton> <MdNightsStay style={{color: 'white', fontSize:'25px' }} onClick={()=>{onToggleMode()}}/> </IconButton>}
              <AntSwitch className="switch" onChange={() => { onToggleMode(); }} defaultChecked />
            </Stack>
          </Stack>


        </Box>
        <Outlet />
      </Stack>

    </>
  );
};

export default DashboardLayout;
