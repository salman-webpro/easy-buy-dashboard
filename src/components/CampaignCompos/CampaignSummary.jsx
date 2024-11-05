import React, { useState } from 'react';
import {
    Stack,
    Avatar,
    Typography,
    Button,
    Divider,
    Drawer,
    Box,
    IconButton,
    Grid,
} from '@mui/material';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import CountdownTimer from './CountdownTimer';
const CampaignSummary = ({ selectedCampaign }) => {
    const [isEditDrawerOpen, setIsEditDrawerOpen] = useState(false);

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
            {/*<Grid item sm={6}>*/}
            {/*    <CountdownTimer endDate='2023-12-12T00:00:00' />*/}
            {/*</Grid>*/}
        </Stack>
    );
};

export default CampaignSummary;
