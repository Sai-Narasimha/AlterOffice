import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

interface TextAreaProps {
    label: string;
    value: string;
    required?: boolean;
    errorMessage?: string;
    onEdit: (newValue: string, newLabel: string, newErrorMessage: string) => void;
    onDelete: () => void;
}

const TextArea: React.FC<TextAreaProps> = ({ label, value, required = false, errorMessage = 'This field is required', onEdit, onDelete }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [tempValue, setTempValue] = useState(value);
    const [tempLabel, setTempLabel] = useState(label);
    const [tempErrorMessage, setTempErrorMessage] = useState(errorMessage);
    const [hasError, setHasError] = useState(false);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        if (required && !tempValue.trim()) {
            setHasError(true);
        } else {
            onEdit(tempValue, tempLabel, tempErrorMessage);
            setIsEditing(false);
            setHasError(false);
        }
    };

    const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTempValue(event.target.value);
        if (required && event.target.value.trim()) {
            setHasError(false);
        }
    };

    const handleLabelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTempLabel(event.target.value);
    };

    const handleErrorMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTempErrorMessage(event.target.value);
    };

    return (
        <Box border={1} p={2} borderRadius={1} width={'100%'}>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                {isEditing ? (
                    <Box display="flex" gap={2} alignItems="center">
                        <TextField
                            value={tempLabel}
                            onChange={handleLabelChange}
                            label="Label"
                            variant="outlined"
                        />
                        <TextField
                            value={tempErrorMessage}
                            onChange={handleErrorMessageChange}
                            label="Error Message"
                            variant="outlined"
                        />
                    </Box>
                ) : (
                    <Typography variant="h6">{tempLabel}</Typography>
                )}
                <Box>
                    {isEditing ? (
                        <Button variant="contained" color="primary" onClick={handleSave} sx={{ mr: 1 }}>
                            Save
                        </Button>
                    ) : (
                        <Button variant="contained" color="primary" onClick={handleEdit} sx={{ mr: 1 }}>
                            Edit
                        </Button>
                    )}
                    <Button variant="contained" color="secondary" onClick={onDelete}>
                        Delete
                    </Button>
                </Box>
            </Box>
            <TextField
                fullWidth
                multiline
                rows={4}
                value={tempValue}
                onChange={handleValueChange}
                variant="outlined"
                error={hasError}
                helperText={hasError ? tempErrorMessage : ''}
            />
        </Box>
    );
};

export default TextArea;
