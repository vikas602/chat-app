import { Avatar, Box, Stack, Badge, Typography, Hidden } from '@mui/material'
import React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { faker } from '@faker-js/faker';

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

function ChatComponent({ id, name, img, msg, time, unread, online }) {
    const theme = useTheme()
    return (
        <Box sx={{ height: "64px", backgroundColor: theme.palette.mode == 'light' ? "white" : theme.palette.background.default, width: "100%", borderRadius: "15px", boxShadow: "0px 10px 15px -9px rgba(0,0,0,0.1)" }} p={1}>
            <Stack direction={'row'} spacing={2} alignItems={'center'} sx={{ width: "100%" }} justifyContent={'space-between'}>
                <Stack direction={'row'} spacing={2}>
                    {online ? <StyledBadge
                        overlap="circular"
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        variant="dot"
                    >
                        <Avatar alt="Remy Sharp" src={img} />
                    </StyledBadge> : <Avatar alt="Remy Sharp" src={img} />}
                    <Stack spacing={0.3}>
                        <Typography variant='subtitle2'>
                            {name}
                        </Typography>
                        <Box width={'150px'} sx={{ overflow:'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }} p={'0px'} spacing={'0px'}>
                            <Typography variant='caption'>
                                {msg}
                            </Typography>
                        </Box>
                    </Stack>
                </Stack>
                <Stack spacing={2} alignItems={'center'} >
                    <Typography sx={{ fontWeight: 600 }} variant='caption'>{time}</Typography>
                    <Badge color='primary' badgeContent={unread}></Badge>

                </Stack>
            </Stack>

        </Box>
    )
}

export default ChatComponent