import React from 'react';
import dealsBox from '../../assets/images/dealsbox.png';
import { Stack, Typography } from '@mui/material';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

const DealsBox = ({ handleDealsOpen }) => {
    return (
        <Stack
            sx={{
                bgcolor: 'white.main',
                padding: '10px',
                borderRadius: '10px',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'start',
                alignItems: 'start',
                gap: '16px',
                width: '100%',
            }}
        >
            <img src={dealsBox} alt='dealsBox' />
            <Stack spacing={1} mt={1}>
                <Typography variant={'bodyLarge'} color={'sc.two'}>
                    Place your deals in the feature list{' '}
                </Typography>
                <Typography
                    variant={'headlineLarge'}
                    color={'primary.500'}
                    onClick={handleDealsOpen}
                    sx={{
                        cursor: 'pointer',
                    }}
                >
                    Set as Featured Deals <ArrowForwardIosOutlinedIcon />
                </Typography>
            </Stack>
        </Stack>
    );
};

export default DealsBox;
