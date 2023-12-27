import React from 'react';
import {  Box, Stack} from '@mui/material';
import "./conversation.scss"
import Message from './Message';
import Header from './Header';
import Footer from './Footer';

function Conversation() {
  return (
    <Stack height={"100%"} maxHeight={"100vh"} width={"auto"} >
      <Header/>
      <Box  sx={{ flexGrow: 1, overflowY:"auto"}} height={"70%"} >
        <Message/>
      </Box>
      <Footer/>
    </Stack>
  )
}

export default Conversation