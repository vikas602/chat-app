import { Divider, Stack, Typography, Box, Link, IconButton } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { DotsThreeVertical, Download, DownloadSimple, Image } from 'phosphor-react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import React from 'react';
import {Message_options} from '../../data';

const DocMsg = ({ el }) => {
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
            <Stack spacing={2}>
                <Stack direction={'row'} p={1} spacing={3} alignItems={'center'} sx={{ background: theme.palette.background.paper, borderRadius: '10px' }}>
                    <Image width={55} />
                    <Typography variant='caption'>Abstact.img</Typography>
                    <IconButton>
                        <DownloadSimple />
                    </IconButton>
                </Stack>
                <Typography variant='body2' sx={{ color: el.incoming ? theme.palette.text : "#fff" }}>{el.message}</Typography>
            </Stack>
        </Box>
        <Option />
    </Stack>
}
const LinkMsg = ({ el }) => {
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
            <Stack spacing={2}>
                <Stack spacing={2}>
                    <img src={el.preview} alt={el.message} style={{ maxHeight: 210, borderRadius: "10px" }} />
                    <Stack spacing={1}>
                        <Typography variant='subtitle2'>hello this is the link</Typography>
                        <Typography variant='subtitle2' component={Link} sx={{ color: theme.palette.primary.main }} to="//https://www.youtube.com">www.youtube.com</Typography>
                    </Stack>
                    <Typography variant='body2' sx={{ color: el.incoming ? theme.palette.text : "#fff" }}>{el.message}</Typography>
                </Stack>
            </Stack>
        </Box>
        <Option />
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
        <Option />
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
        <Option />
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
        <Option />
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
const Option = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <DotsThreeVertical id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                size={20} />
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <Stack spacing={1} px={1}>
                    {Message_options.map((el) => (
                        <MenuItem onClick={handleClick}>{el.title}</MenuItem>)
                    )}
                </Stack>
            </Menu>


        </>
    )
}
export { Timeline, TextMsg, MediaMsg, ReplyMsg, LinkMsg, DocMsg };