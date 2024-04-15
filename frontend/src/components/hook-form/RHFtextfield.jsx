// import React from 'react';
// import {Controller, useFormContext} from 'react-hook-form';
// import  PropTypes  from 'prop-types';
// import { TextField } from '@mui/material';

// RHFtextfield.propTypes= {
//   name: PropTypes.string,
//   helperText: PropTypes.node
// }

// function RHFtextfield({name, helperText, ...other}) {
//   const { controller} = useFormContext();
//   return (
//     <>
//     <Controller name={name} control={controller} render={({field, fieldState:{error} })=>{
//       <TextField {...field} fullWidth value={ typeof field.value ==='number' && field.value===0 ? '': field.value } error={!!error} helperText={error ? error.message: helperText} {...other}/>

//     }} />
//     </>
//   )
// }

// export default RHFtextfield;