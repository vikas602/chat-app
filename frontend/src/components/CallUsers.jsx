import React from 'react'
import { Avatar, Box, Stack, Badge, Typography, Hidden, IconButton } from '@mui/material'
import { styled, useTheme } from '@mui/material/styles';
import { ImArrowUpRight2 } from "react-icons/im";
import { faker } from '@faker-js/faker';
import { IoVideocamOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

function CallUsers({ id, name, img, time, online, }) {
  const theme = useTheme();
  return (
    <Box sx={{ height: "64px", backgroundColor: theme.palette.mode == 'light' ? "white" : theme.palette.background.default, width: "100%", borderRadius: "15px", boxShadow: "0px 10px 15px -9px rgba(0,0,0,0.1)" }} p={1}>
      <Stack direction={'row'} spacing={2} alignItems={'center'} sx={{ width: "100%" }} justifyContent={'space-between'}>
        <Stack direction={'row'} spacing={2}>
          {online ? <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            variant="dot">
            <Avatar alt="Remy Sharp" src={img} />
          </StyledBadge> : <Avatar alt="Remy Sharp" src={img} />}
          <Stack spacing={0.3}>
            <Typography variant='subtitle2'>
              {name}
            </Typography>

          </Stack>

        </Stack>
        <Stack direction='row' spacing={1}>
          <IconButton sx={{color:''}}>
            <IoVideocamOutline style={{color:'rgb(15, 245, 65)'}}/>
          </IconButton>
          <IconButton>
            <IoCallOutline style={{color:'rgb(15, 245, 65)', fontSize:'22px'}} />
          </IconButton>


        </Stack>

      </Stack>
    </Box>
  )
}

export default CallUsers