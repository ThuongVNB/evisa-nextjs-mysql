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
import { DataCountry } from '@/components/Home/HomeData/getCountryData';
import { Autocomplete, Box, MenuItem, Select } from '@mui/material';
import Swal from 'sweetalert2';

export default function UserDetail({selectedRow}) {
  const [open, setOpen] = useState(false);
  const [selectedRowEdit, setSelectedRowEdit] = useState(selectedRow)
  const handleClickDetail = () => {
    if(selectedRowEdit.length !== 1) {
      Swal.fire({
        title: 'Thông báo!',
        text: 'Vui lòng chọn và chỉ chọn 1 trường dữ liệu để Chi tiết',
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

  useEffect(() => {
    setSelectedRowEdit(selectedRow)
  },[selectedRow])

  return (
    <div>
      <Button variant="contained" onClick={handleClickDetail}>
        Chi tiết
      </Button>
      <Dialog open={open} onClose={handleClose} maxWidth={'xl'}>
        <DialogTitle>Chi tiết</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Chi tiết User mới vào hệ thống. Chi tiết User mới vào hệ thống. Chi tiết User mới vào hệ thống.
            <br/>
            <br/>
          </DialogContentText>
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Huỷ</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
