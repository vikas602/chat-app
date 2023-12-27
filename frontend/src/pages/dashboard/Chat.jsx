import { Box, Divider, IconButton, Stack, Typography } from '@mui/material';
import { useTheme, styled, alpha} from "@mui/material/styles"
import { Button } from '@mui/material';
import { LuCircleDashed } from "react-icons/lu";
import { IoMdArchive } from "react-icons/io";
import React from 'react'
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { FaMagnifyingGlass } from "react-icons/fa6";
import "./chat.scss";
import ChatComponent from './chatComponent/ChatComponent';
import { TbPinnedFilled } from "react-icons/tb";
import { ChatList } from '../../data';
import {SimpleBarStyle} from '../../components/Scrollbar'


function Chat() {
  const theme= useTheme();

  return (

    <Box sx={{ position: "relative", width: 320, maxHeight:"100vh", backgroundColor: theme.palette.mode=='light'? "#F8FAFF": "black", boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)" }} p={3}>
      <Stack direction={"column"} spacing={2} sx={{ height: "96.5vh" }}>
        <Stack direction="row" alignItems={"center"} justifyContent={"space-between"} >
          <Typography variant='h4'>
            Chats
          </Typography>
          <IconButton>
            <LuCircleDashed />
          </IconButton>
        </Stack>
        <Stack >
          <Box sx={{ width: "100%", borderRadius: "8px", height: "40px", backgroundColor: theme.palette.mode=='light'? "white": theme.palette.background.default, boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)" }} px={2} display={'flex'} alignItems={'center'}  >
            <FaMagnifyingGlass className='searchIcon' />
            <input type='text' className='searchInput' placeholder='Search...' style={{backgroundColor: theme.palette.mode=='light'? "white": theme.palette.background.default}} />
          </Box>
        </Stack>
        <Stack spacing={1.5} sx={{height: "80%" }}>
          <Stack direction={'row'} alignItems={'center'} spacing={1.5} >
            <IoMdArchive className='archiveIcon' />
            <Button >Archieved</Button>
          </Stack>
          <Divider />
          <Stack spacing={2} sx={{ flexGrow: 1, overflowY: 'scroll', overflowX:'hidden',  height: "100%" }}>
              <Stack spacing={2}>
                <Stack direction={'row'} alignItems={'center'} spacing={1.2}>
                  <TbPinnedFilled />
                  <Typography variant={'subtitle2'} color='purple'>Pinned</Typography>
                </Stack>
                {ChatList.filter((el) => el.pinned).map((el) => {
                  return <ChatComponent {...el} />
                })}

              </Stack>
              <Stack spacing={2}>

                <Typography variant={'subtitle2'} color='purple'>All Chats</Typography>
                {ChatList.filter((el) => !el.pinned).map((el) => {
                  return <ChatComponent {...el} />
                })}

              </Stack>
            
          </Stack>
        </Stack>
      </Stack>
    </Box>

  )
}

export default Chat