import React from 'react';
import { Button, Grid, Stack, TextField, Typography } from '@mui/material';
import { PaymentCard } from '../common/PaymentCard';
import Checkbox from '@mui/material/Checkbox';
import CardInputForm from '../common/CardInputForm';
const paymentCardsData = [
    {
        cardType: 'Master',
        cardNumber: '1234 5678 9012 3456',
        expiryDate: '12/25',
        cardName: 'Mehadi Hasan Ovi',
    },
    {
        cardType: 'Visa',
        cardNumber: '1234 5678 9012 3456',
        expiryDate: '12/25',
        cardName: 'Mehadi Hasan Ovi',
    },
];

const PaymentMethodPage = () => {
    return (
        <Grid container>
            <Grid item md={12}>
                <Typography variant={'displayMedium'} color={'primary.800'}>
                    Payment Method
                </Typography>
                <Stack gap={2} mt={2}>
                    <Typography variant={'headlineSmall'} color={'primary.900'}>
                        Existing Cards
                    </Typography>
                    <Grid container spacing={4}>
                        {paymentCardsData.map((card, index) => (
                            <Grid item key={index} md={12} lg={6}>
                                <PaymentCard
                                    cardType={card.cardType}
                                    cardNumber={card.cardNumber}
                                    expiryDate={card.expiryDate}
                                    cardName={card.cardName}
                                />
                            </Grid>
                        ))}
                    </Grid>
                    <Grid container>
                        <Grid item lg={12} md={12}>
                            <Stack
                                mt={1}
                                sx={{
                                    bgcolor: 'background.main',
                                    border: '1px solid #EEEEEE',
                                    borderRadius: '10px',
                                    padding: '20px',
                                    mt: 2,
                                }}
                            >
                                <Typography variant={'titleLarge'} mb={2}>
                                    Add Card
                                </Typography>
                                <CardInputForm />
                                <Stack
                                    direction={'row'}
                                    alignItems={'center'}
                                    justifyContent={'end'}
                                    mt={1}
                                >
                                    <Button
                                        variant={'contained'}
                                        sx={{
                                            textTransform: 'capitalize',
                                            borderRadius: '8px',
                                            padding: '10px 20px',
                                        }}
                                    >
                                        Add Card
                                    </Button>
                                </Stack>
                            </Stack>
                        </Grid>
                    </Grid>
                </Stack>
            </Grid>
        </Grid>
    );
};

export default PaymentMethodPage;
