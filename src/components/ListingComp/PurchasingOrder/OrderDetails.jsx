import React from 'react';
import { Stack } from '@mui/material';
import OrderListTop from './OrderListTop';
import OrderListItems from './OrderListItems';

const OrderDetails = ({ orderDetailsData }) => {
    return (
        <Stack>
            <OrderListTop orderDetailsData={orderDetailsData} />
            <OrderListItems orderDetailsData={orderDetailsData} />
        </Stack>
    );
};
export default OrderDetails;
