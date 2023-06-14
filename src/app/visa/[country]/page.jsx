'use client';
import { Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";

const listTypeVisa = [
    {id: 1, label: 'Tourist Visa', value: 'tourist_visa', price: '42$'},
    {id: 2, label: 'Evisa', value: 'evisa',  price: '25$'}
]
export default function Country() {
    const pathName = usePathname();
    const router = useRouter();
    const [,,slug] = pathName.split('/');
    return (
        <>
        <Typography variant="h4" gutterBottom>
        {slug} - mở cho Du lịch, đây là những gì bạn cần
        </Typography>
        <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="tourist_visa"
                name="radio-buttons-group"
            >
                {listTypeVisa && listTypeVisa.map((item) => (
                    <FormControlLabel key={item.id} value={item.value} control={<Radio />} label={`${item.label} ${item.price}`} />
                ))}
            </RadioGroup>

        <Button onClick={() => router.push(`/visa-apply/${slug}`)} variant="contained" disableElevation>
            Áp dụng ngay
        </Button>
        </FormControl>
        
        </>
    )
}