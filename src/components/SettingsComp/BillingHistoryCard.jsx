import React from 'react';
import { Grid, Stack, Typography } from '@mui/material';
import masterCard from '../../assets/images/master.png';
import visaCard from '../../assets/images/visa.png';
const BillingHistoryCard = ({ plan, date, cardNumber, price, cardType }) => {
    return (
        <Grid
            container
            sx={{
                bgcolor: 'white.main',
                borderRadius: '10px',
                padding: '13px 24px',
                border: '1px solid #EEEEEE',
                alignItems: 'center',
            }}
        >
            <Grid item lg={6}>
                <Stack>
                    <Typography variant={'bodyLarge'} color={'primary.900'}>
                        {plan} - USD $ {price}
                    </Typography>
                    <Typography variant={'bodySmall'} color={'primary.300'}>
                        {date}
                    </Typography>
                </Stack>
            </Grid>
            <Grid item lg={6}>
                <Stack direction={'row'} gap={1} alignItems={'center'} justifyContent={'end'}>
                    {cardType === 'Visa' ? (
                        <img src={visaCard} alt={cardType} width={'24px'} />
                    ) : null}
                    {cardType === 'MasterCard' ? (
                        <img src={masterCard} alt={cardType} width={'24px'} />
                    ) : null}
                    <Typography variant={'bodyMedium'} color={'primary.800'}>
                        {cardType} {cardNumber}
                    </Typography>
                </Stack>
            </Grid>
        </Grid>
    );
};

export default BillingHistoryCard;
