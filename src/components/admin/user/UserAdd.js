'use client';
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Thêm
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Thêm User mới</DialogTitle>
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
          <Button onClick={handleClose}>Thêm</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}