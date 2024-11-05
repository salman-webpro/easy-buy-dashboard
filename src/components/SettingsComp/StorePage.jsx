import React, { useState } from 'react';
import { Grid, Stack, TextField, Typography } from '@mui/material';
import TopText from './TopText';
import { TimePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import CustomSwitch from '../CommonComps/CustomSwitch';

const StorePage = () => {
    const [closingTime, setClosingTime] = useState(dayjs('2023-12-11T21:30'));
    const [openingTime, setOpeningTime] = useState(dayjs('2023-12-11T8:30'));

    return (
        <Grid container>
            <Grid item md={12} lg={6}>
                <Typography variant={'displayMedium'} color={'primary.800'}>
                    Store
                </Typography>
                <Stack mb={1} mt={1}>
                    <TopText
                        title='Opening Time'
                        subtitle='Looking for a versatile and reliable product that can keep up with your busy lifestyle? '
                    />
                    <TimePicker
                        sx={{
                            '.MuiSvgIcon-root ': {
                                fill: '#006C4A ',
                            },
                        }}
                        value={openingTime}
                        onChange={(newValue) => setOpeningTime(newValue)}
                    />
                </Stack>

                <Stack mb={1}>
                    <TopText
                        title='Closing Time'
                        subtitle='Looking for a versatile and reliable product that can keep up with your busy lifestyle? '
                    />
                    <TimePicker
                        sx={{
                            '.MuiSvgIcon-root ': {
                                fill: '#006C4A ',
                            },
                        }}
                        value={closingTime}
                        onChange={(newValue) => setClosingTime(newValue)}
                    />
                </Stack>
                <Stack mb={1}>
                    <TopText
                        title='Tax Rate'
                        subtitle='Looking for a versatile and reliable product that can keep up with your busy lifestyle? '
                    />
                    <TextField defaultValue={'5%'} />
                </Stack>
                <Stack
                    mb={1}
                    direction={'row'}
                    justifyContent={'space-between'}
                    alignItems={'center'}
                >
                    <TopText
                        title='Stock Visibility'
                        subtitle='Quickly access item stock info with a click. Stock changes are disabled once this is enabled.'
                    />
                    <CustomSwitch switchValue={true} />
                </Stack>
                <Stack mb={1}>
                    <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                        <TopText
                            title='Self Checkout'
                            subtitle='Quickly access item stock info with a click. Stock changes are disabled once this is enabled.'
                        />
                        <CustomSwitch />
                    </Stack>
                    <Typography variant={'bodyLarge'} color={'sc.two'}>
                        Checkout Item
                    </Typography>
                    <TextField defaultValue={'5'} disabled />
                </Stack>
            </Grid>
            <Grid item md={12} lg={6}></Grid>
        </Grid>
    );
};

export default StorePage;
