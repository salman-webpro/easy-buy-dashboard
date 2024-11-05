import React from 'react';
import { Stack, Typography, TextField, Checkbox } from '@mui/material';

const CardInputForm = () => {
    return (
        <>
            <Stack spacing={0.5}>
                <Typography variant={'labelLarge'}>Card Holder Name</Typography>
                <TextField placeholder={'Write Card Holder Name'} />
            </Stack>
            <Stack direction={'row'} justifyContent={'space-between'} spacing={2} mt={0.5}>
                <Stack spacing={0.5} width={'100%'}>
                    <Typography variant={'labelLarge'}>Card Number</Typography>
                    <TextField placeholder={'***** *** ****'} />
                </Stack>
                <Stack spacing={0.5} width={'100%'}>
                    <Typography variant={'labelLarge'}>CVC</Typography>
                    <TextField placeholder={'***'} />
                </Stack>
            </Stack>
            <Stack direction={'row'} justifyContent={'space-between'} spacing={2} mt={0.5} mb={1}>
                <Stack spacing={0.5} width={'100%'}>
                    <Typography variant={'labelLarge'}>Month</Typography>
                    <TextField placeholder={'**'} />
                </Stack>
                <Stack spacing={0.5} width={'100%'}>
                    <Typography variant={'labelLarge'}>Year</Typography>
                    <TextField placeholder={'****'} />
                </Stack>
            </Stack>
            {/*<Stack direction={'row'} alignItems={'center'} justifyContent={'end'} mt={1}>*/}
            {/*    <Checkbox size='small' />*/}
            {/*    <Typography variant={'bodyMedium'} color={'primary.400'}>*/}
            {/*        Save this card*/}
            {/*    </Typography>*/}
            {/*</Stack>*/}
        </>
    );
};

export default CardInputForm;
