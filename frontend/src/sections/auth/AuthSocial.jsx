import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import {IconButton, Stack, Divider} from '@mui/material'

function AuthSocial() {
  return (
    <>
    <Divider sx={{my:2.5, typography:'overline'}}>OR</Divider>
    <Stack direction={'row'} spacing={2}>
        <IconButton><FcGoogle /></IconButton>
        <IconButton><FaSquareXTwitter style={{color:'black'}} /></IconButton>
        <IconButton><FaGithub style={{color:'black'}} /></IconButton>
    </Stack>
    </>
  )
}

export default AuthSocial