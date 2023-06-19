'use client';
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { ADD_VISA } from '@/Reducer/Admin/VisaSlice';
import { Autocomplete, MenuItem, Select } from '@mui/material';
import { useEffect } from 'react';
import { getDataCurrency } from '../currency/getDataCurency';
import { getAllTypeVisa } from '../type_visa/getData';

const dataCurrency = [
  {id: 1, label: 'USD', label: 'USD', year: 1994 },
  {id: 2, label: 'VND',label: 'VND', year: 1972 },
]

async function getDataCurrency11() {
    const a = await getDataCurrency();
    console.log(a);
    return a;
}

export default function VisaAdd({onAdd}) {
  const [open, setOpen] = useState(false);
  const [visaID, setVisaID] = useState();
  const [countryID, setCountryID] = useState();
  const [typeVisa, setTypeVisa] = useState('');
  const [validity, setValidity] = useState();
  const [processingTimes, setProcessingTimes] = useState();
  const [standardFee, setStandardFee] = useState();
  const [govermentFee, setGovermentFee] = useState();
  const [requirementDesc, setRequirementDesc] = useState();
  const [currency, setCurrency] = useState('');
  const [published, setPublished] = useState('');
  const [listTypeVisa, setListTypeVisa] = useState([]);
  const [listCurrency, setListCurrency] = useState([]);

  // useEffect(async() => {
  //   const resp = await fetch(`http://localhost:3000/api/visas`)
  //   const dataJson = await resp.json();
  //   return setListTypeVisa(dataJson)
  // }, [])

  async function getAllData() {
  const resp = await getDataCurrency();
  setListCurrency(resp);
  const resp2 = await getAllTypeVisa();
  setListTypeVisa(resp2);
  }

  useEffect(()=> {
    getAllData();
  }, [])

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddVisa = () => {
    // const newData = {id: 5, country_id: 'France', type_visa: 'eVisa', validity: '60 days', processing_times: '30 days', standard_fee: 200, goverment_fee: 15, requirement_desc: 'Yêu cầu passport, tiêm hai mũi Vacine', currency: 'USD', published: 'Đang sử dụng'};
    if(visaID && countryID && typeVisa && validity && processingTimes && standardFee && govermentFee && requirementDesc && currency && published) {
      const newData = {
        id: visaID,
        country_id: countryID,
        type_visa: typeVisa,
        validity: validity,
        processing_times: processingTimes,
        standard_fee: standardFee,
        goverment_fee: govermentFee,
        requirement_desc: requirementDesc,
        currency: currency,
        published: published
      }
      onAdd(newData);
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
            value={visaID}
          />
          <TextField
            id="country_id"
            label="country_id"
            name='country_id'
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => setCountryID(e.target.value)}
            value={countryID}
          />
          <TextField
            variant='standard'
            value={typeVisa}
            onChange={(e) => {
              console.log("eeeeee", e.target.value);
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
            label="validity"
            name="validity"
            type="text"
            fullWidth
            variant="standard"
            value={validity}
            onChange={(e) => setValidity(e.target.value)}
          />
          <TextField
            id="processing_times"
            label="processing_times"
            name="processing_times"
            type="text"
            fullWidth
            variant="standard"
            value={processingTimes}
            onChange={(e) => setProcessingTimes(e.target.value)}
          />
          <TextField
            id="standard_fee"
            label="standard_fee"
            name="standard_fee"
            type="number"
            fullWidth
            variant="standard"
            value={standardFee}
            onChange={(e) =>setStandardFee(e.target.value)}
          />
          <TextField
            id="goverment_fee"
            label="goverment_fee"
            name="goverment_fee"
            type="number"
            fullWidth
            variant="standard"
            value={govermentFee}
            onChange={(e) => setGovermentFee(e.target.value)}
          />
          <TextField
            id="requirement_desc"
            label="requirement_desc"
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
            value={currency}
            onInputChange={(event, newInputValue) => setCurrency(newInputValue)}
          />

          <TextField
            variant='standard'
            value={published}
            onChange={(e) => setPublished(e.target.value)}
            select
            label="published"
            fullWidth
          >
            <MenuItem key={1} value="test">
              Đang sử dụng
            </MenuItem>
            <MenuItem key={2} value="test2">
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
