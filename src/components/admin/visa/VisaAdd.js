'use client';
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { ADD_VISA } from '@/Reducer/Admin/VisaSlice';

const aaa = [
  {id: 'a', name: 'a', title: 'a'},
  {id: 'b', name: 'b', title: 'b'},
  {id: 'c', name: 'c', title: 'c'},

]
export default function VisaAdd() {
  const [open, setOpen] = useState(false);
  const visa = useSelector((state) => state.Visa)
  const dispatch = useDispatch()
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddVisa = () => {
    const a = {id: 'a', name: 'b', title: 'c'}
    dispatch(ADD_VISA({
      payload: a,
      state: aaa
    }));
  }

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}>
        Thêm
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Thêm Visa mới</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Thêm tài khoản mới vào hệ thống. Thêm tài khoản mới vào hệ thống. Thêm tài khoản mới vào hệ thống.
          </DialogContentText>
          <TextField
            margin="dense"
            id="first_name"
            label="First name"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            margin="dense"
            id="last_name"
            label="Last name"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            margin="dense"
            id="avatar"
            label="Avatar"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Huỷ</Button>
          <Button onClick={handleAddVisa}>Thêm</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
