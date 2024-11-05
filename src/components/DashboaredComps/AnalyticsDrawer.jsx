import React from 'react';
import { Stack } from '@mui/material';
import HighDemandProducts from './AnalyticsCharts/HighDemandProducts';
import MissedOpportunity from './AnalyticsCharts/MissedOpportunity';
import ProfitLoss from './AnalyticsCharts/ProfitLoss';

const AnalyticsDrawer = () => {
    return (
        <>
            <Stack
                sx={{ backgroundColor: 'white.main', borderRadius: '15px' }}
                margin={3}
                padding={2}
            >
                <HighDemandProducts />
            </Stack>
            <Stack
                sx={{ backgroundColor: 'white.main', borderRadius: '15px' }}
                margin={3}
                padding={2}
            >
                <MissedOpportunity />
            </Stack>

            <Stack
                sx={{ backgroundColor: 'white.main', borderRadius: '15px' }}
                margin={3}
                padding={2}
            >
                <ProfitLoss />
            </Stack>
        </>
    );
};
export default AnalyticsDrawer;
