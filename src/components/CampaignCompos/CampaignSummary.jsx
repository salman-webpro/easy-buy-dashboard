import React, { useState } from 'react';
import { Stack, Typography } from '@mui/material';
const CampaignSummary = ({ selectedCampaign }) => {
    return (
        <Stack>
            <Stack>
                <Stack>
                    <Typography variant='headlineLarge'>
                        {selectedCampaign?.campaignName}
                    </Typography>
                    <Typography
                        variant='bodySmall'
                        mt={1}
                    >{`Discount: ${selectedCampaign?.discount}%`}</Typography>
                    <Typography
                        variant='bodySmall'
                        mt={1}
                    >{`Item Count: ${selectedCampaign?.itemCount}`}</Typography>
                    <Typography
                        variant='bodySmall'
                        mt={1}
                    >{`Duration: ${selectedCampaign?.startDate} - ${selectedCampaign?.endDate}`}</Typography>
                </Stack>
            </Stack>
        </Stack>
    );
};

export default CampaignSummary;
