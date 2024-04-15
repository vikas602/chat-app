import React from 'react';
import { Box, IconButton, Stack, Typography, Avatar, Divider } from '@mui/material';
import { useTheme } from '@mui/material/styles'
import { CaretLeft } from 'phosphor-react';
import { faker } from '@faker-js/faker';
import ThemeDialog from '../../sections/settings/ThemeDialog';
import { IoNotifications } from "react-icons/io5";
import { FaLock } from "react-icons/fa6";
import { PiFingerprintBold } from "react-icons/pi";
import { FaPaintBrush } from "react-icons/fa";
import { FaImage } from "react-icons/fa6";
import { MdManageAccounts } from "react-icons/md";
import { FaKeyboard } from "react-icons/fa6";
import { IoIosHelpCircle } from "react-icons/io";
import ShortcutDialog from '../../sections/settings/ShortcutDialog';





function Setting() {
  const theme = useTheme();

  const settingsList = [
    {
      key: 0,
      icon: <IoNotifications size={18} />,
      title: "Notification",
      onclick: () => { }
    },
    {
      key: 1,
      icon: <FaLock size={16} />,
      title: "Privacy",
      onclick: () => { }
    },
    {
      key: 2,
      icon: <PiFingerprintBold size={18} />,
      title: "Secuirty",
      onclick: () => { }
    },
    {
      key: 3,
      icon: <FaPaintBrush size={16} />,
      title: "Theme",
      onclick: () => { handleThemeOpen() }
    },
    {
      key: 4,
      icon: <FaImage size={16} />,
      title: "Chat Wallpaper",
      onclick: () => { }
    },
    {
      key: 5,
      icon: <MdManageAccounts size={21} />,
      title: "Request Account info",
      onclick: () => { }
    },
    {
      key: 6,
      icon: <FaKeyboard size={20} />,
      title: "Keyboard Shortcuts",
      onclick: () => { handleShortcutOpen() }
    },
    {
      key: 7,
      icon: <IoIosHelpCircle size={20} />,
      title: "help",
      onclick: () => { }
    },
  ]
  const list = settingsList;

  const [themeOpen, themeSetOpen] = React.useState(false);



  const handleThemeOpen = () => {
    themeSetOpen(true);
  };

  const handleThemeClose = () => {
    themeSetOpen(false);
  };
  const [shortcutOpen, shortcutSetOpen] = React.useState(false);

  const handleShortcutOpen = () => {
    shortcutSetOpen(true);
  };

  const handleShortcutClose = () => {
    shortcutSetOpen(false);
  };
  return (
    <>
      <Stack direction={'row'}>
        
        <Box
          sx={{
            overflowY: 'scroll',
            width: 290,
            height: '100vh',
            backgroundColor:
              theme.palette.mode == 'light' ? "#F8FAFF" : 'black',
            boxShadow: " 0px 0px 2px rgba(0, 0, 0, 0.25)",
            p: 2
          }}
        >
          <Stack spacing={2}>
            <Stack direction={'row'} alignItems="center" spacing={1}>

              <IconButton>
                <CaretLeft size={24} color='#4B4B4B' />
              </IconButton>
              <Typography variant='h5'>Settings</Typography>
            </Stack>
            <Stack direction={'row'} spacing={3}>
              <Avatar alt={faker.name.fullName()} src={faker.image.avatar()} sx={{ height: 50, width: 50 }} />
              <Stack spacing={0.5}>
                <Typography variant='article' >{faker.name.fullName()}</Typography>
                <Typography variant='caption'>Exploring</Typography>
              </Stack>
            </Stack>
            <Stack spacing={2}>{
              list.map(({ key, icon, title, onclick }) => <>
                <Stack spacing={1} sx={{ cursor: "pointer" }} onClick={onclick}>
                  <Stack direction={'row'} spacing={1} alignItems={'center'}>
                    <IconButton>
                      {icon}
                    </IconButton>
                    <Typography variant='body2'>{title}</Typography>
                  </Stack>
                  {key != 7 && <Divider />}
                </Stack>
              </>)
            }</Stack>
          </Stack>
        </Box>
      </Stack>
      {shortcutOpen && <ShortcutDialog open={shortcutOpen} handleClose={handleShortcutClose} />}
      {themeOpen && <ThemeDialog  open={themeOpen} handleClose={handleThemeClose}/>}
    </>

  )
}

export default Setting