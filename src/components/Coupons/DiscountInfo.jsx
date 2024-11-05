import { Grid, Stack, Typography } from '@mui/material';
const TextShow = ({ data }) => {
    return (
        <Typography sx={{ color: '#002315', borderBottom: '1px solid #EEEEEE' }} mt={0.5}>
            {data}
        </Typography>
    );
};
const DiscountInfo = ({ selectedCoupon }) => {
    return (
        <Stack width={'100%'} p={2}>
            <Typography variant='titleLarge'>Discount Info</Typography>
            <Grid container spacing={2} mt={1}>
                <Grid item xs={6}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Typography variant='titleMedium' color='primary.200'>
                                Discount Info
                            </Typography>
                            <TextShow data={`${selectedCoupon?.discount}%`} />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant='titleMedium' color='primary.200'>
                                Minimum Purchase Price
                            </Typography>
                            <TextShow data={`$${selectedCoupon?.minPurchase}`} />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Typography variant='titleMedium' color='primary.200'>
                                Apply Quantity
                            </Typography>
                            <TextShow data={selectedCoupon?.applyQuantity} />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant='titleMedium' color='primary.200'>
                                Total Coupon Count
                            </Typography>
                            <TextShow data={`${selectedCoupon?.total}`} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Stack>
    );
};

export default DiscountInfo;
