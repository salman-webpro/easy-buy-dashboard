import React, { useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Dialog, DialogActions, Button, Typography, TextField, Stack } from '@mui/material';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Lottie from 'react-lottie-player';
import doneAnimation from '../../assets/lotties/doneAnimation.json';

const IntegrateModal = ({ title, open, onClose }) => {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const [step, setStep] = useState(1);
    const handleStep = (step) => {
        setStep(step);
    };
    return (
        <div>
            <Dialog
                maxWidth='xs'
                onClose={onClose}
                sx={{
                    '& .MuiDialog-paper': { width: '100%' },
                    '& .MuiPaper-root': {
                        borderRadius: '16px',
                    },
                }}
                open={open}
                aria-labelledby='responsive-dialog-title'
            >
                <DialogTitle>
                    {step === 1 ? (
                        <>
                            <Typography
                                variant={'titleLarge'}
                                color={'primary.800'}
                                sx={{ display: 'block' }}
                            >
                                {title}
                            </Typography>
                            <Typography variant={'bodyMedium'} color={'primary.200'}>
                                Please enter the following credentials to integrate POS
                            </Typography>
                        </>
                    ) : null}
                    {step === 2 ? (
                        <Stack>
                            <Typography
                                variant={'titleLarge'}
                                color={'primary.800'}
                                textAlign={'center'}
                            >
                                Successful
                            </Typography>
                        </Stack>
                    ) : null}
                </DialogTitle>
                <DialogContent>
                    {step === 1 ? (
                        <>
                            <Stack gap={0.5}>
                                <Typography variant={'labelMedium'}>Client ID</Typography>
                                <TextField fullWidth defaultValue={'20235-xsavd-54813'} />
                            </Stack>
                            <Stack mt={1.5} gap={0.5}>
                                <Typography variant={'labelMedium'}>Client Secret (key)</Typography>
                                <TextField fullWidth defaultValue={'adfsdg-18548-tyjyre'} />
                            </Stack>
                            <Stack mt={1.5}>
                                <Button
                                    fullWidth
                                    variant={'contained'}
                                    onClick={() => handleStep(2)}
                                >
                                    Integrate POS
                                </Button>
                            </Stack>
                        </>
                    ) : null}
                    {step === 2 && (
                        <Stack>
                            <Typography
                                variant={'bodyMedium'}
                                color={'primary.200'}
                                textAlign={'center'}
                            >
                                Payment Successful{' '}
                            </Typography>

                            <Stack
                                direction={'row'}
                                alignItems={'center'}
                                justifyContent={'center'}
                            >
                                <Lottie
                                    loop
                                    animationData={doneAnimation}
                                    play
                                    style={{ width: 150, height: 150 }}
                                />
                            </Stack>
                        </Stack>
                    )}
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default IntegrateModal;
