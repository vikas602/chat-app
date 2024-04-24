
import React from 'react'
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
import {Stack, Button, Link , Box, Typography} from "@mui/material";
import {useFormik} from 'formik'
import { useTheme} from '@mui/material/styles'

function ForgetPasword() {
  const theme= useTheme();
  const LoginSchema = Yup.object({
    email: Yup.string().required("Email is requried"),
    password: Yup.string().required("Password is requried")
  });
  const formik = useFormik({
    initialValues:{
      email: '',
      password:''
    },
    validationSchema: LoginSchema,
    onSubmit: (values)=>{
      console.log(JSON.stringify(values))
    }
  })

  return (
    <Box sx={{ boxShadow: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px", 
    borderRadius: '20px', width: '32%', padding: '30px',
     backgroundColor: theme.palette.mode== "light"? "#fff": 'black'  }}>
      <Typography variant='subtitle2'>Please enter your registered mail id below</Typography>
      <form  onSubmit={formik.handleSubmit} >
      <Stack spacing={4} my={4} direction={'row'}>
        <TextField
          fullWidth
          required
          id="email"
          label="Email-Id"
          name='email'
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched && Boolean(formik.errors.email)}
          helperText= {formik.touched.email && formik.errors.email}
        />
        <Button variant='contained' sx={{height:'54px'}}>Submit</Button>

       
      </Stack>

    </form>

    </Box>
  )
}

export default ForgetPasword