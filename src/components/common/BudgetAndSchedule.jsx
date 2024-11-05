import React, { useEffect, useState } from 'react';
import { MenuItem, Select, Stack, TextField, Typography } from '@mui/material';
import { set } from 'react-hook-form';
import SingleDatePicker from '../CommonComps/SingleDatePicker';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers';
import Divider from '@mui/material/Divider';

const BudgetAndSchedule = () => {
    const [scheduleValue, setScheduleValue] = useState('weekly');
    const [price, setPrice] = useState();

    const handleScheduleChange = (event) => {
        setScheduleValue(event.target.value);
    };

    const calculateBudget = () => {
        switch (scheduleValue) {
            case 'weekly':
                return 10;
            case 'monthly':
                return 100;
            case 'yearly':
                return 1000;
            default:
                return 0;
        }
    };
    useEffect(() => {
        setPrice(calculateBudget());
    }, [scheduleValue]);
    return (
        <>
            <Divider sx={{ mb: 1 }} />
            <Typography variant={'headlineSmall'}>Budget & Schedule</Typography>
            <br />
            <Typography variant={'bodyMedium'} color={'sc.two'}>
                Tailor your budget and select the perfect timing for your store to take the featured
                list.
            </Typography>
            <Stack mt={2}>
                <Stack direction={'row'} justifyContent={'start'} alignItems={'center'} gap={1}>
                    <Typography variant={'titleLarge'} color={'primary.800'}>
                        Budget and Schedule
                    </Typography>
                    <Select
                        value={scheduleValue}
                        onChange={handleScheduleChange}
                        size={'small'}
                        sx={{ width: '38%' }}
                    >
                        <MenuItem value={'weekly'}>Weekly</MenuItem>
                        <MenuItem value={'monthly'}>Monthly</MenuItem>
                        <MenuItem value={'yearly'}>Yearly</MenuItem>
                    </Select>
                    <TextField
                        sx={{ width: '38%' }}
                        value={`$${price}`}
                        InputProps={{
                            readOnly: true,
                        }}
                    ></TextField>
                </Stack>
                <Stack
                    gap={1}
                    sx={{
                        bgcolor: 'background.main',
                        borderRadius: '10px',
                        border: '1px solid #EEEEEE',
                        padding: '20px',
                        mt: 2,
                    }}
                >
                    <Stack direction={'row'} gap={2} item sx={{ width: '100%' }}>
                        <DatePicker
                            // label={'Start Date'}
                            sx={{ width: '49%' }}
                        />
                        <TimePicker
                            // sx={{
                            //     '& .MuiInputBase-input': {
                            //         fontSize: '14px',
                            //         padding: '1px',
                            //     },
                            // }}
                            sx={{ width: '49%' }}
                        />
                    </Stack>
                    <Stack direction={'row'} gap={2}>
                        <DatePicker
                            label={'End Date'}
                            InputLabelProps={{
                                fontSize: '8px',
                            }}
                            sx={{ width: '49%' }}
                            // sx={{
                            //     '& .MuiInputBase-input label': {
                            //         fontSize: '8px',
                            //         padding: '1px',
                            //     },
                            // }}
                            renderInput={(params) => <TextField {...params} />}
                        />
                        <TimePicker sx={{ width: '49%' }} />
                    </Stack>

                    <Typography variant={'bodyMedium'} color={'primary.800'}>
                        Your Store will listed until Saturday, May 2, 2023
                    </Typography>
                    <Typography variant={'bodyMedium'} color={'primary.800'}>
                        You'll spend up to $10.00 total.{' '}
                    </Typography>
                </Stack>
            </Stack>{' '}
        </>
    );
};

export default BudgetAndSchedule;
