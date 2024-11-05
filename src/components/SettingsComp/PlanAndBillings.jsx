import React, { useState } from 'react';
import { Grid, Stack, Typography } from '@mui/material';
import ActivatedPlan from './ActivatedPlan';
import PlanCard from './PlanCard';
import AdsDialogs from '../common/AdsDialog';
import AdsModalLogo from '../../assets/images/adsModalLogo.png';
import BillingHistory from './BillingHistory';

const plansData = [
    {
        title: 'Basic',
        isActive: false,
        cost: 10,
        description:
            'Lorem ipsum dolor sit amet consectetur. Auctor morbi enim eros ultricies lacus. Quis sed quis eget penatibus turpis sit lorem.',
        color: '#E7E5EA',
    },
    {
        title: 'Prime Solo',
        isActive: false,
        cost: 20,
        description:
            'Lorem ipsum dolor sit amet consectetur. Auctor morbi enim eros ultricies lacus. Quis sed quis eget penatibus turpis sit lorem.',
        color: '#DDE8EC',
        isPopular: true,
    },
    {
        title: 'Companion Connect',
        isActive: true,
        cost: 30,
        description:
            'Lorem ipsum dolor sit amet consectetur. Auctor morbi enim eros ultricies lacus. Quis sed quis eget penatibus turpis sit lorem.',
        color: '#FBF0C3',
    },
    {
        title: 'Gather Together',
        isActive: false,
        cost: 40,
        description:
            'Lorem ipsum dolor sit amet consectetur. Auctor morbi enim eros ultricies lacus. Quis sed quis eget penatibus turpis sit lorem.',
        color: '#F7E4DE',
    },
];
const PlanAndBillings = () => {
    const [open, setOpen] = useState(false);
    const [step, setStep] = useState(2);
    const handleClose = () => {
        setOpen(false);
    };
    const handlePlanClick = (title) => {
        setOpen(true);
        console.log(`Clicked on plan: ${title}`);
    };
    return (
        <Grid container>
            <Grid item md={12}>
                <Typography variant={'displayMedium'} color={'primary.800'}>
                    Plans & Billings
                </Typography>
                <Stack gap={2} mt={2}>
                    <ActivatedPlan />
                    <Grid container spacing={2}>
                        {plansData.map((plan, index) => (
                            <Grid item md={6} lg={3} key={index}>
                                <PlanCard {...plan} onClick={handlePlanClick} />
                            </Grid>
                        ))}
                    </Grid>
                    <BillingHistory />
                </Stack>
                <AdsDialogs
                    handleClose={handleClose}
                    open={open}
                    titleImage={AdsModalLogo}
                    step={step}
                    setStep={setStep}
                />
            </Grid>
        </Grid>
    );
};

export default PlanAndBillings;
