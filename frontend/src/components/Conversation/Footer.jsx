import React from 'react'
import {  Box, Stack, IconButton, TextField, InputAdornment } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import { GrAttachment } from "react-icons/gr";
import { FaRegSmile } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa6";
const StyledInput = styled(TextField)(({ theme }) => ({
    "& .MuiInputBase-input": {
      paddingTop: "12px",
      paddingBottom: "12px"
    }
  }))
function Footer() {
  const theme= useTheme();
  return (
    <Box sx={{
        height: 80,
        width: "100%",
        backgroundColor: theme.palette.mode=='light'? "#F8FAFF": 'black',
        boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
        alignItems: "center"
      }} p={2}>
        <Stack direction={'row'} alignItems={'center'} spacing={3}>
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
                  <IconButton>
                    <FaRegSmile />
                  </IconButton>
                </InputAdornment>
              )

            }} />
          <Box sx={{ height: "45px", width: "45px", backgroundColor: theme.palette.primary.main, borderRadius: "10px" }} boxShadow={'0px 10px 15px -6px rgba(0,0,0,0.1)'}>
            <Stack alignItems={'center'} sx={{width:'100%', height:'100%'}} justifyContent={'center'}>
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