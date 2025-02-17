import React, { useState } from 'react';
import { FormControl, Grid, MenuItem, Stack, Typography } from '@mui/material';
import OptionSelect from './OptionSelect';
import MultiOptionSelect from './MultiOptionSelect';
import Button from '@mui/material/Button';
import { MdCloudUpload } from 'react-icons/md';
import { MdSettingsBackupRestore } from 'react-icons/md';
import TopText from './TopText';

const General = () => {
    const weeks = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const units = ['CGS system units', 'FPS system units', 'MKS system units', 'SI units'];
    return (
        <Grid container>
            <Grid item xs={12} md={6}>
                <Typography variant={'displayMedium'} color={'primary.800'}>
                    General
                </Typography>
                <Stack mb={1} mt={1}>
                    <TopText
                        title='Language'
                        subtitle='Looking for a versatile and reliable product that can keep up with your busy lifestyle?'
                    />
                    <OptionSelect
                        title={'Language'}
                        values={['English', 'Spanish', 'Chinese', 'French']}
                    />
                </Stack>

                <Stack mb={1}>
                    <TopText
                        title='Date & Number Format'
                        subtitle='Looking for a versatile and reliable product that can keep up with your busy lifestyle?'
                    />
                    <OptionSelect
                        title={'Date Format'}
                        values={['DD-MM-YY', 'MM-DD-YY', 'YY-MM-DD']}
                    />
                </Stack>
                <Stack mb={1}>
                    <TopText
                        title='First Day of Week'
                        subtitle='Looking for a versatile and reliable product that can keep up with your busy lifestyle?'
                    />
                    <OptionSelect title={'Date Format'} values={weeks} />
                </Stack>
                <Stack mb={1}>
                    <TopText
                        title='Currency'
                        subtitle='Looking for a versatile and reliable product that can keep up with your busy lifestyle?'
                    />
                    <OptionSelect title={'Date Format'} values={['USD', 'EUR', 'CAD']} />
                </Stack>
                <Stack mb={1}>
                    <TopText
                        title='Units'
                        subtitle='Looking for a versatile and reliable product that can keep up with your busy lifestyle?'
                    />
                    <MultiOptionSelect title={'Units'} values={units} />
                </Stack>
                <Grid container alignItems={'center'}>
                    <Grid item lg={10.2}>
                        <TopText
                            title='Backup'
                            subtitle='Back up your Wishlist & Shopping lists. You can retore them anytime you want'
                        />
                    </Grid>
                    <Grid item lg={1.8}>
                        <Button
                            variant={'contained'}
                            startIcon={<MdCloudUpload />}
                            sx={{
                                padding: '8px 16px',
                            }}
                        >
                            Backup
                        </Button>
                    </Grid>
                </Grid>
                <Grid container alignItems={'center'}>
                    <Grid item lg={10.2}>
                        <TopText
                            title='Restore'
                            subtitle='Restore your Wishlist & Shopping lists.'
                        />
                    </Grid>
                    <Grid item lg={1.8}>
                        <Button
                            variant={'contained'}
                            startIcon={<MdSettingsBackupRestore />}
                            sx={{
                                padding: '8px 16px',
                            }}
                        >
                            Restore
                        </Button>
                    </Grid>
                </Grid>
                {/*<Stack*/}
                {/*    mb={1}*/}
                {/*    direction={'row'}*/}
                {/*    justifyContent={'space-between'}*/}
                {/*    alignItems={'center'}*/}
                {/*></Stack>*/}
                {/*<Stack*/}
                {/*    mb={1}*/}
                {/*    direction={'row'}*/}
                {/*    justifyContent={'space-between'}*/}
                {/*    alignItems={'center'}*/}
                {/*>*/}
                {/*    */}
                {/*    */}
                {/*</Stack>*/}
            </Grid>
            <Grid item md={12} lg={6}></Grid>
        </Grid>
    );
};

export default General;
