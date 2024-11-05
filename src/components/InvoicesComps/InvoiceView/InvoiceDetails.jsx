import React from 'react';
import { Stack, Typography } from '@mui/material';
import PrintOutlinedIcon from '@mui/icons-material/PrintOutlined';
import IconButton from '@mui/material/IconButton';
import InvoiceTop from './InvoiceTop';
import InvDetailsTable from './InvDetailsTable';

const InvoiceDetails = ({ Invoice }) => {
    // const products = Invoice.products;
    return (
        <div className='bg-white px-4 py-2 rounded-[10px] shadow-md mt-4'>
            <InvoiceTop Invoice={Invoice} />
            <InvDetailsTable Invoices={Invoice} />
        </div>
    );
};

export default InvoiceDetails;
