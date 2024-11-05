import React from 'react';
import { Stack, Typography } from '@mui/material';
import BillingHistoryCard from './BillingHistoryCard';

const billingHistoryData = [
    {
        cardType: 'MasterCard',
        date: 'May 3, 2022',
        cardNumber: '**** **** **** 3456',
        price: 10,
        plan: 'Basic',
    },
    {
        cardType: 'Visa',
        date: 'April 3, 2022',
        cardNumber: '**** **** **** 3456',
        price: 30,
        plan: 'Companion Connect Plan',
    },
    {
        cardType: 'MasterCard',
        date: 'May 3, 2022',
        cardNumber: '**** **** **** 3456',
        price: 40,
        plan: 'Gather Together Plan',
    },
    {
        cardType: 'MasterCard',
        date: 'May 3, 2022',
        cardNumber: '**** **** **** 3456',
        price: 40,
        plan: 'Prime Solo Plan',
    },
];

const BillingHistory = () => {
    return (
        <Stack
            sx={{
                bgcolor: 'background.main',
                borderRadius: '20px',
                padding: '20px',
                gap: 1,
            }}
        >
            <Typography variant={'titleLarge'} color={'primary.800'}>
                Billing history
            </Typography>
            <Stack gap={1} sx={{ overflowY: 'auto', maxHeight: '320px' }}>
                {billingHistoryData.map((item, index) => (
                    <BillingHistoryCard
                        key={index}
                        cardType={item.cardType}
                        date={item.date}
                        cardNumber={item.cardNumber}
                        price={item.price}
                        plan={item.plan}
                    />
                ))}
            </Stack>
        </Stack>
    );
};

export default BillingHistory;
