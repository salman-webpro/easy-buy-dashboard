import React, { useState } from 'react';
import { Stack } from '@mui/material';
import OfferData from '../data/OffersData';
import OfferLeftLayout from '../components/OffersComp/OfferLeftLayout';
import OfferRightLayout from '../components/OffersComp/OfferRightLayout';

const Offers = () => {
    const [selectedOffer, setSelectedOffer] = useState(null);
    return (
        <Stack direction='row'>
            <Stack
                width='350px'
                sx={{
                    overflowY: 'auto', // Enable vertical scrolling
                    maxHeight: '93vh', // Set a maximum height
                }}
            >
                <OfferLeftLayout
                    OfferData={OfferData}
                    setSelectedOffer={setSelectedOffer}
                    selectedOffer={selectedOffer}
                />
            </Stack>
            <Stack width='100%'>
                <OfferRightLayout selectedOffer={selectedOffer} />
            </Stack>
        </Stack>
    );
};
export default Offers;
