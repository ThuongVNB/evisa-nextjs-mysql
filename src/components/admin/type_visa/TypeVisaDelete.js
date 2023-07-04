'use client';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import React from 'react'
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

export default function TypeVisaDelete({onDelete, selectedRow}) {
    // console.log("selectedRow", selectedRow);
  const [selectedRowEdit, setSelectedRowEdit] = useState(selectedRow)
  const [open, setOpen] = useState(false);
  const handleDelete = () => {
    if(selectedRowEdit.length === 0) {
      Swal.fire({
        title: 'Thông báo!',
        text: 'Vui lòng chọn dữ liệu để xoá',
        icon: 'info',
        confirmButtonText: 'Đã hiểu'
      })
        return;
    }
    setOpen(true)
    console.log("selectedRowEdit", selectedRowEdit);
  }
  const handleConfirm = () => {
    onDelete(selectedRow);
    setOpen(false);
  }

  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    setSelectedRowEdit(selectedRow)
  },[selectedRow])
  return (
    <>
    <Button onClick={handleDelete} variant="contained">Xoá</Button>
    <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Xác nhận xoá
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Bạn có muốn xoá dữ liệu TypeVisa đang chọn không?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Quay lại</Button>
          <Button onClick={handleConfirm} autoFocus>Xác nhận</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
