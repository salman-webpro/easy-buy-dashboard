import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Avatar, Typography } from '@mui/material';
import warningAnimation from '../../../assets/lotties/warning.json';
import loadingAnimation from '../../../assets/lotties/loading.json';
import posAnimation from '../../../assets/lotties/pos.json';
import Lottie from 'react-lottie-player';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
const ConfirmPaymentDialogs = ({ confirmPaymentOpen, handleCloseCP, handlePaymentDone }) => {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('lg'));
    const [step, setStep] = useState(1);
    const [selectedRadioValue, setSelectedRadioValue] = useState(null);
    const handleStep = (step) => {
        setStep(step);
    };
    const handleCloseModal = (id) => {
        setStep(1);
        handleCloseCP(id);
    };

    useEffect(() => {
        if (step === 2) {
            setTimeout(() => {
                setStep(3);
            }, 2000);
        }
    }, [step]);
    console.log('step', step);
    return (
        <Dialog
            open={confirmPaymentOpen}
            onClose={() => handleCloseModal(0)}
            maxWidth='lg'
            sx={{
                // fixme: need to fix the width of the dialog
                '& .MuiPaper-root': {
                    width: '45%',
                    borderRadius: '10px',
                    padding: '0px',
                },
            }}
        >
            <DialogTitle>
                <Grid container>
                    <Grid item xs={12} sx={{ display: 'flex' }}>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                paddingLeft: '10px',
                                alignItems: 'center',
                                margin: 'auto',
                            }}
                        >
                            {step === 1 ? (
                                <Typography
                                    variant={'titleLarge'}
                                    color={'#FA6767'}
                                    sx={{ margin: 'auto', fontWeight: '700' }}
                                >
                                    Warning
                                </Typography>
                            ) : null}
                            {step === 3 ? (
                                <Typography
                                    variant={'titleLarge'}
                                    color={'#24A524'}
                                    sx={{ margin: 'auto', fontWeight: '700' }}
                                >
                                    Successful
                                </Typography>
                            ) : null}
                        </Box>
                    </Grid>
                </Grid>
            </DialogTitle>
            <DialogContent>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container>
                        <Grid item xs={12}>
                            {step === 1 && (
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Lottie
                                        loop
                                        animationData={warningAnimation}
                                        play
                                        style={{ width: 120, height: 120 }}
                                    />
                                    <Typography sx={{ color: '#707070' }}>
                                        Do you want to confirm payment for this customer?
                                    </Typography>
                                </Box>
                            )}
                            {step === 2 && (
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Lottie
                                        loop
                                        animationData={loadingAnimation}
                                        play
                                        style={{ width: 200, height: 200 }}
                                    />
                                    <Typography sx={{ color: '#000' }}>
                                        Please wait, your payment process in ongoing...
                                    </Typography>
                                </Box>
                            )}
                            {step === 3 && (
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Lottie
                                        loop
                                        animationData={posAnimation}
                                        play
                                        style={{ width: 200, height: 200 }}
                                    />
                                    <Typography sx={{ color: '#000' }}>
                                        Payment successfully confirmed! 🎉
                                    </Typography>
                                </Box>
                            )}
                        </Grid>
                    </Grid>
                </Box>
            </DialogContent>
            <DialogActions
                sx={{
                    padding: '15px',
                    border: step !== 2 && '1px solid #e3e3e3',
                }}
            >
                {step === 1 && (
                    <Box
                        variant={'contained'}
                        sx={{
                            color: '#BEBEBE',
                            backgroundColor: 'transparent',
                            padding: '15px',
                            cursor: 'pointer',
                        }}
                        onClick={() => handleCloseModal(0)}
                    >
                        Close
                    </Box>
                )}
                {step === 1 ? (
                    <Button
                        variant={'contained'}
                        sx={{
                            padding: '10px 20px',
                            backgroundColor: '#005F40',
                            color: '#fff',
                        }}
                        // disabled={selectedRadioValue === null}
                        onClick={() => handleStep(2)}
                    >
                        Yes, Confirm Payment
                    </Button>
                ) : null}

                {step === 3 ? (
                    <Button
                        sx={{
                            padding: '10px 20px',
                        }}
                        onClick={() => handleCloseModal(1)}
                        variant={'contained'}
                    >
                        Done
                    </Button>
                ) : null}
            </DialogActions>
        </Dialog>
    );
};
export default ConfirmPaymentDialogs;
