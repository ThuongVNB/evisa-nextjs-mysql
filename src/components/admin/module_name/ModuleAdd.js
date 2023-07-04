'use client';
import * as React from 'react';
import stylesSystem from '@/app/page.module.css'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import { Autocomplete, MenuItem} from '@mui/material';
import Swal from 'sweetalert2';


export default function ModuleAdd({onAdd}) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddModule = () => {
      if(1!==1) {
        const newData = {
          name: typeVisaCode,
          desc: typeVisaName,
        }
        onAdd(newData);
        setOpen(false);
      } else {
        setOpen(false)
        Swal.fire({
          title: 'Thông báo!',
          text: 'Vui lòng nhập đủ thông tin',
          icon: 'info',
          confirmButtonText: 'Đã hiểu'
        }).then(() => {setOpen(true)})
      }
    console.log("handle add Module");
  }

  return (
    <>
      <Button variant="contained" onClick={handleClickOpen}>
        Thêm
      </Button>
      <Dialog open={open} onClose={handleClose} maxWidth={'xl'}>
        <DialogTitle>Thêm Module mới</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Thêm tài khoản mới vào hệ thống. Thêm tài khoản mới vào hệ thống. Thêm tài khoản mới vào hệ thống.
          </DialogContentText>
          <div className={stylesSystem.admin__system__form}>
            <TextField
            className={stylesSystem.admin__input__form}
            id="input"
            label={'input'}
            name="input"
            type="text"
            variant="outlined"
            // value={validity}
            // onChange={(e) => setValidity(e.target.value)}
            />
          </div>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Huỷ</Button>
          <Button onClick={handleAddModule}>Thêm</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
