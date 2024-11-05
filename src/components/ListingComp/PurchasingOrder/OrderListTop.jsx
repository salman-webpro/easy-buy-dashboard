import React from 'react';
import { Avatar, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

const orderListTop = ({ orderDetailsData }) => {
    return (
        <Stack direction={'row'} alignItems={'center'} px={2} py={1}>
            <Stack direction={'row'} alignItems={'center'} spacing={2} width={'50%'}>
                <Avatar
                    alt='Remy Sharp'
                    src={orderDetailsData.image}
                    sx={{ width: 120, height: 120 }}
                />
                <Stack spacing={2}>
                    <Typography variant='titleLarge'>{orderDetailsData.userName}</Typography>
                    <Stack spacing={1}>
                        <Typography variant='bodySmall' color={'primary.600'}>
                            {orderDetailsData.phone}
                        </Typography>
                        <Typography variant='labelMedium' color={'primary.500'}>
                            <span style={{ color: '#BEBEBE' }}> First Purchase </span>
                            {'  '}
                            {orderDetailsData.firstPurchased}
                        </Typography>
                    </Stack>
                </Stack>
            </Stack>
            <Stack
                direction={'row'}
                gap={4}
                alignItems={'center'}
                justifyContent={'center'}
                width={'50%'}
            >
                <Stack direction={'row'} alignItems={'center'} width={'100%'}>
                    <Stack
                        justifyContent={'center'}
                        alignItems={'center'}
                        sx={{
                            border: 7,
                            borderColor: 'sc.one',
                            width: '200px',
                            height: '130px',
                            borderRadius: '10px 0px 0px 10px',
                        }}
                    >
                        <Typography variant='labelMedium' color={'sc.two'}>
                            Total Spent
                        </Typography>
                        <Typography variant='titleLarge'>${orderDetailsData.totalSpent}</Typography>
                    </Stack>
                    <Stack
                        justifyContent={'center'}
                        alignItems={'center'}
                        sx={{
                            border: 7,
                            borderColor: 'sc.one',
                            width: '200px',
                            height: '130px',
                            borderLeft: 0,
                            borderRadius: '0px 10px 10px 0px',
                        }}
                    >
                        <Typography variant='labelMedium' color={'sc.two'}>
                            in{' '}
                            <span style={{ color: '#006C4A', fontSize: '1.5rem ' }}>
                                {orderDetailsData.totalOrders}
                            </span>{' '}
                            Orders
                        </Typography>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    );
};

export default orderListTop;
