import React from 'react'
import { Box, Stack, Typography, Link, Divider } from '@mui/material'
import AuthSocial from '../../../sections/auth/AuthSocial'
import { FormProvider } from 'react-hook-form';
import LoginForm from '../../../sections/auth/LoginForm';
import { useTheme} from '@mui/material/styles'

function LoginPage() {
  const theme = useTheme();
  return (
    <Box sx={{ boxShadow: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px", borderRadius: '20px', width: '32%', padding: '30px', backgroundColor: theme.palette.mode== "light"? "#fff": 'black'  }}>
      
      <Typography variant='h4' mb={3} color={'blueviolet'}>Login to Chats</Typography>

      <Stack direction={'row'} spacing={2}>
        <Typography variant='body2'>New User?</Typography>
        <Link href="/auth/signup" variant='subtitle2' sx={{ cursor: 'pointer' }}>Creat New Account</Link>
      </Stack>
      <Box>
        <LoginForm />
      </Box>
      <Stack direction={'column'} spacing={2} justifyItems={'center'} alignItems={'center'}>
        <AuthSocial />
      </Stack>
      
    </Box>
  )
}


export default LoginPage