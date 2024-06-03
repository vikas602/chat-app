import { Box, Stack, Divider, IconButton, Typography, InputBase  } from '@mui/material'
import React from 'react'
import { useTheme } from '@mui/material/styles';
import { ChatList } from '../../data';
import { callLog } from '../../data';
import ChatComponent from './chatComponent/ChatComponent';
import { FaMagnifyingGlass } from "react-icons/fa6";
import { TbPinnedFilled } from "react-icons/tb";
import { IoAdd } from "react-icons/io5";
import "./chat.scss";
import CreateGroup from '../../sections/main/CreateGroup';


function Group() {
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
            Groups
          </Typography>
        </Stack>
        <Stack >
          <Box sx={{ width: "100%", borderRadius: "8px", height: "40px", backgroundColor: theme.palette.mode=='light'? "white": theme.palette.background.default, boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)" }} px={2} display={'flex'} alignItems={'center'}  >
            <FaMagnifyingGlass className='searchIcon' />
            <InputBase
             sx={{ ml: 2, flex: 1, mt:'5px' }}
             placeholder="Search...."
            inputProps={{ 'aria-label': 'search google maps' }}
            />
          </Box>
    
        </Stack>
        <Stack spacing={1.5} sx={{height: "80%" }}>
          <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} spacing={1.5} >
            <Typography variant='body2' color={'skyblue'} >Create New Group</Typography>
            <IconButton>
                <IoAdd style={{color:'skyblue'}} onClick={()=>{handleClickOpen()}}/>
            </IconButton>
          </Stack>
          <Divider />
          <Stack spacing={2} sx={{ flexGrow: 1, overflowY: 'scroll', overflowX:'hidden',  height: "100%" }}>
              <Stack spacing={2}>
                <Stack direction={'row'} alignItems={'center'} spacing={1.2}>
                  <TbPinnedFilled />
                  <Typography variant={'subtitle2'}>Pinned</Typography>
                </Stack>
                {ChatList.filter((el) => el.pinned).map((el) => {
                  return <ChatComponent {...el} />
                })}

              </Stack>
              <Stack spacing={2}>

                <Typography variant={'subtitle2'} >All Groups</Typography>
                {ChatList.filter((el) => !el.pinned).map((el) => {
                  return <ChatComponent {...el} />
                })}

              </Stack>
          </Stack>
        </Stack>
      </Stack>
        </Box>
    {open && <CreateGroup open={open}  handleClose={handleClose} />}
    </Stack>

  )
}

export default Group