'use client';
import * as React from 'react';
import styles from './Css/Visa.module.css'
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
import { useSession } from 'next-auth/react';


export default function VisaAdd({onAdd, listTypeVisa, listCurrency, listCountry}) {
  const [open, setOpen] = useState(false);
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
    if(countryID && typeVisa && validity && processingTimes && standardFee && govermentFee && requirementDesc && currency && published) {
      const newData = {
        // id: visaID,
        country_id: countryIDObject.code,
        visa: typeVisaObject.name,
        validity: validity,
        processing_times: processingTimes,
        standard_fee: standardFee,
        goverment_fee: govermentFee,
        requirement_desc: requirementDesc,
        currency: currencyObject.code,
        published: published
      }
      onAdd(newData);
      setOpen(false);
    } else {
      Swal.fire({
        title: 'Thông báo!',
        text: 'Vui lòng nhập đủ thông tin',
        icon: 'info',
        confirmButtonText: 'Đã hiểu'
      })
    }
  }

  return (
    <>
      <Button variant="contained" onClick={handleClickOpen}>
        Thêm
      </Button>
      <Dialog open={open} onClose={handleClose} maxWidth={'xl'}>
        <DialogTitle>Thêm Visa mới</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Thêm tài khoản mới vào hệ thống. Thêm tài khoản mới vào hệ thống. Thêm tài khoản mới vào hệ thống.
          </DialogContentText>
          <Autocomplete
            className={styles.visa__input}
            disablePortal
            id="country_id"
            options={listCountry}
            renderInput={(params) => <TextField {...params} variant='outlined' label="Quốc gia" />}
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
            className={styles.visa__input}
            variant='outlined'
            value={typeVisa}
            onChange={(e) => {
              setTypeVisa(e.target.value)
            }}
            select
            label="Loại Visa"
          >
          {listTypeVisa && listTypeVisa.map((item) => (
            <MenuItem key={item.id} value={item.desc}>{item.desc}</MenuItem>
          ))}
          </TextField>

          <TextField
            className={styles.visa__input}
            id="validity"
            label={'Hiệu lực'}
            name="validity"
            type="text"
            variant="outlined"
            value={validity}
            onChange={(e) => setValidity(e.target.value)}
          />
          <TextField
            className={styles.visa__input}
            id="processing_times"
            label={'Thời gian xử lý'}
            name="processing_times"
            type="text"
            variant="outlined"
            value={processingTimes}
            onChange={(e) => setProcessingTimes(e.target.value)}
          />
          <TextField
            className={styles.visa__input}
            id="standard_fee"
            label={'Chi phí'}
            name="standard_fee"
            type="number"
            variant="outlined"
            value={standardFee}
            onChange={(e) =>setStandardFee(e.target.value)}
          />
          <TextField
            className={styles.visa__input}
            id="goverment_fee"
            label={'Phí Chính phủ'}
            name="goverment_fee"
            type="number"
            variant="outlined"
            value={govermentFee}
            onChange={(e) => setGovermentFee(e.target.value)}
          />
          <TextField
            className={styles.visa__input}
            id="requirement_desc"
            label={'Yêu cầu'}
            name="requirement_desc"
            type="text"
            variant="outlined"
            multiline
            maxRows={10}
            value={requirementDesc}
            onChange={(e) => setRequirementDesc(e.target.value)}
          />
          <Autocomplete
            className={styles.visa__input}
            disablePortal
            id="currency"
            options={listCurrency}
            renderInput={(params) => <TextField {...params} variant='outlined' label="Loại tiền tệ" />}
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
            className={styles.visa__input}
            variant='outlined'
            value={published}
            onChange={(e) => setPublished(e.target.value)}
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

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Huỷ</Button>
          <Button onClick={handleAddVisa}>Thêm</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
