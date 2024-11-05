import React from 'react';
import CrmTop from '../components/CRM/CRMTop';
import CrmTable from '../components/CRM/CRMTable';
import customerData from '../data/CustomerData';
import { Stack } from '@mui/material';

const Crm = () => {
    return (
        <div className='p-4'>
            <CrmTop />
            <Stack mt={3} p={2} sx={{ bgcolor: 'white.main', borderRadius: '10px' }}>
                <CrmTable customerData={customerData} />
            </Stack>
        </div>
    );
};

export default Crm;
