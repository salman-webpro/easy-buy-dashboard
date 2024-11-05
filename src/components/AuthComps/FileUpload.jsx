import React, { useEffect, useRef, useState } from 'react';
import { Button, Typography, Box } from '@mui/material';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
const FileUpload = ({ setSelectedFile, selectedFile, name, label }) => {
    const fileInputRef = useRef(null);

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
    };
    const trimFileName = (fileName) => {
        if (fileName.length > 20) {
            const trimmedName =
                fileName.substring(0, 14 / 2) +
                '...' +
                fileName.substring(fileName.length - 14 / 2);
            return trimmedName;
        }
        return fileName;
    };
    return (
        <Box
            sx={{
                backgroundColor: 'white.main',
                borderRadius: '8px',
                padding: '10px',
                display: 'flex',
                alignItems: 'center',
            }}
            onClick={handleButtonClick}
        >
            <input
                type='file'
                accept='.jpg, .jpeg, .png, .webp'
                ref={fileInputRef}
                style={{ display: 'none' }}
                onChange={handleFileChange}
                name={name}
                multiple={false}
            />
            <Button
                onClick={handleButtonClick}
                color='primary'
                sx={{
                    '&:hover': {
                        backgroundColor: 'transparent',
                    },
                }}
            >
                <FileUploadOutlinedIcon />
            </Button>
            <Typography variant={'bodyLarge'} color={'sc.two'}>
                {selectedFile ? trimFileName(selectedFile?.name) : label}
            </Typography>
        </Box>
    );
};

export default FileUpload;
