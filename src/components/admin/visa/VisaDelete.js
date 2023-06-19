'use client';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import React from 'react'
import { useState, useEffect } from 'react';

export default function VisaDelete({onDelete, selectedRow}) {
    // console.log("selectedRow", selectedRow);
  const [selectedRowEdit, setSelectedRowEdit] = useState(selectedRow)
  const [open, setOpen] = useState(false);
  const handleDelete = () => {
    if(selectedRowEdit.length === 0) {
        alert("Vui lòng chọn dữ liệu để xoá")
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
    <Button onClick={handleDelete} variant="contained">Delete</Button>
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
            Bạn có muốn xoá dữ liệu Visa đang chọn không?
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
