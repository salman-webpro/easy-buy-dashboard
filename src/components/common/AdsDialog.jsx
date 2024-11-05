import React, { useState } from 'react';
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
import { Typography } from '@mui/material';
import Placement from './Placement';
import BudgetAndSchedule from './BudgetAndSchedule';
import PurchaseInformation from './PurchaseInformation';
import ExisitingCards from './ExisitingCards';
import DoneLottie from './DoneLottie';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
const AdsDialogs = ({ open, handleClose, titleImage, step, setStep }) => {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('lg'));

    const handleStep = (step) => {
        setStep(step);
    };
    return (
        <Dialog
            open={open}
            onClose={handleClose}
            maxWidth='lg'
            fullWidth
            sx={{
                '& .MuiPaper-root': {
                    borderRadius: '10px',
                    padding: '0px',
                },
            }}
        >
            <DialogTitle>
                {/* Your PNG logo goes here */}
                <Grid container>
                    <Grid item xs={12} sx={{ display: 'flex' }}>
                        <Box>
                            <img
                                src={titleImage}
                                alt='Logo'
                                style={{ width: '100%', maxWidth: '150px' }}
                            />
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                paddingLeft: '10px',
                            }}
                        >
                            <Typography variant={'titleLarge'}>Wallmart</Typography>
                            <Typography variant={'bodySmall'} color={'sc.two'}>
                                Alaska, United States
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </DialogTitle>
            <DialogContent>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container>
                        <Grid item xs={12}>
                            <Box>
                                {step === 1 ? <Placement /> : null}
                                {step === 2 || step === 3 ? <PurchaseInformation /> : null}
                                {step === 2 ? <ExisitingCards /> : null}
                                {step === 3 ? (
                                    <div
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <DoneLottie />
                                    </div>
                                ) : null}
                            </Box>
                        </Grid>
                        {step === 1 ? (
                            <Grid item xs={12}>
                                <Box mt={4}>
                                    <BudgetAndSchedule />
                                </Box>
                            </Grid>
                        ) : null}
                    </Grid>
                </Box>
            </DialogContent>
            <DialogActions
                sx={{
                    padding: '15px',
                }}
            >
                {step === 1 ? (
                    <Button
                        sx={{
                            padding: '10px 20px',
                        }}
                        onClick={() => handleStep(2)}
                        variant={'contained'}
                    >
                        Next
                    </Button>
                ) : null}
                {step === 2 ? (
                    <Button
                        sx={{
                            padding: '10px 20px',
                        }}
                        onClick={() => handleStep(3)}
                        variant={'contained'}
                    >
                        Confirm Payment
                    </Button>
                ) : null}
                {step === 3 ? (
                    <Button
                        sx={{
                            padding: '10px 20px',
                        }}
                        onClick={handleClose}
                        variant={'contained'}
                    >
                        Back
                    </Button>
                ) : null}
            </DialogActions>
        </Dialog>
    );
};
export default AdsDialogs;
