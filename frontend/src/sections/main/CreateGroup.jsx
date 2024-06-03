import React from 'react';
import * as Yup from "yup";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { useFormik } from 'formik';
import { Stack, TextField, Autocomplete } from '@mui/material'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function CreateGroup({ open, handleClose }) {
  const data = ["Joseph", "Adam", "Suresh", "Vikas"];

  const GroupSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    memebers: Yup.array().max(2, "You need to add atleast two people")
  });
  const formik = useFormik({
    initialValues: {
      Title: '',
      Memebers: []
    },
    validationSchema: GroupSchema,
    onSubmit: (values) => {
      console.log(JSON.stringify(values))
    }
  })
  return (
    <Dialog
      open={open}
      fullWidth
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>Creat New Group</DialogTitle>
      <DialogContent >
        <form onSubmit={formik.handleSubmit} >
          <Stack spacing={4} my={4}>
            <TextField
              fullWidth
              required
              id="title"
              label="Title"
              name='title'
              value={formik.values.title}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.title && Boolean(formik.errors.title)}
              helperText={formik.touched.title && formik.errors.title}
            />
            <Autocomplete
              multiple
              id="members"
              options={data}
              name='members'
              getOptionLabel={(option) => option}
              defaultValue={[data[2]]}
              filterSelectedOptions
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="members"
                  fullWidth
                />
              )}
            />
          </Stack>
          <Stack direction={'row'} justifyContent={'end'} spacing={2} >
            <Button type="submit" onClick={handleClose} >Cancel</Button>
            <Button variant='contained' type="submit" onClick={handleClose} >Create</Button>
          </Stack>
        </form>

      </DialogContent>

    </Dialog>
  )
}

export default CreateGroup