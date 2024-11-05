import React from 'react';
import { Avatar, Stack, Tab, Tabs } from '@mui/material';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import CustomerTop from './CustomerTop';
import TabTable from './TabTable';

const CustomerDetails = ({ customerDetails }) => {
    return (
        <Stack bgcolor={'#FAFAFA'} p={2}>
            <CustomerTop customerDetails={customerDetails} />

            <TabTable customerDetails={customerDetails} />
        </Stack>
    );
};

export default CustomerDetails;
