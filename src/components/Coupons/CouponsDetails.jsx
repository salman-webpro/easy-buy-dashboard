import { Grid, Stack, Typography } from '@mui/material';
const TextShow = ({ data }) => {
    return (
        <Typography sx={{ color: '#002315', borderBottom: '1px solid #EEEEEE' }} mt={0.5}>
            {data}
        </Typography>
    );
};
const CouponsDetails = ({ selectedCoupon }) => {
    return (
        <Stack width={'100%'} p={2}>
            <Typography variant='titleLarge'>Coupons Details</Typography>
            <Grid container spacing={2} mt={1}>
                <Grid item xs={6}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Typography variant='titleMedium' color='primary.100'>
                                Start Date
                            </Typography>
                            <TextShow data={selectedCoupon?.startDate} />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant='titleMedium' color='primary.100'>
                                Availability
                            </Typography>
                            <TextShow data={selectedCoupon?.available} />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Typography variant='titleMedium' color='primary.100'>
                                End Date
                            </Typography>
                            <TextShow data={selectedCoupon?.endDate} />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant='titleMedium' color='primary.100'>
                                Code
                            </Typography>
                            <TextShow data={selectedCoupon?.code} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Stack>
    );
};

export default CouponsDetails;
