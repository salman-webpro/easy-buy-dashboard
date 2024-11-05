import React from 'react';
import { Stack, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
const DateRangePicker = ({ startDate, endDate, setEndDate, setStartDate }) => {
    const formattedStartDate = startDate ? startDate.format('YYYY-MM-DD') : null;
    const formattedEndDate = endDate ? endDate.format('YYYY-MM-DD') : null;
    return (
        <Stack
            style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
            }}
        >
            <Stack direction={'row'} alignItems={'center'} gap={0.5}>
                <DatePicker
                    value={startDate}
                    onChange={(newValue) => setStartDate(newValue)}
                    minDate={dayjs()}
                />
                <ArrowRightAltIcon sx={{ color: 'sc.two' }} />
                <DatePicker
                    value={endDate}
                    onChange={(newValue) => setEndDate(newValue)}
                    minDate={startDate}
                />
            </Stack>
        </Stack>
    );
};

export default DateRangePicker;
