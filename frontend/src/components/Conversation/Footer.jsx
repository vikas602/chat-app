import React, { useEffect, useState } from 'react'
import { Box, Stack, IconButton, TextField, InputAdornment } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import { GrAttachment } from "react-icons/gr";
import { FaRegSmile } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa6";
import Picker from '@emoji-mart/react';
import data from '@emoji-mart/data';
const StyledInput = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-input": {
    paddingTop: "12px",
    paddingBottom: "12px"
  }
}));



const Footer = () => {
  const theme = useTheme();
  const [openPicker, setopenPicker] = React.useState(false);
  const attachment = ()=>{
    return(<Box sx={{width:'400px', height:'300px', position: 'fixed', backgroundColor: 'black', }}>
      <Stack>
        <Box>hello</Box>
      </Stack>
    </Box>)
  }
 

  return (
    <Box sx={{
      height: 80,
      width: "100%",
      backgroundColor: theme.palette.mode == 'light' ? "#F8FAFF" : 'black',
      boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
      alignItems: "center"
    }} p={2}>
      <Stack direction={'row'} alignItems={'center'} spacing={3}>
        <Stack sx={{ width: '100%' }}>
          <Box sx={{ display: openPicker ? "inline" : "none", zIndex: 10, position: 'fixed', bottom: 81, right: 100 }}>
            <Picker data={data} theme={theme.palette.mode} onEmojiSelect={console.log} />
          </Box>
          <Box sx={{ display: openPicker ? "inline" : "none", zIndex: 10, position: 'fixed', bottom: 81, right: 100 }}>
            
          </Box>
          <StyledInput fullWidth placeholder='Type a message... '
            variant='filled'
            InputProps={{
              disableUnderline: true,
              startAdornment: (<InputAdornment>
                <IconButton>
                  <GrAttachment />
                </IconButton>
              </InputAdornment>),
              endAdornment: (
                <InputAdornment>
                  <IconButton onClick={() => { setopenPicker((prev)=> !prev)}}>
                    <FaRegSmile />
                  </IconButton>
                </InputAdornment>
              )

            }} />
        </Stack>
        <Box sx={{ height: "45px", width: "45px", backgroundColor: theme.palette.primary.main, borderRadius: "10px" }} boxShadow={'0px 10px 15px -6px rgba(0,0,0,0.1)'}>
          <Stack alignItems={'center'} sx={{ width: '100%', height: '100%' }} justifyContent={'center'}>
            <IconButton>
              <FaPaperPlane className='sentIcon' />
            </IconButton>
          </Stack>
        </Box>
      </Stack>
    </Box>

  )
}

export default Footer