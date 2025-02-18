import React from 'react';
import { Stack, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const SuccessStore = () => {
    const navigate = useNavigate();
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
            <Typography variant={'headlineLarge'}>Congratulations</Typography>
            <Typography variant={'titleLarge'}>
                "Your Store Creation is a Success! Get Ready to Transform Your Retail Experience and
                Unlock the Potential of Your Business with BreezeBuy!"
            </Typography>
            <Button
                variant={'outlined'}
                sx={{
                    color: 'white.main',
                    borderColor: 'white.main',
                    mb: 2,
                }}
                onClick={() => navigate('/easy-buy-dashboard')}
            >
                <Typography variant={'labelLarge'}>Login</Typography>
            </Button>
        </Stack>
    );
};

export default SuccessStore;
