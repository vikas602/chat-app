import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { Grid, Typography } from '@mui/material';
import { shortcutList } from '../../data';
import {Stack, Box} from '@mui/material';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function ShortcutDialog({open, handleClose}) {
  const list= shortcutList;
  return (
    
     <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        sx={{ p:4, width:'100%'}}
        PaperProps={{
          sx: {
            width: "100%",
            maxWidth: "760px!important",
          },
        }}

      >
        <DialogTitle>KeyBoard Shortcuts</DialogTitle>
        <DialogContent sx={{mt:4}}>
          <Grid container spacing={2}>
          {list.map(({key, title,  shortcut})=><>
            <Grid key={key}  container item xs={6}>
              <Stack 
               sx={{width:"100%"}}
               direction={'row'}
               spacing={2}
               justifyContent="Space-between"
               alignItems={'center'}>
                <Typography variant='caption' sx={{fontSize:"14px"}}>{title}</Typography>
                <Stack  spacing={2} direction={'row'} >{shortcut.map((el)=><>
                <Box sx={{color:"#212121", fontSize:'10px', backgroundColor:'aliceblue', fontWeight:'500', borderRadius:"7px"}} py={'6px'} px={'12px'}>{el}</Box>
                </>)}</Stack>

              </Stack>
            </Grid>
          </>)}
          </Grid>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Ok</Button>
      
        </DialogActions>
      </Dialog>
    
  )
}

export default ShortcutDialog