import { Box, Button } from '@mui/material'
import React from 'react'

interface OptionsObj {
    label: string,
    action: () => void,
    bg: string
}
interface NavProps {
    logo: string,
    title: string,
    options?: OptionsObj[],
}
const Navbar: React.FC<NavProps> = ({ logo, title, options = [] }) => {
    return (
        <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} boxShadow={5} p={1}>
            <Box display={'flex'} alignItems={'center'} gap={1}>
                <img src={logo} alt="logo" width={"50px"} />
                <h3>{title}</h3>
            </Box>
            {options.length > 0 && <Box display={'flex'} gap={1} alignItems={'center'}>
                {options?.map((option, index) => <Button sx={{ textTransform: 'none', backgroundColor: `${option.bg}`, color: 'white' }} key={index} onClick={option.action}>{option.label}</Button>)}
            </Box>}
        </Box>
    )
}

export default Navbar