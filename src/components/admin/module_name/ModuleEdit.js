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
import Swal from 'sweetalert2';


export default function ModuleEdit({selectedRow, onEdit}) {
  const [open, setOpen] = useState(false);
  const [selectedRowEdit, setSelectedRowEdit] = useState(selectedRow)
  const handleClickOpen = () => {
    if(selectedRowEdit.length !== 1) {
      Swal.fire({
        title: 'Thông báo!',
        text: 'Vui lòng chọn và chỉ chọn 1 trường dữ liệu để sửa',
        icon: 'info',
        confirmButtonText: 'Đã hiểu'
      })
      return;
    }
    setOpen(true);
    console.log("selectedRowEdit", selectedRowEdit);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (data) => {
    e.preventDefault();
    console.log(data);
  }

  const handleAddModule = () => {
    const selectedRowCopy = selectedRow;
    onEdit(selectedRowCopy[0]);
    setOpen(false);
  }

  useEffect(() => {
    setSelectedRowEdit(selectedRow)
  },[selectedRow])

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}>
        Sửa
      </Button>
      <Dialog open={open} onClose={handleClose} maxWidth={'xl'}>
        <DialogTitle>Sửa</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Sửa Module mới vào hệ thống. Sửa Module mới vào hệ thống. Sửa Module mới vào hệ thống.
            <br/>
            <br/>
          </DialogContentText>
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Huỷ</Button>
          <Button onClick={handleAddModule} type='submit'>Thêm</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
