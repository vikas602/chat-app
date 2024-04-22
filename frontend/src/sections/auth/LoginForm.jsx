import * as React from 'react';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
import {Stack, Button} from "@mui/material";
import {useFormik} from 'formik'



function LoginForm() {
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
    <form  onSubmit={formik.handleSubmit} >
      <Stack spacing={4} my={4}>
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

        <TextField
          fullWidth
          required
          id="password"
          label="Password"
          type='password'
          name='password'
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched && Boolean(formik.errors.password)}
          helperText= {formik.touched.password && formik.errors.password}
        />

        <Button variant='contained' type="submit" >Login</Button>

       
      </Stack>

    </form>

  )
}

export default LoginForm