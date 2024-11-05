import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Stack, Typography } from '@mui/material';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import InvoiceDetails from './InvoiceView/InvoiceDetails';
import { MdOutlineClose } from 'react-icons/md';
import TablePaginate from '../CommonComps/TablePaginate';

const headers = [
    { label: 'Invoice Number', key: 'invoiceNumber' },
    { label: 'Order Number', key: 'orderNumber' },
    { label: 'Customer Name', key: 'name' },
    { label: 'Email', key: 'email' },
    { label: 'Total', key: 'total' },
    { label: 'Payment Method', key: 'paymentMethod' },
    { label: 'Items', key: 'items' },
    { label: 'Date', key: 'date' },
    {
        label: 'More',
        key: 'more',
    },
];

const InvoicePageTable = ({ Invoices }) => {
    const [sortConfig, setSortConfig] = useState({ key: '', direction: '' });
    const [selectedInvoice, setSelectedInvoice] = useState(null);
    const [invoiceOpen, setInvoiceOpen] = useState(false);

    const requestSort = (key) => {
        let direction = 'asc';

        if (sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }

        setSortConfig({ key, direction });
    };

    const sortedInvoices = [...Invoices].sort((a, b) => {
        if (sortConfig.direction === 'asc') {
            if (a[sortConfig.key] < b[sortConfig.key]) return -1;
            if (a[sortConfig.key] > b[sortConfig.key]) return 1;
            return 0;
        }
        if (sortConfig.direction === 'desc') {
            if (a[sortConfig.key] > b[sortConfig.key]) return -1;
            if (a[sortConfig.key] < b[sortConfig.key]) return 1;
            return 0;
        }
        return 0;
    });

    const handleActionClick = (data) => {
        setSelectedInvoice(data);
        setInvoiceOpen(true);
    };

    return (
        <Stack>
            <TableContainer component={Paper} sx={{ borderRadius: '10px', padding: '10px' }}>
                <Table sx={{ minWidth: 650 }} aria-label='Invoices table'>
                    <TableHead>
                        <TableRow>
                            {headers.map((header) => (
                                <TableCell
                                    key={header.label}
                                    align='left'
                                    onClick={() => requestSort(header.key)}
                                    sx={{
                                        cursor: 'pointer',
                                        fontWeight: 'bold',
                                        bgcolor: 'primary.50',
                                    }}
                                >
                                    {header.label}
                                    {sortConfig.key === header.key && (
                                        <span>{sortConfig.direction === 'asc' ? '↑' : '↓'}</span>
                                    )}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {sortedInvoices.map((invoice, index) => (
                            <TableRow key={index}>
                                {headers.map((header) => (
                                    <TableCell key={header.key} align='left'>
                                        {/*{invoice[header.key]}*/}
                                        {header.key === 'email' && invoice.isPrivate ? (
                                            <div className='text-gray-400'>Private</div>
                                        ) : (
                                            invoice[header.key]
                                        )}
                                        {header.key === 'more' && (
                                            <IconButton onClick={() => handleActionClick(invoice)}>
                                                <ArrowForwardIosOutlinedIcon />
                                            </IconButton>
                                        )}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePaginate totalPages={10} />
            <Drawer anchor='right' open={invoiceOpen} onClose={() => setInvoiceOpen(false)}>
                <Box
                    bgcolor={'#FAFAFA'}
                    sx={{
                        width: 1000,
                        p: 2,
                        height: '100vh',
                        borderRadius: '20px 0 20px 0',
                    }}
                >
                    <Stack direction={'row'} alignItems={'center'} justifyContent={'end'}>
                        <IconButton onClick={() => setInvoiceOpen(false)}>
                            <MdOutlineClose color={'#005F40'} />
                        </IconButton>
                    </Stack>
                    <InvoiceDetails Invoice={selectedInvoice} />
                </Box>
            </Drawer>
        </Stack>
    );
};

export default InvoicePageTable;
