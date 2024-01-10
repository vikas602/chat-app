import { Box, IconButton, Typography, Stack, Avatar } from '@mui/material'

import React from 'react'
import { useTheme } from '@mui/material/styles'
import { CgCloseO } from "react-icons/cg";
import { faker } from '@faker-js/faker';
import { IoVideocam } from "react-icons/io5";
import { IoCall } from "react-icons/io5";

function Contact() {
  const theme = useTheme();
  return (
    <Box sx={{ width: 360, height: "100vh" }}>
      <Stack sx={{ height: '100%', justifyContent: 'space-between' }}>
        <Box sx={{
          boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
          width: '100%',
          backgroundColor: theme.palette.mode == 'light' ? "#F8FAFF" : 'purple'

        }} p={1.7}>
          <Stack justifyContent={'space-between'} alignItems={'center'} direction={'row'}>
            <Typography>Contact Info</Typography>
            <IconButton>
              <CgCloseO />
            </IconButton>
          </Stack>
        </Box>
        <Stack sx={{ height: "100%", position: "relative", flexGrow: 1, overflowY: "scroll" }} p={1.6}  spacing={2}>
          <Stack alignItems={"center"} direction={"row"} spacing={2}>
            <Avatar src={faker.image.avatar()} alt={faker.name.firstName()} sx={{ height: 55, width: 55 }} />
            <Stack spacing={0.5}>
              <Typography variant="article3" fontWeight={600}>
                {faker.name.firstName()}
              </Typography>
              <Typography variant="body4" fontWeight={500}>
                {"+91 3289728899"}
              </Typography>
            </Stack>
          </Stack>
          <Stack direction={"row"} justifyContent={'space-between'}>
            <Stack>
              <IconButton>
                <IoVideocam />
              </IconButton>
            </Stack>
            <Stack>
              <IconButton>
                <IoCall />
              </IconButton>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  )
}

export default Contact;