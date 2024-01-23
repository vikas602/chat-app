import { Box, IconButton, Typography, Stack, Avatar, Divider } from '@mui/material';
import React from 'react';
import { useTheme } from '@mui/material/styles';
import { CgCloseO } from "react-icons/cg";
import { faker } from '@faker-js/faker';
import { IoVideocam } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import Button from '@mui/material/Button';
import { Bell, CaretRight, Star } from 'phosphor-react';
import AntSwitch from '../AntSwitch'
import { dispatch } from '../../redux/store';
import { UpdateSidebarType } from '../../redux/slices/app'
import { RiDeleteBin5Line } from "react-icons/ri";
import { MdBlock } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { ToggleSidebar } from '../../redux/slices/app';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';



const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const BlockDialog = ({open,handleClose})=>{
  

  return(
    <Dialog
    open={open}
    onClose={handleClose}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    <DialogTitle id="alert-dialog-title">
      {"Are you sure you want block this person?"}
    </DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">
        Once you block you will not able to see any message this person
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose}>Cancel</Button>
      <Button onClick={handleClose} autoFocus>
        Block
      </Button>
    </DialogActions>
  </Dialog>
  )
}

const DeleteDialog = ({open,handleClose})=>{
  

  return(
    <Dialog
    open={open}
    onClose={handleClose}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    <DialogTitle id="alert-dialog-title">
      {"Are you sure you want to delete all the chat?"}
    </DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">
        All that chat history will be deleted.
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose}>Cancel</Button>
      <Button onClick={handleClose} autoFocus>
        Delete
      </Button>
    </DialogActions>
  </Dialog>
  )
}

function Contact() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [openBlock, setBlockOpen] = React.useState(false);
  const [openDelete, setDeleteOpen] = React.useState(false);

 

  const handleBlockOpen = () => {
    setBlockOpen(true);
  };
  const handleBlockClose = () => {
    setBlockOpen(false);
  };
  
  const handleDeleteOpen = () => {
    setDeleteOpen(true);
  };
  const handleDeleteClose = () => {
    setDeleteOpen(false);
  };


  
  return (
    <Box sx={{ width: 490,  height: "100vh" }}>
      <Stack sx={{ height: '100%', justifyContent: 'space-between' }}>
        <Box sx={{
          boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
          width: '100%',
          backgroundColor: theme.palette.mode == 'light' ? "#F8FAFF" : 'purple'

        }} p={1.7}>
          <Stack justifyContent={'space-between'} alignItems={'center'} direction={'row'}>
            <Typography>Contact Info</Typography>
            <IconButton onClick={()=>{ dispatch(ToggleSidebar())}}>
              <CgCloseO />
            </IconButton>
          </Stack>
        </Box>
        <Stack sx={{ height: "100%", position: "relative", flexGrow: 1, overflowY: "scroll" }} p={1.6} spacing={2}>
          <Stack alignItems={"center"} direction={"row"} spacing={2}>
            <Avatar src={faker.image.avatar()} alt={faker.name.firstName()} sx={{ height: 55, width: 55 }} />
            <Stack spacing={0.5}>
              <Typography variant="article" fontWeight={600}>
                {faker.name.firstName()}
              </Typography>
              <Typography variant="body2" fontWeight={500}>
                {"+91 3289728899"}
              </Typography>
            </Stack>
          </Stack>
          <Stack direction={"row"} justifyContent={'space-evenly'}>
            <Stack>
              <IconButton>
                <IoVideocam />
              </IconButton>
              <Typography variant='overline' fontSize={'12px'}>Video</Typography>
            </Stack>
            <Stack>
              <IconButton>
                <IoCall />
              </IconButton>
              <Typography variant='overline'>Voice</Typography>
            </Stack>
          </Stack>
          <Divider />
          <Stack spacing={0.5}>
            <Typography variant='article'>About</Typography>
            <Typography variant='body2'>I am available just ping me</Typography>
          </Stack>
          <Divider />
          <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
            <Typography variant='body2'>Media, Links& Docs</Typography>
            <Button variant={"text"} endIcon={<CaretRight /> } onClick={()=>{dispatch(UpdateSidebarType("SHARED"))}}>401</Button>
          </Stack>
          <Stack direction={'row'} spacing={2} alignItems={'center'}>
            {[1, 3, 4].map((el) => (
              <Box>
                <img src={faker.image.food()} alt={faker.name.fullName()} style={{ borderRadius: '10px' }} />
              </Box>
            ))}
          </Stack>
          <Divider />
          <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
            <Stack direction={'row'} spacing={0.8} alignItems={'center'}>
              <Star />
              <Typography variant="subtitle2">Starred Message</Typography>
            </Stack>
            <IconButton>
              <CaretRight style={{ fontSize: '20px' }} onClick={()=>{dispatch(UpdateSidebarType("STARED"))}} />
            </IconButton>
          </Stack>
          <Divider />
          <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
            <Stack direction={'row'} alignItems={'center'} spacing={0.8}>
              <Bell />
              <Typography>Mute Notification</Typography>
            </Stack>
            <AntSwitch sx={{ fontSize: '12px' }} />
          </Stack>
          <Divider />
          <Typography>1 group in common</Typography>
          <Stack direction={'row'} alignItems={'center'} spacing={0.5}>
            <img src={faker.image.avatar()} alt={faker.name.fullName()} style={{ height: "35px", width: "35px", borderRadius: '100%' }} />
            <Stack spacing={0.4}>
              <Typography variant='subtitle2'>Camel's Gang</Typography>
              <Typography variant='caption'>Owl, Parrot, Rabbit</Typography>
            </Stack>
          </Stack>
          <Divider />
          <Stack direction={'row'} alignItems={'center'} spacing={2} justifyContent={'space-evenly'}>
          <Button variant='outlined' color='error' onClick={handleDeleteOpen} startIcon={<RiDeleteBin5Line />}>Delete</Button>
            <Button variant='contained' color='error' onClick={handleBlockOpen} startIcon={<MdBlock />}>Block</Button>
            
          </Stack>
        </Stack>

      </Stack>
      {openBlock && <BlockDialog open={openBlock} handleClose={handleBlockClose}/>}
      {openDelete && <DeleteDialog open={openDelete} handleClose={handleDeleteClose}/>}
    </Box>
  )
}

export default Contact;