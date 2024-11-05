import React, { useState } from 'react';
import dayjs from 'dayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import FormControl from '@mui/material/FormControl';
import { MdCalendarMonth } from 'react-icons/md';
import { TextField, Typography } from '@mui/material';

const CustomCalendarIcon = () => <MdCalendarMonth size={24} style={{ color: '#567F6D' }} />;

const SingleDatePicker = ({ date, setDate }) => {
    return (
        <FormControl
            sx={{
                m: 1,
                width: {
                    xs: '100%',
                    lg: '200px',
                },
            }}
        >
            <DatePicker
                value={date}
                onChange={(newValue) => setDate(newValue)}
                components={{
                    OpenPickerIcon: CustomCalendarIcon,
                    SwitchViewButton: CustomCalendarIcon,
                }}
            />
        </FormControl>
    );
};

export default SingleDatePicker;
