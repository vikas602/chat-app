import React from 'react'
import { Avatar, Box, Stack, Typography, Divider, IconButton, Badge} from '@mui/material';
import { faker } from '@faker-js/faker';
import { useTheme, styled } from '@mui/material/styles';
import { IoCall } from "react-icons/io5";
import { FaVideo } from "react-icons/fa6";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { PiCaretDownBold } from "react-icons/pi";
import "./conversation.scss"
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
function Header() {
  const theme = useTheme();
  return (
    <Box sx={{
        height: 70,
        width: "100%",
        backgroundColor: theme.palette.mode=='light'? "#F8FAFF": 'black',
        boxShadow: "0px 10px 15px -6px rgba(0,0,0,0.1)"
      }} p={2}>
        <Stack alignItems={'center'} direction={'row'} justifyContent={'space-between'} sx={{ width: '100%', height: "100%" }}>
          <Stack direction={'row'} spacing={2} >
            <Box>
              <StyledBadge
                overlap="circular"
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right"
                }}
                variant="dot">
                <Avatar alt={faker.name.fullName()} src={faker.image.avatar()} />
              </StyledBadge>
            </Box>
            <Stack>
              <Typography>{faker.name.fullName()}</Typography>
              <Typography variant='caption'>Online</Typography>
            </Stack>
          </Stack>
          <Stack direction={'row'} spacing={2} >
            <IconButton>
              <FaVideo className='icons' />
            </IconButton>
            <IconButton>
              <IoCall className='icons' />
            </IconButton>
            <IconButton>
              <FaMagnifyingGlass className='icons' />
            </IconButton>
            <Divider orientation='vertical' flexItem height="20px" />
            <IconButton>
              <PiCaretDownBold />
            </IconButton>
          </Stack>
        </Stack>
      </Box>
  )
}

export default Header