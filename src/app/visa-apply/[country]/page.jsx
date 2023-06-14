'use client';

import { DataCountry } from "@/components/Home/HomeData/getCountryData";
import { Autocomplete, Box, Button, MenuItem, Select, TextField, Typography } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
const listTypeVisa = [
    {id: 1, label: 'Tourist Visa', value: 'tourist_visa', price: '42$'},
    {id: 2, label: 'Evisa', value: 'evisa',  price: '25$'}
]
export default function Page() {
    const pathName = usePathname();
    const [,,slug] = pathName.split('/');
    const router = useRouter();
    return (
        <>
        <Typography variant="h4" gutterBottom>
        Bắt đầu với du lịch {slug}
        </Typography>
        <Autocomplete
          id="from"
          options={DataCountry}
          autoHighlight
          getOptionLabel={(option) => option.label}
        //   onInputChange={onFromInputChange}
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
              label="Bạn đến từ đâu?"
              inputProps={{
                ...params.inputProps,
                autoComplete: 'new-password', // disable autocomplete and autofill
              }}
            />
          )}
        />
        <br/>
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
        <br/>
        <br/>
        <Button onClick={() => router.push(`/visa-apply/${slug}/step-2`)} variant="contained" disableElevation>
            Bắt đầu ngay
        </Button>
        </>
    )
}