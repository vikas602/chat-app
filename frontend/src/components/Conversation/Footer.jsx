import React from 'react'
import { Box, Stack, IconButton, TextField, InputAdornment } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import { IoIosDocument } from "react-icons/io";
import { GrAttachment } from "react-icons/gr";
import { FaRegSmile } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import { TiCamera } from "react-icons/ti";
import { FaNoteSticky } from "react-icons/fa6";
import Tooltip from '@mui/material/Tooltip';
import { FaImage } from "react-icons/fa6";
import Picker from '@emoji-mart/react';
import { FaLocationDot } from "react-icons/fa6";
import data from '@emoji-mart/data';
const StyledInput = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-input": {
    paddingTop: "12px",
    paddingBottom: "12px"
  }
}));
const Attachment = () => {
  const theme = useTheme();
  return (<Box sx={{ width: '350px', height: 'auto', position: 'fixed', backgroundColor: theme.palette.mode == 'light' ? "#F8FAFF" : 'black', borderRadius: '20px', boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)" }} p={3}>
    <Stack direction={'row'} flexWrap={'wrap'} gap={3}>
      <Box sx={{ borderRadius: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '55px', height: '55px', backgroundColor: 'aqua' }}>
        <Tooltip title="Camera">
          <IconButton>
            <TiCamera style={{ color: 'white', fontSize: '26px' }} />
          </IconButton>
        </Tooltip>
      </Box>

      <Box sx={{ borderRadius: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '55px', height: '55px', backgroundColor: 'purple' }}>
        <Tooltip title="Image/Video">
          <IconButton>
            <FaImage style={{ color: 'white', fontSize: '20px' }} />
          </IconButton>
        </Tooltip>
      </Box>

      <Box sx={{ borderRadius: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '55px', height: '55px', backgroundColor: 'rgb(16, 246, 135)' }}>
        <Tooltip title="Document" >
          <IconButton>
            <IoIosDocument style={{ color: 'white' }} />
          </IconButton>
        </Tooltip>
      </Box>

      <Box sx={{ borderRadius: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '55px', height: '55px', backgroundColor: 'red' }}>
        <Tooltip title='Location'>
          <IconButton>
            <FaLocationDot style={{ color: 'white', fontSize: '20px' }} />
          </IconButton>
        </Tooltip>
      </Box>
      
      <Box sx={{ borderRadius: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '55px', height: '55px', backgroundColor: 'orange' }}>
        <Tooltip title="Contact">
          <IconButton>
            <IoPerson style={{ color: 'white', fontSize: '20px' }} />
          </IconButton>
        </Tooltip>
      </Box>

      <Box sx={{ borderRadius: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '55px', height: '55px', backgroundColor: 'rgb(15, 201, 15)' }}>
        <Tooltip title="Sticky Note">
          <IconButton>
            <FaNoteSticky style={{ color: 'white', fontSize: '20px' }} />
          </IconButton>
        </Tooltip>
      </Box>
    </Stack>
  </Box>)
}



const Footer = () => {
  const theme = useTheme();
  const [openPicker, setopenPicker] = React.useState(false);
  const [openAttachment, setopenAttachment] = React.useState(false);
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
          <Box sx={{ display: openAttachment ? "inline" : "none", zIndex: 10, position: 'fixed', bottom: 260, right: 1105 }}>
            <Attachment />
          </Box>
          <StyledInput fullWidth placeholder='Type a message... '
            variant='filled'
            InputProps={{
              disableUnderline: true,
              startAdornment: (<InputAdornment>
                <IconButton onClick={() => { setopenAttachment((prev) => !prev) }}>
                  <GrAttachment style={{ color: openAttachment ? theme.palette.primary.main : ' #919EAB' }} />
                </IconButton>
              </InputAdornment>),
              endAdornment: (
                <InputAdornment>
                  <IconButton onClick={() => { setopenPicker((prev) => !prev) }}>
                    <FaRegSmile style={{ color: openPicker ? theme.palette.primary.main : ' #919EAB' }} />
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