// CouponInviceTop
import React from 'react';
import { Stack, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import PrintOutlinedIcon from '@mui/icons-material/PrintOutlined';

const CouponInviceTop = ({ Invoice }) => {
    return (
        <>
            <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                <Typography variant={'displayMedium'} color={'primary.800'}>
                    {Invoice.invoiceNumber}
                </Typography>
                <IconButton sx={{ color: 'primary.600' }}>
                    <PrintOutlinedIcon />
                </IconButton>
            </Stack>
            <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} mt={2}>
                <Stack>
                    <Typography variant={'titleLarge'} color={'primary.300'}>
                        {Invoice.name}
                    </Typography>
                    <Typography variant={'bodySmall'} color={'sc.two'}>
                        {Invoice.date}
                    </Typography>
                </Stack>
                <Stack alignItems={'end'}>
                    <Typography variant={'titleLarge'} color={'primary.800'}>
                        {Invoice.shopName}
                    </Typography>
                    <Typography variant={'bodySmall'} color={'primary.300'}>
                        {Invoice.shopLocation}
                    </Typography>
                </Stack>
            </Stack>
        </>
    );
};

export default CouponInviceTop;
