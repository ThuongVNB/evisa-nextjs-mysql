import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Button, TextField } from "@mui/material";;
import { usePathname, useRouter } from 'next/navigation';

const Step1 = () => {
    const pathName = usePathname();
    console.log("pathName", pathName)
    const [,,country,currentStep] = pathName.split('/');
    const router = useRouter();
    const onClick = () => {
        router.push(`/visa-apply/${country}/step-2`);
    }
    return (
        <>
        <div>
            <div>When is your arrival date?</div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker />
            </LocalizationProvider>

            <div>When is your return date?</div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker />
            </LocalizationProvider>

            <div>Địa chỉ email</div>
            <TextField id="email" label="Email" variant="standard" />
        </div>
        <Button onClick={onClick} variant="contained" disableElevation>
            Tiếp tục
        </Button>
        </>
    )
} 
export default Step1;