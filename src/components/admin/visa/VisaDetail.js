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

const listTypeVisa = [
  {id: 1, label: 'Tourist Visa', value: 'tourist_visa', price: '42$'},
  {id: 2, label: 'Evisa', value: 'evisa',  price: '25$'}
]

const listTypeStatus = [
  {id: 1, label: 'Đang sử dụng', value: 'active'},
  {id: 2, label: 'Tạm ngưng', value: 'paused'}
]

const listDataCurrency = [
  {id: 1, label: 'USD', value: 'USD'},
  {id: 2, label: 'VND', value: 'VND'}
]

export default function VisaDetail({selectedRow}) {
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
            Chi tiết Visa mới vào hệ thống. Chi tiết Visa mới vào hệ thống. Chi tiết Visa mới vào hệ thống.
            <br/>
            <br/>
          </DialogContentText>
          
          <Autocomplete
            id="from"
            options={DataCountry}
            autoHighlight
            getOptionLabel={(option) => option.label}
            // onInputChange={onFromInputChange}
            defaultValue={DataCountry.find(item => item.code === "VN")}
            renderOption={(props, option) => (
              <Box {...props} key={option.code} component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} >
                <img
                  loading="lazy"
                  width="20"
                  src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                  srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                  alt=""
                />
                {option.label} ({option.code})
              </Box>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Quốc gia"
                inputProps={{
                  ...params.inputProps,
                  autoComplete: 'new-password', // disable autocomplete and autofill
                }}
              />
            )}
          />
          <Select
            defaultValue={listTypeVisa[0].value}
            fullWidth
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // value={}
            // onChange={handleChange}
            >
              {listTypeVisa && listTypeVisa.map((item) => (
                  <MenuItem key={item.id} value={item.value}>{item.label} {item.price}</MenuItem>
              ))}
          </Select>

          <TextField
            margin="dense"
            id="last_name"
            label="Hiệu lực"
            type="text"
            fullWidth
            variant="outlined"
          />
          <TextField
            margin="dense"
            id="name"
            label="Thời gian xử lý"
            type="number"
            fullWidth
            variant="outlined"
          />
          <TextField
            margin="dense"
            id="avatar"
            label="Chi phí"
            type="text"
            fullWidth
            variant="outlined"
          />
          <TextField
            margin="dense"
            id="avatar"
            label="Phí Chính phủ"
            type="text"
            fullWidth
            variant="outlined"
          />

          <Autocomplete
            id="from"
            options={listDataCurrency}
            autoHighlight
            getOptionLabel={(option) => option.label}
            // onInputChange={onFromInputChange}
            defaultValue={listDataCurrency.find(item => item.value === "USD")}
            renderOption={(props, option) => (
              <Box {...props} key={option.label} component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} >
                {option.label}
              </Box>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Đơn vị tiền"
                inputProps={{
                  ...params.inputProps,
                  autoComplete: 'new-password', // disable autocomplete and autofill
                }}
              />
            )}
          />

          <Select
            defaultValue={listTypeStatus[0].value}
            fullWidth
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // value={}
            // onChange={handleChange}
            >
            {listTypeStatus && listTypeStatus.map((item) => (
                <MenuItem key={item.id} value={item.value}>{item.label}</MenuItem>
            ))}
          </Select>
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Huỷ</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
