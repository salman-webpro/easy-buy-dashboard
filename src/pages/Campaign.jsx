import React, { useState } from 'react';
import { Stack, Drawer, Box } from '@mui/material';
import campaigns from '../data/Campaign';
import CampaignLeftLayout from '../components/CampaignCompos/CampaignLeftLayout';
import CampaignRightLayout from '../components/CampaignCompos/CampaignRightLayout';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import IconButton from '@mui/material/IconButton';
import AddCampaign from '../components/CampaignCompos/AddCampaign';

const Campaign = () => {
    const [selectedCampaign, setSelectedCampaign] = useState(null);
    const [isAddDrawerOpen, setIsAddDrawerOpen] = useState(false); // State for the right drawer
    const [campaignData, setCampaignData] = useState();

    // Function to toggle the right drawer
    const toggleAddDrawer = (data) => {
        setIsAddDrawerOpen(!isAddDrawerOpen);
        setCampaignData(data);
    };

    return (
        <Stack direction='row'>
            <Stack
                width='350px'
                sx={{
                    overflowY: 'auto',
                    maxHeight: '93vh',
                }}
            >
                <CampaignLeftLayout
                    campaigns={campaigns} // Pass your campaign data here
                    setSelectedCampaign={setSelectedCampaign}
                    selectedCampaign={selectedCampaign}
                />
            </Stack>
            <Stack
                width='100%'
                sx={{
                    overflowY: 'clip',
                    maxHeight: '93vh',
                }}
            >
                <CampaignRightLayout selectedCampaign={selectedCampaign} />
            </Stack>
            <Stack
                sx={{
                    position: 'absolute',
                    bottom: '16px',
                    right: '16px',
                }}
            >
                <IconButton
                    onClick={() => toggleAddDrawer(campaignData)}
                    variant='contained'
                    sx={{
                        width: '55px',
                        height: '55px',
                        borderRadius: '50%',
                        backgroundColor: 'primary.500',
                        color: 'white.main',
                        ':hover': {
                            backgroundColor: 'primary.800',
                            color: 'white.main',
                        },
                    }}
                >
                    <AddOutlinedIcon />
                </IconButton>
            </Stack>
            <Drawer anchor={'right'} open={isAddDrawerOpen} onClose={toggleAddDrawer}>
                <Box width={'483px'}>
                    <AddCampaign toggleAddDrawer={toggleAddDrawer} />
                </Box>
            </Drawer>
        </Stack>
    );
};

export default Campaign;
