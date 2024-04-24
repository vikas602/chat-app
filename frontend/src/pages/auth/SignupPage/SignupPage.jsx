import React from 'react';
import { Box, Stack, Typography, Link, Divider, Button, Select, MenuItem,InputLabel, FormControl } from '@mui/material'
import AuthSocial from '../../../sections/auth/AuthSocial'
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
import { useTheme} from '@mui/material/styles'
import {useFormik} from 'formik';

function SignupPage() {
    const theme= useTheme();
    const LoginSchema = Yup.object({
        firstName: Yup.string().required("Name feild is required"),
        lastName: Yup.string().required("Last Name feild is required"),
        age : Yup.string().required("Age feild is required"),
        gender: Yup.string().required("Gender feild is required"),
        confirmPassword: Yup.string().required("Confirm Password feild is required")
        .when("password", (password, field) => {
          if (password) {
            return field.required("The passwords do not match").oneOf([Yup.ref("password")], "The passwords do not match")      }
          }),
        email: Yup.string().required("Email is requried"),
        password: Yup.string().required("Password is requried") .min(8, "Pasword must be 8 or more characters")
        .matches(/(?=.*[a-z])(?=.*[A-Z])\w+/, "Password ahould contain at least one uppercase and lowercase character")
        .matches(/\d/, "Password should contain at least one number")
        .matches(/[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/, "Password should contain at least one special character"),
      });
      const formik = useFormik({
        initialValues:{
          firstName:'',
          lastName:'',
          age: '',
          gender: '',
          confirmPassword: '',
          email: '',
          password:''
        },
        validationSchema: LoginSchema,
        onSubmit: (values)=>{
          console.log(JSON.stringify(values))
        }
      })
  return (
    <Box sx={{ boxShadow: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px", borderRadius: '20px', width: '32%', padding: '30px', backgroundColor: theme.palette.mode== "light"? "#fff": 'black'  }}>
      
    <Typography variant='h4' mb={3} color={'blueviolet'}>SignUp to Chats</Typography>

    
    <Box>
    <form  onSubmit={formik.handleSubmit} >
      <Stack spacing={4} my={4}>

        <Stack direction={'row'} spacing={2}>
        <TextField
          
          required
          id="firstName"
          label="First Name"
          name='firstName'
          value={formik.values.firstName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.firstName && Boolean(formik.errors.firstName)}
          helperText= {formik.touched.firstName && formik.errors.firstName}
        />

        <TextField
        
          required
          id="lastName"
          label="Last Name"
          name='lastName'
          value={formik.values.lastName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.lastName && Boolean(formik.errors.lastName)}
          helperText= {formik.touched.lastName && formik.errors.lastName}
        />
        </Stack>
        
        <Stack direction={'row'} spacing={2}>
        <FormControl sx={{width:'50%'}}>
        <InputLabel id="demo-simple-select-label">Gender</InputLabel>
        <Select
          required
          labelId='demo-simple-select-label'
          id="gender"
          label='Gender'
          name='gender'
          value={formik.values.gender}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.gender && Boolean(formik.errors.gender)}
          helperText= {formik.touched.gender && formik.errors.gender}
        >
            <MenuItem value={0}>Male</MenuItem>
            <MenuItem value={1}>Female</MenuItem>
            <MenuItem value={2}>Others</MenuItem>
        </Select>
        </FormControl>

        <TextField
        
          required
          id="age"
          label="Age"
          name='age'
          value={formik.values.age}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.age && Boolean(formik.errors.age)}
          helperText= {formik.touched.age && formik.errors.age}
        />
        </Stack>
        <Stack direction={'row'} spacing={2}>
        <TextField
          
          required
          id="password"
          label="Password"
          name='password'
          type='password'
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText= {formik.touched.password && formik.errors.password}
        />

        <TextField
          required
          id="confirmPassword"
          label="Confirm Password"
          name='confirmPassword'
          type='password'
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
          helperText= {formik.touched.confirmPassword && formik.errors.confirmPassword}
        />
        </Stack>
        <TextField
          required
          id="email"
          label="Email Id"
          name='email'
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText= {formik.touched.email && formik.errors.email}
        />
        <Button variant='contained' type="submit" >SignUp</Button> 
        
       
      </Stack>
       
    </form>  
    </Box>
  </Box>
)
  
}

export default SignupPage