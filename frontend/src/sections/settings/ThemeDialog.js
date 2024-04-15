import React from 'react';
import {
    Dialog, DialogTitle, Button, Radio, FormControl,
    DialogContent, RadioGroup, DialogContentText,
    FormControlLabel, DialogActions
} from '@mui/material';
import Slide from '@mui/material/Slide';
import { Stack } from '@mui/material';
import useSettings from '../../hooks/useSettings';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function ThemeDialog({ open, handleClose }) {
    const {onToggleMode} = useSettings();
    return (
        <>

            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
                sx={{width:'100%'}}
                
            >
                <DialogTitle sx={{mb:3}}>{"Select Theme"}</DialogTitle>
                <DialogContent sx={{pb: "10px"}}>
                
                        <FormControl>
                            <RadioGroup
                                row
                                aria-labelledby="demo-form-control-label-placement"
                                name="position"
                                defaultValue="top"
                            >
                                <Stack direction={'column'}>
                                    <FormControlLabel value="Light"  control={<Radio />} label="Light"  />
                                    <FormControlLabel value="Dark"  control={<Radio />} label="Dark" />
                                    <FormControlLabel value="Default" control={<Radio />} label="Default" />
                                </Stack>
                            </RadioGroup>
                        </FormControl>
                    
                </DialogContent>
                <DialogActions sx={{pt:"0px !important", mt:"0px !important", ml:'210px'}} >
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>Select</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default ThemeDialog