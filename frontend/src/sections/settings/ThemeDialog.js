import React from 'react';
import { Dialog, DialogTitle, Button, Radio, FormControl,
     DialogContent, RadioGroup, DialogContentText, 
     FormControlLabel, DialogActions  } from '@mui/material';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function ThemeDialog({ open, handleClose }) {
    return (
        <>
            <Button variant="outlined" onClick={open}>
                Slide in alert dialog
            </Button>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{"Select Theme"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        <FormControl>
                            <RadioGroup
                                row
                                aria-labelledby="demo-form-control-label-placement"
                                name="position"
                                defaultValue="top"
                            >

                                <FormControlLabel value="Light" control={<Radio />} label="End" />
                                <FormControlLabel value="Dark" control={<Radio />} label="End" />
                                <FormControlLabel value="Default" control={<Radio />} label="End" />
                            </RadioGroup>
                        </FormControl>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>Select</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default ThemeDialog