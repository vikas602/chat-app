import { Divider, Stack, Typography, Box, Link } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import React from 'react';


const LinkMsg = ({ el }) => {
    const theme = useTheme();
    return <Stack direction={'row'} justifyContent={el.incoming ? "start" : "end"}>
        <Box
            p={1}
            sx={{
                backgroundColor: el.incoming ? 'purple' :
                    theme.palette.primary.main,
                borderRadius: 1.5,
                boxShadow: "0px 10px 15px -6px rgba(0,0,0,0.1)",
                width: "max-content"
            }}>
            <Stack spacing={2}>
                <Stack spacing={2}>
                    <img src={el.preview} alt={el.message} style={{ maxHeight: 210, borderRadius: "10px" }} />
                    <Stack spacing={2}>
                        <Typography variant='subtitle2'>hello this is the link</Typography>
                        <Typography variant='subtitle2' component={Link} sx={{color:theme.palette.primary.main}} to="//https://www.youtube.com">www.youtube.com</Typography>
                    </Stack>
                    <Typography variant='body2' sx={{color: el.incoming? theme.palette.text:"#fff"}}>{el.message}</Typography>
                </Stack>
            </Stack>
        </Box>
    </Stack>
}
const ReplyMsg = ({ el }) => {
    const theme = useTheme();
    return <Stack direction={'row'} justifyContent={el.incoming ? "start" : "end"}>
        <Box
            sx={{
                backgroundColor: el.incoming ? theme.palette.background.default :
                    theme.palette.primary.main,
                borderRadius: 1.5,
                boxShadow: "0px 10px 15px -6px rgba(0,0,0,0.1)",
                width: "max-content"
            }}>
            <Stack p={1} >
                <Stack p={1} direction={'column'} sx={{ backgroundColor: theme.palette.background.paper, borderRadius: 1 }} alignItems={'center'}>
                    <Typography variant="body2" color={theme.palette.text}>
                        {el.message}
                    </Typography>
                </Stack>
                <Stack justifyContent={!el.incoming ? "start" : "end"} py={1}>
                    <Box>
                        <Typography variant="body2" color={el.incoming ? theme.palette.text : "#fff"}>
                            {el.reply}
                        </Typography>
                    </Box>
                </Stack>

            </Stack>

        </Box >
    </Stack >
}
const MediaMsg = ({ el }) => {
    const theme = useTheme();
    return <Stack direction={'row'} justifyContent={el.incoming ? "start" : "end"}>
        <Box
            p={1}
            sx={{
                backgroundColor: el.incoming ? theme.palette.background.default :
                    theme.palette.primary.main,
                borderRadius: 1.5,
                boxShadow: "0px 10px 15px -6px rgba(0,0,0,0.1)",
                width: "max-content"
            }}>
            <Stack spacing={1}>
                <img src={el.img} alt={el.message} style={{ maxHeight: 210, borderRadius: "10px" }} />
                <Typography variant='body2' color={el.incoming ? theme.palette.text : "#fff"}>
                    {el.message}
                </Typography>
            </Stack>
        </Box>
    </Stack>
}

const TextMsg = ({ el }) => {
    const theme = useTheme();
    return <Stack direction={'row'} justifyContent={el.incoming ? "start" : "end"}>
        <Box
            p={1}
            sx={{
                backgroundColor: el.incoming ? theme.palette.background.default :
                    theme.palette.primary.main,
                borderRadius: 1.5,
                boxShadow: "0px 10px 15px -6px rgba(0,0,0,0.1)",
                width: "max-content"
            }}>
            <Typography variant="body" fontSize={'14px'} color={el.incoming ? theme.palette.text : "#fff"}>
                {el.message}
            </Typography>

        </Box>
    </Stack>
}
const Timeline = ({ el }) => {
    const theme = useTheme();
    return <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
        <Divider width="46%" />
        <Typography variant='caption' sx={{ color: theme.palette.text }}>{el.text}</Typography>
        <Divider width="46%" />


    </Stack>
}

export { Timeline, TextMsg, MediaMsg, ReplyMsg, LinkMsg };