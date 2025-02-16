import React from 'react';
import { Grid, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import BarCharts from './BarCharts';

const OfferAnalytics = ({ selectedOffer }) => {
    return (
        <Grid container padding={3} wrap={'nowrap'}>
            <Grid item lg={4}>
                <Stack spacing={4}>
                    <Stack>
                        <Typography variant='titleLarge' color={'primary.500'}>
                            Conversion Rate
                        </Typography>
                    </Stack>
                    <Stack>
                        <Typography variant='extraBold' color={'primary.100'}>
                            {' '}
                            {selectedOffer?.conversionRate?.totalNumberOfSale}k
                        </Typography>
                        <Typography variant='bodySmall'>
                            {' '}
                            Total Number of Sell ({selectedOffer?.startDate}-
                            {selectedOffer?.EndDate})
                        </Typography>
                    </Stack>
                    <Stack>
                        <Typography variant='extraBold' color={'primary.100'}>
                            {' '}
                            {selectedOffer?.conversionRate?.totalNumberOfVisitor}
                        </Typography>
                        <Typography variant='bodySmall'>
                            {' '}
                            Total Number of Visitors ({selectedOffer?.startDate}-
                            {selectedOffer?.EndDate})
                        </Typography>
                    </Stack>
                    <Stack>
                        <Typography variant='extraBold' color={'primary.100'}>
                            {' '}
                            {selectedOffer?.conversionRate?.conversionRate}%
                        </Typography>
                        <Typography variant='bodySmall'> Conversion Rate</Typography>
                    </Stack>
                </Stack>
            </Grid>
            <Divider
                orientation={'vertical'}
                sx={{ backgroundColor: 'sc.one', marginRight: '30px' }}
            ></Divider>
            <Grid item lg={8}>
                <BarCharts selectedOffer={selectedOffer} />
            </Grid>
        </Grid>
    );
};
export default OfferAnalytics;
