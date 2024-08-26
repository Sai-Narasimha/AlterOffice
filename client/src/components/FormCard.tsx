import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import headLogo from '../assets/survey-standard 1.svg'
import { colors } from '../utils/colors'


interface FormData {
    name: string;
    submitted: number;
    viewed: number;
    publish_date: string;
}

interface FormCardProps {
    formData?: FormData;
}

const InfoRow = ({ label, value }: { label: string; value?: string | number }) => (
    <Box display="flex" justifyContent="space-between" alignItems="center" mt={1}>
        <Typography fontSize={12} color="grey">{label}</Typography>
        <Typography fontSize={12} fontWeight="bold">{value}</Typography>
    </Box>
);
const FormCard: React.FC<FormCardProps> = ({ formData }) => {
    return (
        <Box width={250} height={300} boxShadow={5} borderRadius={2} >
            <Box bgcolor={colors.primary} display={'flex'} alignItems={'center'} justifyContent={'center'} borderRadius={"8px 8px 0 0"} p={1}>
                <img src={headLogo} alt="plus_logo" width={40} />
            </Box>
            <Box p={1} py={1.5}>
                <Typography textAlign={'left'} fontSize={16} fontWeight={'bold'}>{formData?.name} name</Typography>
                <InfoRow label={'Submitted'} value={formData?.submitted} />
                <InfoRow label={'Viewed'} value={formData?.viewed} />
                <InfoRow label={'Date of Published'} value={formData?.publish_date} />

                <Button variant='contained' sx={{ backgroundColor: colors.secondary, color: 'white', fontSize: '12px', fontWeight: 'bold', marginTop: '30px', width: '75%', ":hover": { background: colors.secondary } }}>
                    View Submission
                </Button>
                <Box width={'75%'} margin={'auto'}>
                    <Button variant='contained' sx={{ backgroundColor: colors.success, color: 'white', fontSize: '12px', fontWeight: 'bold', marginTop: '10px', width: '45%', ":hover": { background: colors.success } }}>
                        Edit
                    </Button>
                    <Button variant='contained' sx={{ backgroundColor: colors.teritory, color: 'white', fontSize: '12px', fontWeight: 'bold', marginTop: '10px', marginLeft: '10px', width: '45%', ":hover": { background: colors.teritory } }}>
                        Delete
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}

export default FormCard