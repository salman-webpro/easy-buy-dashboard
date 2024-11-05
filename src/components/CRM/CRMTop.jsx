import React from 'react';
import { Stack, TextField } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { DatePicker } from '@mui/x-date-pickers';
import CompareArrowsOutlinedIcon from '@mui/icons-material/CompareArrowsOutlined';
import IconButton from '@mui/material/IconButton';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

const CrmTop = () => {
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
            sx={{ bgcolor: 'white.main', borderRadius: '10px', padding: '5px 15px' }}
        >
            <TextField
                id='outlined-start-adornment'
                sx={{
                    m: 1,
                    width: '541px',
                    padding: '10px, 48px, 10px, 10px',
                    font: 'bodyMedium',
                    borderRadius: '4px',
                }}
                placeholder='Search by App ID, Name, Email'
                InputProps={{
                    startAdornment: (
                        <InputAdornment position='start'>
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }}
            />
            <Stack direction={'row'} alignItems={'center'} gap={0.5}>
                <DatePicker startDate={startDate} onChange={(newValue) => setStartDate(newValue)} />
                <CompareArrowsOutlinedIcon sx={{ color: 'sc.two' }} />
                <DatePicker endDate={endDate} onChange={handleEndDateChange} />
            </Stack>
            <Stack
                sx={{ flex: '1' }}
                direction={'row'}
                gap={1}
                justifyContent={'end'}
                alignItems={'center'}
            >
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
            </Stack>
        </Stack>
    );
};

export default CrmTop;
