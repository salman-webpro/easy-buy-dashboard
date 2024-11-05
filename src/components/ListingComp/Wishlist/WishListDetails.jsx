import React from 'react';
import { Stack } from '@mui/material';
import WishlistTop from './WishlistTop';
import WishlistItems from './WishlistItems';

const WishListDetails = ({ listingDetails, setListingOpen }) => {
    return (
        <Stack>
            <WishlistTop ListingsData={listingDetails} setListingOpen={setListingOpen} />
            <WishlistItems ListingsData={listingDetails} />
        </Stack>
    );
};
export default WishListDetails;
