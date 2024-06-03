
import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { useTheme } from '@mui/material/styles';
import { Box, InputBase } from '@mui/material';
import { FaMagnifyingGlass } from "react-icons/fa6";
import { CallUsersList } from '../../data';

import { Stack, Autocomplete } from '@mui/material'
import CallElement from '../../components/CallElement';
import CallUsers from '../../components/CallUsers';
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
function CallDialog({ open, handleClose }) {
    const theme = useTheme();
    return (
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
            p={2}
        >
            <DialogTitle>Start Call</DialogTitle>

            <DialogContent sx={{ mt: '10px' }} >
                <Box sx={{  width: "100%", borderRadius: "8px", height: "40px", backgroundColor: theme.palette.mode == 'light' ? "white" : theme.palette.background.default, boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)" }} px={2} display={'flex'} alignItems={'center'}  >
                    <Stack direction={'row'} alignItems={'center'}>
                        <FaMagnifyingGlass className='searchIcon' />
                        <InputBase
                            sx={{ ml: 2, flex: 1, mt: '3px' }}
                            placeholder="Search...."
                            inputProps={{ 'aria-label': 'search google maps' }}
                        />
                    </Stack>
                </Box>
                <Box sx={{ height: '420px'}}>
                    <Stack spacing={2} mt={2} >
                        {CallUsersList.map((el) => {
                            return (<CallUsers {...el} />)
                        })}
                    </Stack>
                </Box>

            </DialogContent>
        </Dialog>
    )
}

export default CallDialog