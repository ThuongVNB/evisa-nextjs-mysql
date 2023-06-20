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
import { Autocomplete, MenuItem, Select } from '@mui/material';
import { useEffect } from 'react';
import { useSession } from 'next-auth/react';


export default function VisaAdd({onAdd, listTypeVisa, listCurrency, listCountry}) {
  const session = useSession();
  const [open, setOpen] = useState(false);
  const [visaID, setVisaID] = useState();
  const [countryID, setCountryID] = useState('');
  const [typeVisa, setTypeVisa] = useState('');
  const [validity, setValidity] = useState();
  const [processingTimes, setProcessingTimes] = useState();
  const [standardFee, setStandardFee] = useState();
  const [govermentFee, setGovermentFee] = useState();
  const [requirementDesc, setRequirementDesc] = useState();
  const [currency, setCurrency] = useState('');
  const [published, setPublished] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddVisa = () => {
    const currencyObject = listCurrency.find((item) => item.name === currency);
    const countryIDObject = listCountry.find(item => item.name === countryID);
    const typeVisaObject = listTypeVisa.find(item => item.desc === typeVisa);
    if(visaID && countryID && typeVisa && validity && processingTimes && standardFee && govermentFee && requirementDesc && currency && published) {
      const newData = {
        id: visaID,
        country_id: countryIDObject.code,
        type_visa: typeVisaObject.name,
        validity: validity,
        processing_times: processingTimes,
        standard_fee: standardFee,
        goverment_fee: govermentFee,
        requirement_desc: requirementDesc,
        currency: currencyObject.code,
        published: published
      }
      console.log("newData", newData);
      // fetching api;
      // onAdd(newData);
      setOpen(false);
    } else {
      alert("Vui lòng nhập đủ thông tin")
    }
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
            id="visa_id"
            label="visa_id"
            name='visa_id'
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => setVisaID(e.target.value)}
            value={visaID || null}
          />
          <Autocomplete
            fullWidth
            disablePortal
            id="country_id"
            options={listCountry}
            renderInput={(params) => <TextField {...params} variant='standard' fullWidth label="country_id" />}
            renderOption={(props, option) => {
              return (
                <li {...props} key={option.code}>
                  {option.name}
                </li>
              );
            }}
            value={countryID}
            onInputChange={(event, newInputValue) => setCountryID(newInputValue)}
          />
          <TextField
            variant='standard'
            value={typeVisa}
            onChange={(e) => {
              setTypeVisa(e.target.value)
            }}
            select
            label="type_visa"
            fullWidth
          >
          {listTypeVisa && listTypeVisa.map((item) => (
            <MenuItem key={item.id} value={item.desc}>{item.desc}</MenuItem>
          ))}
          </TextField>

          <TextField
            id="validity"
            label={'Hiệu lực'}
            name="validity"
            type="text"
            fullWidth
            variant="standard"
            value={validity}
            onChange={(e) => setValidity(e.target.value)}
          />
          <TextField
            id="processing_times"
            label={'Thời gian xử lý'}
            name="processing_times"
            type="text"
            fullWidth
            variant="standard"
            value={processingTimes}
            onChange={(e) => setProcessingTimes(e.target.value)}
          />
          <TextField
            id="standard_fee"
            label={'Chi phí'}
            name="standard_fee"
            type="number"
            fullWidth
            variant="standard"
            value={standardFee}
            onChange={(e) =>setStandardFee(e.target.value)}
          />
          <TextField
            id="goverment_fee"
            label={'Phí Chính phủ'}
            name="goverment_fee"
            type="number"
            fullWidth
            variant="standard"
            value={govermentFee}
            onChange={(e) => setGovermentFee(e.target.value)}
          />
          <TextField
            id="requirement_desc"
            label={'Yêu cầu'}
            name="requirement_desc"
            type="text"
            fullWidth
            variant="standard"
            multiline
            maxRows={10}
            value={requirementDesc}
            onChange={(e) => setRequirementDesc(e.target.value)}
          />
          <Autocomplete
            fullWidth
            disablePortal
            id="currency"
            options={listCurrency}
            renderInput={(params) => <TextField {...params} variant='standard' fullWidth label="Currency" />}
            renderOption={(props, option) => {
              return (
                <li {...props} key={option.code}>{option.code} - {option.name}</li>
              );
            }}
            value={currency || null}
            onInputChange={(event, newInputValue) => {
            setCurrency(newInputValue)}}
          />
          <TextField
            variant='standard'
            value={published}
            onChange={(e) => setPublished(e.target.value)}
            select
            label="published"
            fullWidth
          >
            <MenuItem key={1} value="1">
              Đang sử dụng
            </MenuItem>
            <MenuItem key={2} value="0">
              Tạm ngưng
            </MenuItem>
          </TextField>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Huỷ</Button>
          <Button onClick={handleAddVisa}>Thêm</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
