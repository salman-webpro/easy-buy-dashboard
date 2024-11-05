import React from 'react';
import { Stack, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { MdInfoOutline } from 'react-icons/md';
import Divider from '@mui/material/Divider';
const PurchaseInformation = () => {
    return (
        <>
            <Divider sx={{ mb: 2 }} />
            <Stack
                direction={'row'}
                justifyContent={'space-between'}
                alignItems={'center'}
                sx={{
                    bgcolor: 'primary.50',
                    p: 2,
                    borderRadius: '10px',
                    border: '1px solid #7BB29A',
                }}
            >
                <Stack>
                    <Typography variant={'extraBold'} color={'primary.300'}>
                        Listed on “1st Position Featured Store”
                    </Typography>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: '4px',
                        }}
                    >
                        <Typography variant={'bodyMedium'} color={'primary.800'}>
                            Duration:
                        </Typography>
                        <Typography variant={'bodyMedium'} color={'primary.900'}>
                            3 Month
                        </Typography>
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: '4px',
                        }}
                    >
                        <Typography variant={'bodyMedium'} color={'primary.800'}>
                            Next billing schedule:
                        </Typography>
                        <Typography variant={'bodyMedium'} color={'primary.900'}>
                            May 3, 2023 10:00 am
                        </Typography>
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: '4px',
                        }}
                    >
                        <MdInfoOutline width={'18px'} height={'18px'} />
                        <Typography variant={'bodyMedium'} color={'sc.three'}>
                            Your store will listed until
                        </Typography>
                        <Typography variant={'bodyMedium'} color={'primary.900'}>
                            Saturday, May 2, 2023 10:00 am
                        </Typography>
                    </div>
                </Stack>
                <Stack>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',

                            backgroundColor: '#36765C',
                            padding: '10px 24px',
                            borderRadius: '10px',
                            color: '#FFFFFF',
                        }}
                    >
                        <Typography variant={'bodySmall'}>Due Amount</Typography>
                        <Typography
                            sx={{
                                fontSize: '32px',
                                fontWeight: 600,
                            }}
                        >
                            $350
                        </Typography>
                    </div>
                </Stack>
            </Stack>
        </>
    );
};

export default PurchaseInformation;
