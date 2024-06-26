import React from 'react';
import Chat from './Chat';
import { Box, Stack } from '@mui/material';
import { useTheme} from '@mui/material/styles'
import Conversation from '../../components/Conversation';
import Contact from '../../components/Conversation/Contact';
import {useSelector} from 'react-redux';
import SharedMessages from '../../components/Conversation/SharedMessages';
import StaredMessage from '../../components/Conversation/StaredMessage';

function Generalapp() {
  const theme = useTheme()
  const {sidebar} =useSelector((store)=>store.app);
  return (
    <>
      <Stack direction={'row'} width={'100%'}>
        <Chat />
        <Box sx={{
          height: "100%",
          width: "100%",
          backgroundColor: theme.palette.mode== "light"? "#fff": theme.palette.background.default
        }}>
          <Conversation />

        </Box>
        {sidebar.open && (()=>{
          switch(sidebar.type){
            case "CONTACT":
              return <Contact/>
            case "STARED":
              return <StaredMessage/>
            case "SHARED":
              return <SharedMessages/>  
            
          }
        })()}
      </Stack>

    </>
  )
}

export default Generalapp