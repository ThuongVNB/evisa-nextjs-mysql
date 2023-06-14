'use client'
import { usePathname } from "next/navigation";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Button, TextField } from "@mui/material";
import Step1 from "@/components/visa-apply/step-1/visa-apply-step-1";
import Step2 from "@/components/visa-apply/step-2/visa-apply-step-2";

export default function Page() {
    const pathName = usePathname();
    console.log("pathName", pathName)
    const [,,country,currentStep] = pathName.split('/');
    const renderComponentBySlug = (slug) => {
        switch (slug) {
            case 'step-1':
                return <Step1 />
            case 'step-2':
                return <Step2 />
            default:
                return <div>404</div>
                break;
        }
    }
    
    return (
        <>
            {renderComponentBySlug(currentStep)}
        </>
    )
}