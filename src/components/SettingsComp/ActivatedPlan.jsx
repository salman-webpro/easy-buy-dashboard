import React from 'react';
import { Grid, Stack, Typography } from '@mui/material';
import { SwitchYN } from './SwitchYN';
import { MdInfoOutline } from 'react-icons/md';

const ActivatedPlan = () => {
    return (
        <Stack
            sx={{
                borderRadius: '12px',
                padding: '12px 24px 12px 24px',
                bgcolor: '#FBF0C3',
            }}
        >
            <Grid container>
                <Grid
                    item
                    xs={9}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '8px',
                        alignItems: 'flex-start',
                        justifyContent: 'center',
                    }}
                >
                    <Typography variant={'headlineSmallBold'} color={'primary.900'}>
                        “Companion Connect” Plan Activated
                    </Typography>
                    <Stack>
                        <Typography variant={'bodyMedium'} color={'sc.three'}>
                            Duration: <span style={{ color: '#002315' }}>30 Days</span>
                        </Typography>
                        <Typography variant={'bodyMedium'} color={'sc.three'}>
                            Next billing schedule:
                            <span style={{ color: '#002315' }}> May 3, 2023 10:00 am</span>
                        </Typography>
                        <Stack direction={'row'} gap={0.5} alignItems={'center'}>
                            <MdInfoOutline color={'#707070'} />
                            <Typography variant={'bodyMedium'} color={'sc.three'}>
                                This plan will expire until:
                                <span style={{ color: '#002315' }}>
                                    {' '}
                                    Saturday, June 2, 2023 09:59 am
                                </span>
                            </Typography>
                        </Stack>
                    </Stack>
                </Grid>
                <Grid
                    item
                    xs={3}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',

                        justifyContent: 'end',
                    }}
                >
                    <Stack direction={'row'} alignItems={'center'} justifyContent={'end'} gap={1}>
                        <Typography variant={'bodySmall'} color={'sc.three'}>
                            Do you want to enable auto renew this plan?
                        </Typography>
                        <SwitchYN />
                    </Stack>
                </Grid>
            </Grid>
        </Stack>
    );
};

export default ActivatedPlan;
