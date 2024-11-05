import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Stack, Typography } from '@mui/material';
import TablePaginate from '../CommonComps/TablePaginate';

const headers = [
    { label: 'Invoice Number', key: 'invoiceNumber' },
    // { label: "Order Number", key: "orderNumber" },
    // { label: "Customer", key: "customer" },
    { label: 'Time', key: 'time' },
    { label: 'Products', key: 'products' },
    { label: 'Cost', key: 'cost' },
    { label: 'Payment Type', key: 'paymentType' },
];

const InvoicesTable = ({ Invoices }) => {
    const [sortConfig, setSortConfig] = useState({ key: '', direction: '' });

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

    return (
        <Stack>
            <Typography variant='titleLarge' color='primary.400'>
                Invoices
            </Typography>
            <TableContainer component={Paper} sx={{ borderRadius: '10px', marginTop: 2 }}>
                <Table sx={{ minWidth: 650 }} aria-label='Invoices table'>
                    <TableHead>
                        <TableRow>
                            {headers.map((header) => (
                                <TableCell
                                    key={header.label}
                                    align='center'
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
                                    <TableCell key={header.key} align='center'>
                                        {invoice[header.key]}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Stack>
    );
};

export default InvoicesTable;
