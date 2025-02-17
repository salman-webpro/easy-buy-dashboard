// CouInvTable.jsx
import React, { useState } from 'react';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';

import { Stack, Typography } from '@mui/material';

const headers = [
    { label: 'Product Name', key: 'itemName' },
    { label: 'Price', key: 'rate' },
    { label: 'Quantity', key: 'quantity' },
    { label: 'Discount', key: 'discountPercent' },
    { label: 'Discount Amount', key: 'discountAmount' },
    { label: 'Sub Total', key: 'subTotal' },
];
const CouInvTable = ({ Inv }) => {
    let Invoice = Inv?.items || [];

    const [sortConfig, setSortConfig] = useState({ key: '', direction: '' });

    const requestSort = (key) => {
        let direction = 'asc';

        if (sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }

        setSortConfig({ key, direction });
    };

    const sortedInvoices = [...Invoice].sort((a, b) => {
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
        <Stack mt={2}>
            <TableContainer sx={{ borderRadius: '10px' }} elavation={0}>
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
                                    <TableCell
                                        key={header.key}
                                        align='left'
                                        sx={{ borderBottom: 'none' }}
                                    >
                                        {/*{invoice[header.key]}*/}
                                        {header.key === 'itemName' && (
                                            <div className='flex items-center gap-2'>
                                                <img src={invoice.image} /> {invoice[header.key]}
                                            </div>
                                        )}
                                        {header.key === 'rate' && invoice[header.key]}
                                        {header.key === 'quantity' && invoice[header.key]}
                                        {header.key === 'discountPercent' &&
                                            `${invoice[header.key]}%`}
                                        {header.key === 'discountAmount' &&
                                            `$${invoice[header.key]}`}
                                        {header.key === 'subTotal' && `$${invoice[header.key]}`}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Stack
                direction={'row'}
                alignItems={'center'}
                justifyContent={'space-between'}
                p={2}
                sx={{ borderTop: '1px solid #ccc' }}
            >
                <Typography>Payment</Typography>

                <Typography marginRight={7}>Total Due</Typography>
            </Stack>
            <Stack p={2} sx={{ borderTop: '1px solid #ccc' }}>
                <Stack direction='row' justifyContent='space-between' alignItems={'center'}>
                    <Stack>
                        <Typography color={'primary.100'}>{Inv.cardNumber} </Typography>

                        <Typography mt={1}>{Inv.paymentMethod}</Typography>

                        {Invoice?.promoCode !== 'undefined' && (
                            <Stack
                                direction='row'
                                alignItems='center'
                                bgcolor='#FAFAFA'
                                p={1}
                                gap={2}
                                borderRadius={2}
                                color='primary.500'
                                mt={1}
                            >
                                <Typography bgcolor='#FFF' borderRadius={2.5} p={0.5}>
                                    {Inv?.promoCode}
                                </Typography>

                                <Typography>
                                    Promo Code Applied{' '}
                                    <span color='#000'>{Inv?.promoPercent}%</span>
                                </Typography>
                            </Stack>
                        )}
                    </Stack>
                    {/* TODO: BUG */}
                    <Stack marginRight={7}>
                        <Typography
                            variant={'headlineMedium'}
                            color={'primary.100'}
                            marginLeft={57}
                        >
                            ${Inv?.total}
                        </Typography>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    );
};

export default CouInvTable;
