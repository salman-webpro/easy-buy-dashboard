import { Stack, Typography } from '@mui/material';
import React from 'react';
import General from './General';

const TopText = ({ title, subtitle }) => {
    return (
        <Stack>
            <Typography variant={'bodyLarge'} color={'primary.300'} mt={1}>
                {title}
            </Typography>
            <Typography variant={'labelSmall'} color={'text.main'} mb={0.5}>
                {subtitle}
            </Typography>
        </Stack>
    );
};

export default TopText;
