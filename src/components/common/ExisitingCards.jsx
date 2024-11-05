import React from 'react';
import { Grid, Stack, TextField, Typography } from '@mui/material';
import { PaymentCard } from './PaymentCard';
import { Check } from '@mui/icons-material';
import Checkbox from '@mui/material/Checkbox';
import CardInputForm from './CardInputForm';
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
const ExisitingCards = () => {
    return (
        <div
            style={{
                marginTop: '16px',
            }}
        >
            <Stack>
                <Typography variant={'headlineSmall'} mb={2}>
                    {' '}
                    Pay with Your Existing Cards
                </Typography>
                <Grid container spacing={4}>
                    {paymentCardsData.map((card, index) => (
                        <Grid item key={index} lg={12} xl={6}>
                            <PaymentCard
                                cardType={card.cardType}
                                cardNumber={card.cardNumber}
                                expiryDate={card.expiryDate}
                                cardName={card.cardName}
                            />
                        </Grid>
                    ))}
                </Grid>

                {/*<Stack direction={'row'} justifyContent={'space-between'} spacing={2} mt={1}>*/}
                {/*    <PaymentCard*/}
                {/*        cardType={'Master'}*/}
                {/*        cardNumber={'1234 5678 9012 3456'}*/}
                {/*        expiryDate={'12/25'}*/}
                {/*        cardName={'Mehadi Hasan Ovi'}*/}
                {/*    />*/}
                {/*    <PaymentCard*/}
                {/*        cardType={'Visa'}*/}
                {/*        cardNumber={'1234 5678 9012 3456'}*/}
                {/*        expiryDate={'12/25'}*/}
                {/*        cardName={'Mehadi Hasan Ovi'}*/}
                {/*    />*/}
                {/*</Stack>*/}
                <Typography variant={'bodyMedium'} textAlign={'center'} my={2}>
                    or
                </Typography>
                <Stack>
                    <Typography variant={'titleLarge'}>
                        Please enter your card information
                    </Typography>
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
                        <CardInputForm />
                        <Stack direction={'row'} alignItems={'center'} ml={-1}>
                            <Checkbox size='small' />
                            <Typography variant={'bodyMedium'} color={'primary.400'}>
                                Save this card
                            </Typography>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </div>
    );
};

export default ExisitingCards;
