import React from 'react';
import { Stack, Avatar, Typography } from '@mui/material';

const DataChip = ({ name, image }) => {
    return (
        <Stack
            direction={'row'}
            alignItems={'center'}
            justifyContent={'start'}
            gap={1}
            sx={{
                height: '32px',
                borderRadius: '30px',
                border: '1px solid #567F6D',
                padding: '8px',
            }}
        >
            <Avatar alt='Remy Sharp' src={image} sx={{ width: 24, height: 24 }} />
            <Typography variant={'labelLarge'}>{name} </Typography>
        </Stack>
    );
};

export default DataChip;
