import React, { useState } from 'react';
import { Stack, TextField } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import Drawer from '@mui/material/Drawer';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { DatePicker } from '@mui/x-date-pickers';
import CompareArrowsOutlinedIcon from '@mui/icons-material/CompareArrowsOutlined';

const SearchWithDatePicker = () => {
    // Function to toggle the right drawer

    const [startDate, setStartDate] = React.useState(null);
    const [endDate, setEndDate] = React.useState(null);
    const formattedStartDate = startDate ? startDate.format('YYYY-MM-DD') : null;
    const formattedEndDate = endDate ? endDate.format('YYYY-MM-DD') : null;
    console.log(formattedStartDate, formattedEndDate);
    const handleEndDateChange = (date) => {
        if (startDate && date && date.isBefore(startDate)) {
            alert('End Date cannot be before Start Date');
            setEndDate(null);
        } else {
            setEndDate(date);
        }
    };
    return (
        <Stack
            direction={'row'}
            justifyContent={'space-between'}
            alignItems={'center'}
            sx={{
                bgcolor: 'white.main',
                borderRadius: '10px',
                padding: '8px',
                boxShadow: 'rgb(0 0 0 / 8%) 0px 1px 10px',
            }}
        >
            <Stack sx={{ flex: '1' }} direction={'row'} gap={1}>
                <TextField
                    id='outlined-start-adornment'
                    sx={{
                        m: 1,
                        width: '541px',
                        padding: '10px, 48px, 10px, 10px',
                        font: 'bodyMedium',
                        borderRadius: '4px',
                    }}
                    placeholder='Search by Name, Category'
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position='start'>
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}
                />

                <Stack direction={'row'} alignItems={'center'} gap={0.5}>
                    <DatePicker
                        startDate={startDate}
                        onChange={(newValue) => setStartDate(newValue)}
                    />
                    <CompareArrowsOutlinedIcon sx={{ color: 'sc.two' }} />
                    <DatePicker endDate={endDate} onChange={handleEndDateChange} />
                </Stack>
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
                    <FileDownloadOutlinedIcon />
                </IconButton>
            </Stack>
        </Stack>
    );
};

export default SearchWithDatePicker;
