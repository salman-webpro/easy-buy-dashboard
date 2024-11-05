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
import { Avatar, Typography } from '@mui/material';
import Placement from './Placement';
import BudgetAndSchedule from './BudgetAndSchedule';
import PurchaseInformation from './PurchaseInformation';
import ExisitingCards from './ExisitingCards';
import DoneLottie from './DoneLottie';
import OffersSwipe from './OffersSwipe';
import FeaturedPlacement from './FeaturedPlacement';
import titleImage from '../../assets/images/offerWinter.png';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
const DealsDialog = ({ dealsOpen, handleDealsClose }) => {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('lg'));
    const [step, setStep] = useState(1);
    const [selectedRadioValue, setSelectedRadioValue] = useState(null);
    const handleStep = (step) => {
        setStep(step);
    };

    return (
        <Dialog
            open={dealsOpen}
            onClose={handleDealsClose}
            maxWidth='lg'
            sx={{
                // fixme: need to fix the width of the dialog
                '& .MuiPaper-root': {
                    width: '55%',
                    borderRadius: '10px',
                    padding: '0px',
                },
            }}
        >
            <DialogTitle>
                <Grid container>
                    <Grid item xs={12} sx={{ display: 'flex' }}>
                        <Box></Box>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                paddingLeft: '10px',
                            }}
                        >
                            {step === 1 ? (
                                <Typography variant={'titleLarge'} color={'primary.900'}>
                                    Select Offers
                                </Typography>
                            ) : null}
                            {step === 2 || step === 3 ? (
                                <>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            gap: '10px',
                                        }}
                                    >
                                        <Avatar
                                            src={titleImage}
                                            sx={{
                                                width: '50px',
                                                height: '50px',
                                            }}
                                        />
                                        <Typography variant={'titleMedium'}>
                                            Winter Offer
                                        </Typography>
                                    </Box>
                                </>
                            ) : null}
                        </Box>
                    </Grid>
                </Grid>
            </DialogTitle>
            <DialogContent>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container>
                        <Grid item xs={12}>
                            <Box>
                                {step === 1 ? (
                                    <>
                                        <OffersSwipe />

                                        <FeaturedPlacement
                                            selectedRadioValue={selectedRadioValue}
                                            setSelectedRadioValue={setSelectedRadioValue}
                                        />

                                        <div
                                            style={{
                                                marginBottom: '20px',
                                            }}
                                        ></div>
                                        <BudgetAndSchedule />
                                    </>
                                ) : null}
                                {step === 2 || step === 3 ? <PurchaseInformation /> : null}
                                {step === 2 ? (
                                    <>
                                        <ExisitingCards />
                                    </>
                                ) : null}
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
                        variant={'contained'}
                        sx={{
                            padding: '10px 20px',
                        }}
                        disabled={selectedRadioValue === null}
                        onClick={() => handleStep(2)}
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
                        onClick={handleDealsClose}
                        variant={'contained'}
                    >
                        Back
                    </Button>
                ) : null}
            </DialogActions>
        </Dialog>
    );
};
export default DealsDialog;
