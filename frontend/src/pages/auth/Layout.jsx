import { Box, Stack } from '@mui/material'
import { blue } from '@mui/material/colors'
import React from 'react'
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <>
            <Box padding={'20px'} sx={{backgroundColor:"blueviolet", width:'100%'}} >
                Chats
            </Box>
            <Stack  justifyItems={'center'} mt={10} alignItems={'center'}>
                <Outlet />
            </Stack>
        </>
    )
}

export default Layout