import { useState } from 'react';
import { Stack } from '@mui/material';
import CouponsTop from './CouponsTop';
import CouponsDetails from './CouponsDetails';
import DiscountInfo from './DiscountInfo';
import CustomerDetailsTable from './CustomerDetailsTable';

const CouponsRightLayout = ({ selectedCoupon }) => {
    const [isAddDrawerOpen, setIsAddDrawerOpen] = useState(false); // State for the right drawer
    const [couponData, setCouponData] = useState();
    // Function to toggle the right drawer
    const toggleAddDrawer = (data) => {
        setIsAddDrawerOpen(!isAddDrawerOpen);
        setCouponData(data);
        console.log(data);
        // setProductOpen(false);
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
            {/* Main Stack */}
            <Stack backgroundColor='white.main' width={'100%'}>
                {/* <StaffTop selectedCoupon={selectedCoupon} /> */}
                <CouponsTop selectedCoupon={selectedCoupon} />
            </Stack>
            <Stack backgroundColor='white.main' width={'100%'} mt={2}>
                {/* <PersonalDetails selectedCoupon={selectedCoupon} /> */}
                <CouponsDetails selectedCoupon={selectedCoupon} />
            </Stack>
            <Stack backgroundColor='white.main' width={'100%'} mt={2}>
                {/* <AddressDetails selectedCoupon={selectedCoupon} /> */}
                <DiscountInfo selectedCoupon={selectedCoupon} />
            </Stack>
            <Stack backgroundColor='white.main' width={'100%'} mt={2} mb={10}>
                {/* <AddressDetails selectedCoupon={selectedCoupon} /> */}
                <CustomerDetailsTable selectedCoupon={selectedCoupon} />
            </Stack>
        </Stack>
    );
};

export default CouponsRightLayout;
