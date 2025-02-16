import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Stack, Typography } from '@mui/material';

const headers = [
    { label: 'Position', key: 'position' },
    { label: 'Category', key: 'category' },
    { label: 'Item Name', key: 'itemName' },

    { label: 'Price', key: 'price' },
    { label: 'Purchase Amount', key: 'purchaseAmount' },
];

const MostPurchasedTable = ({ MostPurchases }) => {
    const [sortConfig, setSortConfig] = useState({ key: '', direction: '' });

    const requestSort = (key) => {
        let direction = 'asc';

        if (sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }

        setSortConfig({ key, direction });
    };

    const sortedMostPurchases = [...MostPurchases].sort((a, b) => {
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
            <Typography variant='titleLarge' color='primary.500'>
                Most Purchased Item
            </Typography>
            <TableContainer component={Paper} sx={{ borderRadius: '10px', marginTop: 2 }}>
                <Table sx={{ minWidth: 650 }} aria-label='most purchased item table'>
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
                        {sortedMostPurchases.map((item, index) => (
                            <TableRow key={index}>
                                {headers.map((header) => (
                                    <TableCell key={header.key} align='center'>
                                        {header.key === 'position'
                                            ? `#${item[header.key]}`
                                            : item[header.key]}
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

export default MostPurchasedTable;
