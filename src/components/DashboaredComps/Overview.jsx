import React from 'react';
import { Grid, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import MonthFilter from '../CommonComps/MonthFilter';
import YearFilter from '../CommonComps/YearFilter';
import FitaChart from './FitaChart';
import Box from '@mui/material/Box';

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
                        <FitaChart title={'Total Earning'} value={'250k'} percentage={'7.4%'} />
                    </Stack>
                    <Divider />
                    <Stack>
                        <FitaChart title={'Total Customers'} value={'250k'} percentage={'7.4%'} />
                    </Stack>
                </Grid>
                <Grid item md={6}>
                    <Stack>
                        <FitaChart title={'Invoice'} value={'250k'} percentage={'7.4%'} />
                    </Stack>
                    <Divider />
                    <Stack>
                        <FitaChart title={'Loyalty'} value={'250k'} percentage={'7.4%'} />
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    );
};
export default Overview;
