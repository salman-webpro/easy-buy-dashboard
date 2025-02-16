import React from 'react';
import { Grid, Stack, Typography } from '@mui/material';

const TextShow = ({ data }) => {
    return (
        <Typography sx={{ color: '#002315', borderBottom: '1px solid #EEEEEE' }} mt={0.5}>
            {data}
        </Typography>
    );
};
const AddressDetails = ({ selectedStaff }) => {
    return (
        <Stack width={'100%'} p={2}>
            <Typography variant='titleLarge'>Address</Typography>
            <Grid container spacing={2} mt={1}>
                <Grid item xs={6}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Typography variant='titleMedium' color='primary.100'>
                                Country
                            </Typography>
                            <TextShow data={selectedStaff?.address?.country} />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant='titleMedium' color='primary.100'>
                                Street
                            </Typography>
                            <TextShow data={selectedStaff?.address?.street} />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Typography variant='titleMedium' color='primary.100'>
                                City
                            </Typography>
                            <TextShow data={selectedStaff?.address?.city} />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant='titleMedium' color='primary.100'>
                                Post Code
                            </Typography>
                            <TextShow data={selectedStaff?.address?.postalCode} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Stack>
    );
};

export default AddressDetails;
