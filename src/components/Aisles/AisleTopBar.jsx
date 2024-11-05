import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import Button from '@mui/material/Button';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { Stack } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import styles from '../../style.module.css';
import AilseSearch from './AilseSearch';

const AisleTopBar = ({ onSearchChange }) => {
    return (
        <Stack
            direction={'row'}
            justifyContent={'space-between'}
            alignItems={'center'}
            sx={{ bgcolor: 'white.main', borderRadius: '10px', padding: '8px' }}
        >
            <Stack sx={{ flex: '1' }} direction={'row'} gap={1}>
                <AilseSearch onSearchChange={onSearchChange} />
                {/*    Date Filter */}
            </Stack>
            <Stack sx={{ flex: '1' }} direction={'row'} gap={1} justifyContent={'end'}>
                <IconButton
                    sx={{
                        border: '1px solid',
                        borderRadius: '10px',
                        '&:hover': {
                            bgcolor: 'primary.600',
                            color: 'sc.one',
                        },
                    }}
                >
                    <FileUploadOutlinedIcon />
                </IconButton>
                <IconButton
                    sx={{
                        border: '1px solid',
                        borderRadius: '10px',
                        '&:hover': {
                            bgcolor: 'primary.600',
                            color: 'sc.one',
                        },
                    }}
                >
                    <FileDownloadOutlinedIcon />
                </IconButton>
            </Stack>
        </Stack>
    );
};

export default AisleTopBar;
