import { Box, Stack, Divider, IconButton, Typography, Button, InputBase  } from '@mui/material'
import React from 'react'
import { useTheme } from '@mui/material/styles'
import { CallLog } from '../../data';
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import "./chat.scss";
import CallLogComponent from './callLogComponent/CallLogComponent';
import CallDialog from '../../sections/main/CallDialog';


function Call() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Stack direction={'row'} sx={{width:'100%'}}>
        <Box sx={{ position: "relative", width: 320, maxHeight:"100vh", backgroundColor: theme.palette.mode=='light'? "#F8FAFF": "black", boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)" }} p={3}>
        <Stack direction={"column"} spacing={2} sx={{ height: "96.5vh" }}>
        <Stack direction="row" alignItems={"center"} justifyContent={"space-between"} >
          <Typography variant='h4'>
            Call Logs
          </Typography>
        </Stack>
        <Stack >
          <Box sx={{ width: "100%", borderRadius: "8px", height: "40px", backgroundColor: theme.palette.mode=='light'? "white": theme.palette.background.default, boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)" }} px={2} display={'flex'} alignItems={'center'}  >
            <Stack direction={'row'} alignItems={'center'}>
            <FaMagnifyingGlass className='searchIcon' />
            <InputBase
        sx={{ ml: 2, flex: 1, mt:'3px' }}
        placeholder="Search...."
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      </Stack>
          </Box>
    
        </Stack>
        <Stack spacing={1.5} sx={{height: "80%" }}>
          <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} spacing={1.5} >
            <Typography variant='body2' color={'skyblue'} >Make New Call</Typography>
            <IconButton>
                <IoCall style={{color:'skyblue', fontSize:'18px'}} onClick={()=>{handleClickOpen()}}/>
            </IconButton>
          </Stack>
          <Divider />
          <Stack spacing={2} sx={{ flexGrow: 1, overflowY: 'scroll', overflowX:'hidden',  height: "100%" }}>
              
              <Stack spacing={2}>

                <Typography variant={'subtitle2'} >All Call Logs</Typography>
                {CallLog.map((el) => {
                  return <CallLogComponent {...el} />
                })}
              </Stack>
          </Stack>
        </Stack>
      </Stack>
    
        </Box>
    {open && <CallDialog open={open}  handleClose={handleClose} />}
    </Stack>
    

  )
 
  
}

export default Call