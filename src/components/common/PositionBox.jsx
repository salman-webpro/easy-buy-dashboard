import React, { useState } from 'react';
import { Grid, Typography, Paper, FormControlLabel, Stack } from '@mui/material';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { styled } from '@mui/system';
import Switch from '@mui/material/Switch';
import ratinghand from '../../assets/images/rattingHand.png';
import dealsBox from '../../assets/images/dealsbox.png';

const YesNoToggle = styled(Switch)(({ theme }) => ({
    padding: 8,
    '& .MuiSwitch-track': {
        borderRadius: 22 / 2,
        '&:before, &:after': {
            content: '""',
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
            width: 16,
            height: 16,
        },
        '&:before': {
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
                theme.palette.getContrastText(theme.palette.primary.main),
            )}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
            left: 12,
        },
        '&:after': {
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
                theme.palette.getContrastText(theme.palette.primary.main),
            )}" d="M19,13H5V11H19V13Z" /></svg>')`,
            right: 12,
        },
    },
    '& .MuiSwitch-thumb': {
        boxShadow: 'none',
        width: 16,
        height: 16,
        margin: 2,
    },
}));

const PositionBox = ({ handleClickOpen, from }) => {
    return (
        <Grid
            container
            sx={{
                bgcolor: from === 'ads' ? 'white.main' : '#fafafa',
                padding: '14px',
                borderRadius: '10px',
            }}
        >
            <Grid item md={12} lg={from === 'ads' ? 2.2 : 3}>
                <img src={ratinghand} alt='dealsBox' style={{ width: '100px', height: '100px' }} />
            </Grid>

            <Grid item lg={from === 'ads' ? 6 : 9} md={12}>
                <Stack spacing={1} mt={1} pl={from !== 'ads' && 1}>
                    <Typography
                        variant={'headlineLarge'}
                        color={'primary.500'}
                        onClick={handleClickOpen}
                        sx={{
                            cursor: 'pointer',
                        }}
                    >
                        Featured at 1st Position <ArrowForwardIosOutlinedIcon />
                    </Typography>
                    <Typography variant={'bodyMedium'} color={'primary.800'}>
                        Next billing schedule: <span>May 3, 2023 10:00 am</span>
                    </Typography>
                    <Typography variant={'bodyMedium'} color={'primary.800'}>
                        Your Store will listed until Saturday, May 2, 2023
                    </Typography>
                </Stack>
            </Grid>
            {from === 'ads' && (
                <Grid item md={12} lg={3.8}>
                    <Stack
                        direction={'column'}
                        alignItems={'end'}
                        justifyContent={'end'}
                        height={'100%'}
                    >
                        <Stack direction={'row'} gap={1}>
                            <Typography variant={'bodySmall'}>
                                Do you want to enable auto renewal?
                            </Typography>
                            <FormControlLabel control={<YesNoToggle defaultChecked />} label='' />
                        </Stack>
                    </Stack>
                </Grid>
            )}
        </Grid>
    );
};

export default PositionBox;
