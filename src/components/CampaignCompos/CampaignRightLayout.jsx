import React, { useState } from 'react';
import { Grid, Stack } from '@mui/material';
import CampaignSummary from './CampaignSummary';
import Offerings from './Offerings';
import CountdownTimer from './CountdownTimer';

const CampaignRightLayout = ({ selectedCampaign }) => {
    const [isAddDrawerOpen, setIsAddDrawerOpen] = useState(false);
    const [campaignData, setCampaignData] = useState();

    const toggleAddDrawer = (data) => {
        setIsAddDrawerOpen(!isAddDrawerOpen);
        setCampaignData(data);
    };

    return (
        <Stack
            fullWidth
            sx={{
                height: '93vh',
                padding: '24px',
                backgroundColor: 'background.main',
                position: 'relative',
            }}
        >
            <Grid container gap={1}>
                <Grid
                    item
                    md={5.9}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        backgroundColor: 'white.main',
                        p: 2,
                        borderRadius: '15px',
                    }}
                >
                    <CampaignSummary selectedCampaign={selectedCampaign} />
                </Grid>
                <Grid
                    item
                    md={5.9}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'white.main',
                        // backgroundColor: '#006C4A',
                        borderRadius: '15px',
                        padding: '10px',
                    }}
                >
                    <CountdownTimer endDate='2024-02-09T00:00:00' />
                </Grid>
            </Grid>

            <Stack backgroundColor='white.main' width={'100%'} mt={2} p={2} borderRadius={'15px'}>
                {/* <CampaignDetails selectedCampaign={selectedCampaign} /> */}
                <Offerings selectedCampaign={selectedCampaign} />
            </Stack>
            <Stack backgroundColor='white.main' width={'100%'} mt={2}>
                {/* <DiscountInfo selectedCampaign={selectedCampaign} /> */}
            </Stack>
            <Stack backgroundColor='white.main' width={'100%'} mt={2} mb={10}>
                {/* <CustomerDetailsTable selectedCampaign={selectedCampaign} /> */}
            </Stack>
        </Stack>
    );
};

export default CampaignRightLayout;
