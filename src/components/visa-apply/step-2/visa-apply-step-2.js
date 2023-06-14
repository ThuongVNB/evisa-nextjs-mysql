import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Button, MenuItem, Select, TextField, Typography } from "@mui/material";
import { useState } from 'react';
import dayjs from 'dayjs';

const Step2 = () => {
    const [data, setData] = useState([{id: 1, name: null, gender: null, dob: null}])

    const handleAddPersion = () => {
        const dataCurrent = [...data];
        const newPersion = {id: (dataCurrent.length + 1),name: null, gender: null, dob: null};
        dataCurrent.push(newPersion)
        setData(dataCurrent);
    }
    const handleDeletePersion = (event) => {
        const dataCurrent = [...data];
        const idSelected = event.target.value;
        const newData = dataCurrent.filter((item) => item.id !== parseInt(idSelected));
        setData(newData);
    }
    const handleChangeEmail = (e) => {
        const dataCurrent = [...data];
        const index = dataCurrent.findIndex((item) => item.id === parseInt(e.target.name))
        if(index != -1) { dataCurrent[index].name = e.target.value;}
        setData(dataCurrent);
    }
    const handleChangeGender = (e) => {
        const dataCurrent = [...data];
        const index = dataCurrent.findIndex((item) => item.id === parseInt(e.target.name))
        if(index != -1) { dataCurrent[index].gender = e.target.value;}
        setData(dataCurrent);
    }
    const handleChangeDob = (event, TValue) => {
        console.log(event, TValue);
        const dataCurrent = [...data];
        // const index = dataCurrent.findIndex((item) => item.id === parseInt(e.target.name))
        // if(index != -1) { dataCurrent[index].dob = e.target.value;}
        // setData(dataCurrent);
    }
    const handleSubmit = () => {
        console.log("data", data)
    }
    return (
        <>
            <Typography variant="h4" gutterBottom>
                Thông tin cá nhân chi tiết của bạn.
            </Typography>
            {data.map((item, index) => 
                (
                    <>
                        <div>
                            <Button key={item.id} disabled={item.id == 1 ? true : false} value={item.id} onClick={handleDeletePersion} variant="outlined" disableElevation>
                                Xoá
                            </Button>
                            <br/>
                            Fullname
                            <TextField key={item.id} name={item.id} onChange={handleChangeEmail} fullWidth id="fullname" label="Fullname" variant="outlined" />
                            <br/>
                        </div>
                        <div>
                            Gender 
                            <Select
                                key={item.id}
                                name={item.id}
                                onChange={handleChangeGender}
                                value={item.gender}
                                fullWidth
                                label="Giới tính"
                                id="gender"
                            >
                                <MenuItem key={1} value={'male'}>Nam</MenuItem>
                                <MenuItem key={2} value={'female'}>Nữ</MenuItem>
                            </Select>
                            <br/>
                        </div>
                        <div>
                            Date of Birth
                            <br/>
                            <LocalizationProvider key={item.id} dateAdapter={AdapterDayjs}>
                                <DatePicker name={item.id} onChange={handleChangeDob} format='DD/MM/YYYY' defaultValue={dayjs('2022-04-17')} value={item.dob} />
                            </LocalizationProvider>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                        </div>
                    </>
                )
            )}

            <Button onClick={handleAddPersion} variant="outlined" disableElevation>
                Thêm người
            </Button>
            <br/>
            <Button variant="outlined" onClick={handleSubmit} disableElevation>
                Tiếp tục
            </Button>
        </>
        )
} 
export default Step2;