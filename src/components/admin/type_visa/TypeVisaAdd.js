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


export default function TypeVisaAdd({onAdd}) {
  const [open, setOpen] = useState(false);
  const [typeVisaCode, setTypeVisaCode] = useState("")
  const [typeVisaName, setTypeVisaName] = useState("")
  const [typeVisaStatus, setTypeVisaStatus] = useState("")

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddTypeVisa = () => {
    if(typeVisaCode && typeVisaName) {
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
  }

  return (
    <>
      <Button variant="contained" onClick={handleClickOpen}>
        Thêm
      </Button>
      <Dialog open={open} onClose={handleClose} maxWidth={'xl'}>
        <DialogTitle>Thêm TypeVisa mới</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Thêm tài khoản mới vào hệ thống. Thêm tài khoản mới vào hệ thống. Thêm tài khoản mới vào hệ thống.
          </DialogContentText>
          <div className={stylesSystem.admin__system__form}>
            <TextField
              className={stylesSystem.admin__input__form}
              id="typeVisaCode"
              label={'Mã loại Visa'}
              name="typeVisaCode"
              type="text"
              variant="outlined"
              fullWidth
              value={typeVisaCode}
              onChange={(e) => setTypeVisaCode(e.target.value)}
            />

            <TextField
              className={stylesSystem.admin__input__form}
              id="typeVisaName"
              label={'Tên loại visa'}
              name="typeVisaName"
              type="text"
              variant="outlined"
              fullWidth
              value={typeVisaName}
              onChange={(e) => setTypeVisaName(e.target.value)}
            />
            <TextField
            className={stylesSystem.admin__input__form}
            variant='outlined'
            value={typeVisaStatus}
            onChange={(e) => setTypeVisaStatus(e.target.value)}
            select
            label="Trạng thái"
            >
              <MenuItem key={1} value="1">
                Đang sử dụng
              </MenuItem>
              <MenuItem key={2} value="0">
                Tạm ngưng
              </MenuItem>
            </TextField>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Huỷ</Button>
          <Button onClick={handleAddTypeVisa}>Thêm</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
