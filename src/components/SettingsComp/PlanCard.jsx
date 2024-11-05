import React, { useState } from 'react';
import { Button, Stack, Typography } from '@mui/material';
import CustomCheckbox from '../common/CustomCheckbox';

const PlanCard = ({ title, cost, description, color, isActive, isPopular, onClick }) => {
    const [checked, setChecked] = useState(isActive);
    return (
        <Stack
            sx={{
                bgcolor: color,
                borderRadius: '12px',
                padding: '20px',
                gap: 2,
            }}
        >
            <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                <Typography variant={'titleLarge'} color={'primary.900'}>
                    {title}
                </Typography>
                <CustomCheckbox checked={checked} />
            </Stack>
            <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                <Typography variant={'headlineLarge'} color={'primary.900'}>
                    ${cost}{' '}
                    <span
                        style={{
                            fontSize: '16px',
                        }}
                    >
                        per month
                    </span>
                </Typography>
                {isPopular && (
                    <Stack
                        sx={{
                            display: 'flex',
                            padding: '4px 8px',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '10px',
                            borderRadius: '18px',
                            border: '1px solid #002315',
                        }}
                    >
                        <span style={{ fontSize: '12px' }}>Popular</span>
                    </Stack>
                )}
            </Stack>
            <Typography variant={'bodyMedium'} color={'sc.three'}>
                {description}
            </Typography>
            <Stack>
                <Button
                    disabled={isActive}
                    sx={{
                        bgcolor: 'primary.900',
                        color: 'white.main',
                        '&:hover': {
                            bgcolor: 'primary.900',
                            boxShadow: 'none',
                        },
                        mt: 2,
                        borderRadius: '8px',
                        padding: '10px 24px',
                        fontSize: '14px',
                        width: '100%',
                        boxShadow: 'none',
                        '&:disabled': {
                            bgcolor: 'sc.three',
                            color: 'sc.two',
                        },
                    }}
                    variant={'contained'}
                    onClick={() => {
                        onClick(title);
                    }}
                >
                    Change Plan
                </Button>
            </Stack>
        </Stack>
    );
};

export default PlanCard;
