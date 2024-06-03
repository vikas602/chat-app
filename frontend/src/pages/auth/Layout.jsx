import { Box, IconButton, Stack, Typography,Link } from '@mui/material'
import { blue } from '@mui/material/colors'
import React from 'react'
import { Outlet } from 'react-router-dom'
import { MdNightsStay } from "react-icons/md";
import { BsFillSunFill } from "react-icons/bs";
import { StackOverflowLogo } from 'phosphor-react';
import { useTheme} from '@mui/material/styles'
import useSettings from '../../hooks/useSettings';
import { IoChatbox } from "react-icons/io5";
function Layout() {
    const theme = useTheme();
    const { onToggleMode } = useSettings();
    return (
        <>
            <Box py={'15px'} px={'25px'} sx={{ backgroundColor: "blueviolet", width: '100%', boxShadow: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px", borderEndStartRadius:'10px', borderEndEndRadius:'10px'}} >
                <Stack justifyContent={'space-between'} direction={'row'}>
                    <Stack direction={'row'} spacing={2} alignItems={'center'}>
                    <IoChatbox fontSize={"40px"} color={"white"}/>
                    <Typography variant='h4' color={'white'} >Chats</Typography>
                    </Stack>
                    <Stack direction={'row'} spacing={3} alignItems={'center'}> 
                    
                    { theme.palette.mode=='light'? <IconButton> <BsFillSunFill style={{color: 'white', fontSize:'25px'}} onClick={()=>{onToggleMode()}}/></IconButton>: <IconButton> <MdNightsStay style={{color: 'white', fontSize:'25px' }} onClick={()=>{onToggleMode()}}/> </IconButton>}
                    <Link sx={{color:'white', fontSize:'16px'}}>About Us</Link>
                    <Link sx={{color:'white', fontSize:'16px'}}>Feedback</Link>
                    <Link sx={{color:'white', fontSize:'16px'}}>Career</Link>
                    </Stack>
                </Stack>
            </Box>
            <Stack justifyItems={'center'} mt={10} alignItems={'center'}>
                <Outlet />
            </Stack>
        </>
    )
}

export default Layout