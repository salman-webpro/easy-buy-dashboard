import React from 'react';
import { Stack, Typography } from '@mui/material';
import Button from '@mui/material/Button';

const WelcomeStore = ({ setStoreStart }) => {
    return (
        <Stack
            gap={3}
            sx={{
                maxWidth: '780px',
                textAlign: 'center',
                color: 'white.main',
                padding: '24px',
            }}
        >
            <Typography variant={'headlineLarge'}>Welcome to our BreezeBuy</Typography>
            <Typography variant={'titleLarge'}>
                Just a Step Away from Full Access: Check Your Inbox for a Verification Link and
                Verify Your Account and Embark on an Incredible User Experience!
            </Typography>
            <Button
                variant={'outlined'}
                sx={{
                    color: 'white.main',
                    borderColor: 'white.main',
                    mb: 2,
                }}
                onClick={() => setStoreStart(false)}
            >
                <Typography variant={'labelLarge'}>Create Store</Typography>
            </Button>
        </Stack>
    );
};

export default WelcomeStore;
