'use client';
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import { useEffect } from 'react';

export default function UserEdit({selectedRow}) {
  const [open, setOpen] = useState(false);
  const [selectedRowEdit, setSelectedRowEdit] = useState(selectedRow)
  const handleClickOpen = () => {
    if(selectedRowEdit.length !== 1) {
      alert("Vui lòng chỉ chọn 1 trường dữ liệu để sửa")
      return;
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    setSelectedRowEdit(selectedRow)
  },[selectedRow])

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Sửa
      </Button>
      {selectedRowEdit}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Sửa</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Sửa tài khoản mới vào hệ thống. Sửa tài khoản mới vào hệ thống. Sửa tài khoản mới vào hệ thống.
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
