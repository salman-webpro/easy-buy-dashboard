import React from 'react';
import { Grid, Stack, Typography } from '@mui/material';

const TextShow = ({ data }) => {
    return (
        <Typography sx={{ color: '#002315', borderBottom: '1px solid #EEEEEE' }} mt={0.5}>
            {data}
        </Typography>
    );
};
const OfferDetails = ({ selectedOffer }) => {
    return (
        <>
            <Stack width={'100%'} p={2} backgroundColor='white.main' sx={{ borderRadius: '10px' }}>
                <Typography variant='titleLarge' color={'primary.800'}>
                    Offer Details
                </Typography>
                <Grid container spacing={2} mt={1}>
                    <Grid item xs={6}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Typography variant='titleMedium' color='primary.200'>
                                    Start Date
                                </Typography>
                                <TextShow data={selectedOffer?.startDate} />
                            </Grid>

                            <Grid item xs={12}>
                                <Typography variant='titleMedium' color='primary.200'>
                                    Availability
                                </Typography>
                                <TextShow data={selectedOffer?.Availability} />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={6}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Typography variant='titleMedium' color='primary.200'>
                                    End Date
                                </Typography>
                                <TextShow data={selectedOffer?.EndDate} />
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant='titleMedium' color='primary.200'>
                                    Category
                                </Typography>
                                <TextShow data={selectedOffer?.category} />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Stack>

            <Stack
                width={'100%'}
                p={2}
                mt={2}
                backgroundColor='white.main'
                sx={{ borderRadius: '10px' }}
            >
                <Typography variant='titleLarge'>Offer Details</Typography>
                <Grid container spacing={2} mt={1}>
                    <Grid item xs={6}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Typography variant='titleMedium' color='primary.200'>
                                    Discount in %
                                </Typography>
                                <TextShow data={`${selectedOffer?.discountInPercent}%`} />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={6}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Typography variant='titleMedium' color='primary.200'>
                                    Discount Price
                                </Typography>
                                <TextShow data={selectedOffer?.discountAmount} />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Stack>
        </>
    );
};
export default OfferDetails;
