import { Backdrop, Box, Button, Fade, Modal, TextField, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

interface CreateFromProps {
    isOpen: boolean,
    onClose: () => void,
}
export const CreateFromModal: React.FC<CreateFromProps> = ({ isOpen, onClose }) => {
    const [name, setName] = React.useState('');
    const navigate = useNavigate()
    const handleCreateName = () => {
        if (!name) { return }
        localStorage.setItem('formName', name)
        onClose();
        setName("");
        navigate('/admin/create_form')
    }
    return (
        <Box>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={isOpen}
                onClose={onClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Box sx={style}>
                    <h3>Create Feedback Form</h3>
                    <TextField fullWidth variant="standard" onChange={(e) => setName(e.target.value)} value={name} />
                    <Box justifyContent={'right'} marginTop={3} display={'flex'}>
                        <Button sx={{ textTransform: 'none' }} onClick={handleCreateName}>Create</Button>
                        <Button sx={{ textTransform: 'none' }} onClick={() => { setName(''); onClose() }}>Close</Button>
                    </Box>
                </Box>
            </Modal>
        </Box>
    );
}


const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};