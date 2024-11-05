import { Grid, Stack, Typography } from '@mui/material';

const TextShow = ({ data }) => {
    return (
        <Typography sx={{ color: '#002315', borderBottom: '1px solid #EEEEEE' }} mt={0.5}>
            {data}
        </Typography>
    );
};
const PersonalDetails = ({ selectedStaff }) => {
    return (
        <Stack width={'100%'} p={2}>
            <Typography variant='titleLarge'>Personal Details</Typography>
            <Grid container spacing={2} mt={1}>
                <Grid item xs={6}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Typography variant='titleMedium' color='primary.200'>
                                First Name
                            </Typography>
                            <TextShow data={selectedStaff?.name.split(' ')[0]} />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant='titleMedium' color='primary.200'>
                                Staff ID
                            </Typography>
                            <TextShow data={selectedStaff?.staffID} />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant='titleMedium' color='primary.200'>
                                Gender
                            </Typography>
                            <TextShow data={selectedStaff?.gender} />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant='titleMedium' color='primary.200'>
                                Joining Date
                            </Typography>
                            <TextShow data={selectedStaff?.joiningDate} />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Typography variant='titleMedium' color='primary.200'>
                                Last Name
                            </Typography>
                            <TextShow data={selectedStaff?.name.split(' ')[1]} />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant='titleMedium' color='primary.200'>
                                Email
                            </Typography>
                            <TextShow data={selectedStaff?.email} />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant='titleMedium' color='primary.200'>
                                Phone Number
                            </Typography>
                            <TextShow data={selectedStaff?.phone} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Stack>
    );
};

export default PersonalDetails;
