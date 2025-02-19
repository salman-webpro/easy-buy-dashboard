import React from 'react';
import { Grid, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import MonthFilter from '../CommonComps/MonthFilter';
import YearFilter from '../CommonComps/YearFilter';
import FitaChart from './FitaChart';
import Box from '@mui/material/Box';

const earning = {
    ThisMonth: [31, 40, 50, 40, 42, 109],
    LastMonth: [11, 32, 60, 20, 34, 52],
};
const customers = {
    ThisMonth: [11, 32, 45, 32, 34, 52],
    LastMonth: [31, 40, 28, 51, 42, 109],
};
const Loyelty = {
    ThisMonth: [31, 40, 28, 51, 42, 50],
    LastMonth: [11, 32, 45, 32, 34, 90],
};
const invoice = {
    ThisMonth: [11, 32, 45, 32, 34, 300],
    LastMonth: [31, 40, 28, 51, 42, 50],
};
const Overview = () => {
    let [yearFilterValue, setYearFilterValue] = React.useState('2023');
    let [MonthFilterValue, setMonthFilterValue] = React.useState('January');
    return (
        <Box sx={{ backgroundColor: '#fff', marginLeft: '10px', marginBottom: '10px' }} padding={2}>
            <Stack direction={'row'} justifyContent={'space-between'}>
                <Typography
                    sx={{ fontSize: { lg: '20px', md: '18px', xs: '14px', maxWidth: '50%' } }}
                    color={'primary.500'}
                >
                    Overview
                </Typography>
                <Stack
                    width={'50%'}
                    direction={'row'}
                    spacing={1}
                    sx={{ justifyContent: 'flex-end' }}
                >
                    <MonthFilter
                        MonthFilterValue={MonthFilterValue}
                        setMonthFilterValue={setMonthFilterValue}
                    />
                    <YearFilter
                        yearFilterValue={yearFilterValue}
                        setYearFilterValue={setYearFilterValue}
                    />
                </Stack>
            </Stack>
            <Grid container spacing={2}>
                <Grid item md={6} sm={12} mb={2}>
                    <Stack>
                        <FitaChart
                            title={'Total Earning'}
                            value={'250k'}
                            percentage={'7.4%'}
                            ThisMonth={earning.ThisMonth}
                            LastMonth={earning.LastMonth}
                            status={'down'}
                        />
                    </Stack>
                    <Divider />
                    <Stack>
                        <FitaChart
                            title={'Total Customers'}
                            value={'5k'}
                            percentage={'4.4%'}
                            ThisMonth={customers.ThisMonth}
                            LastMonth={customers.LastMonth}
                            status={'up'}
                        />
                    </Stack>
                </Grid>
                <Grid item md={6}>
                    <Stack>
                        <FitaChart
                            title={'Invoice'}
                            value={'5k'}
                            percentage={'3.4%'}
                            ThisMonth={invoice.ThisMonth}
                            LastMonth={invoice.LastMonth}
                            status={'down'}
                        />
                    </Stack>
                    <Divider />
                    <Stack>
                        <FitaChart
                            title={'Loyalty'}
                            value={'100'}
                            percentage={'10.4%'}
                            ThisMonth={Loyelty.ThisMonth}
                            LastMonth={Loyelty.LastMonth}
                            status={'up'}
                        />
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    );
};
export default Overview;
