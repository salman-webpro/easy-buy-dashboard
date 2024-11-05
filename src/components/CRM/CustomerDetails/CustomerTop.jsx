import React from 'react';
import { Avatar, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

const CustomerTop = ({ customerDetails }) => {
    return (
        <Stack
            direction={'row'}
            alignItems={'center'}
            justifyContent={'space-between'}
            bgcolor={'#FFF'}
            px={2}
            py={1}
        >
            <Stack direction={'row'} alignItems={'center'} gap={2}>
                <Avatar
                    alt='Remy Sharp'
                    src={customerDetails?.image}
                    sx={{ width: 120, height: 120 }}
                />
                <Stack>
                    <Typography variant='titleLarge'>{customerDetails.name}</Typography>
                    <Typography variant='bodySmall'>
                        First Purchase : {customerDetails.firstPurchase}
                    </Typography>
                </Stack>
            </Stack>
            <Stack direction={'row'} gap={4} alignItems={'center'}>
                <Stack>
                    <Typography variant='titleLarge'>
                        ${customerDetails.appliedFromPromo}
                    </Typography>
                    <Typography variant='labelLarge'>Applied From Promo</Typography>
                </Stack>
                <Divider orientation='vertical' variant='middle' flexItem />
                <Stack>
                    <Typography variant='titleLarge'>
                        ${customerDetails.regularSpendings}
                    </Typography>
                    <Typography variant='labelLarge'>Regular Spending's</Typography>
                </Stack>
                <Divider orientation='vertical' variant='middle' flexItem />
                <Stack>
                    <Typography variant='titleLarge'>${customerDetails.totalSpendings}</Typography>
                    <Typography variant='labelLarge'>Total Spending's</Typography>
                </Stack>
            </Stack>
        </Stack>
    );
};

export default CustomerTop;
