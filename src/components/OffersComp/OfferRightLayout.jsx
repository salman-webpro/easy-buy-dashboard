import React, { useState } from 'react';
import { Stack } from '@mui/material';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import DealsBox from '../common/DealsBox';
import DealsDialog from '../common/DealsDialog';
import { MdAdd } from 'react-icons/md';
import IconButton from '@mui/material/IconButton';
import AddStaff from '../Staffs/AddStaff';
import AddOffer from './AddOffer';
import OfferTop from './RightLayoutComp/OfferTop';
import OfferAnalytics from './RightLayoutComp/OfferAnalytics';
import OfferDetails from './RightLayoutComp/OfferDetails';
import ProductsInfo from './RightLayoutComp/ProductsInfo';
import CustomerInfo from './RightLayoutComp/CustomerInfo';
const OfferRightLayout = ({ selectedOffer }) => {
    const [isAddDrawerOpen, setIsAddDrawerOpen] = useState(false); // State for the right drawer
    const [offerData, setOfferData] = useState();
    const [dealsOpen, setDealsOpen] = useState(false);
    const handleDealsOpen = () => {
        setDealsOpen(true);
    };
    const handleDealsClose = () => {
        setDealsOpen(false);
    };
    // Function to toggle the right drawer
    const toggleAddDrawer = (data) => {
        setIsAddDrawerOpen(!isAddDrawerOpen);
        setOfferData(data);
        console.log(data);
        // setProductOpen(false);
    };
    return (
        <Stack
            fullWidth
            sx={{
                height: '100%',
                padding: '24px',
                backgroundColor: 'background.main',
                position: 'relative',
            }}
        >
            {/* Main Stack */}
            <Stack backgroundColor='white.main' width={'100%'} sx={{ borderRadius: '10px' }}>
                <OfferTop selectedOffer={selectedOffer} />
            </Stack>
            <Stack backgroundColor='white.main' width={'100%'} mt={2} sx={{ borderRadius: '10px' }}>
                <OfferAnalytics selectedOffer={selectedOffer} />
            </Stack>
            <Stack backgroundColor='white.main' width={'100%'} mt={2} sx={{ borderRadius: '10px' }}>
                {/*<FeaturedDeal selectedOffer={selectedOffer} />*/}
                <DealsBox handleDealsOpen={handleDealsOpen} />
                <DealsDialog dealsOpen={dealsOpen} handleDealsClose={handleDealsClose} />
            </Stack>
            <Stack width={'100%'} mt={2} sx={{ borderRadius: '10px' }}>
                <OfferDetails selectedOffer={selectedOffer} />
            </Stack>
            <Stack width={'100%'} mt={2} sx={{ borderRadius: '10px' }}>
                <ProductsInfo selectedOffer={selectedOffer} />
            </Stack>
            <Stack width={'100%'} mt={2} sx={{ borderRadius: '10px' }}>
                <CustomerInfo selectedOffer={selectedOffer} />
            </Stack>
            <Stack
                sx={{
                    position: 'fixed',
                    bottom: '24px',
                    right: '24px',
                    borderRadius: '50px',
                }}
            >
                <IconButton
                    onClick={() => toggleAddDrawer(offerData)}
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
                    <MdAdd />
                </IconButton>
            </Stack>
            {/*  Drawer */}
            <Drawer anchor={'right'} open={isAddDrawerOpen} onClose={toggleAddDrawer}>
                <Box width={'483px'}>
                    {/*<AddStaff />*/}
                    <AddOffer toggleAddDrawer={toggleAddDrawer} />
                </Box>
            </Drawer>
        </Stack>
    );
};

export default OfferRightLayout;
