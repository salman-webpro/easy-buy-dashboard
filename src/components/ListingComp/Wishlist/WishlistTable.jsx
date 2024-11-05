import React, { useState } from 'react';
import { Stack } from '@mui/material';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import CustomerDetails from '../../CRM/CustomerDetails/CustomerDetails';

import IconButton from '@mui/material/IconButton';
import { MdOutlineClose } from 'react-icons/md';
import TablePaginate from '../../CommonComps/TablePaginate';
import WishListDetails from './WishListDetails';

const WishlistHeaders = [
    { label: 'User ID', key: 'userID' },
    { label: 'Total Spend', key: 'totalSpent' },
    { label: 'User Name', key: 'name' },
    { label: 'Item Count', key: 'ItemCount' },
    { label: 'Total Price', key: 'totalValue' },
    { label: 'Date', key: 'date' },
    { label: 'View Details', key: 'viewDetails' },
];

const WishlistTable = ({ ListingsData }) => {
    const [sortConfig, setSortConfig] = useState({ key: '', direction: '' });
    const [selectedCustomer, setSelectedCustomer] = useState(null);
    const [listingOpen, setListingOpen] = useState(false);
    const [listingDetails, setListingDetails] = useState(null);
    const requestSort = (key) => {
        let direction = 'asc';

        if (sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key, direction });
    };
    if (sortConfig.key && sortConfig.direction) {
        ListingsData = [...ListingsData].sort((a, b) => {
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
    }
    const handleActionClick = (data) => {
        setListingDetails(data);
        setListingOpen(true);
    };
    return (
        <>
            <TableContainer
                component={Paper}
                sx={{ borderRadius: '10px', padding: '0px' }}
                elevation={1}
            >
                <Table sx={{ minWidth: 650 }} aria-label='simple table'>
                    <TableHead>
                        <TableRow>
                            {WishlistHeaders.map((header) => (
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
                        {ListingsData.map((row, index) => (
                            <TableRow key={index}>
                                {WishlistHeaders.map((header) => (
                                    <TableCell
                                        key={header.key}
                                        align='left'
                                        sx={{
                                            typography: 'bodyLarge',
                                            color: 'primary.900',
                                            lineHeight: '3rem',
                                        }}
                                    >
                                        {/* Render cell data, similar to  inventory table */}
                                        {header.key === 'userID' && row[header.key]}
                                        {header.key === 'totalSpent' && row[header.key]}
                                        {header.key === 'name' && row[header.key]}
                                        {header.key === 'ItemCount' && row[header.key]}
                                        {header.key === 'totalValue' && row[header.key]}
                                        {header.key === 'date' && row[header.key]}
                                        <div
                                            className='text-gray-300 hover:cursor-pointer'
                                            onClick={() => handleActionClick(row)}
                                        >
                                            {header.key === 'viewDetails' && (
                                                <ArrowForwardIosOutlinedIcon />
                                            )}
                                        </div>
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePaginate totalPages={10} />

            <Drawer
                anchor='right'
                open={listingOpen}
                onClose={() => setListingOpen(false)}
                sx={{
                    '& .MuiDrawer-paper': {
                        borderRadius: '20px 0 0 0',
                    },
                }}
            >
                <Box
                    bgcolor={'#FAFAFA'}
                    sx={{
                        width: 1000,
                        p: 2,
                        height: '100vh',
                        borderRadius: '20px 0 20px 0',
                        backgroundColor: '#FAFAFA',
                    }}
                >
                    <Stack direction={'row'} alignItems={'center'} justifyContent={'end'}>
                        <IconButton onClick={() => setListingOpen(false)}>
                            <MdOutlineClose color={'#005F40'} />
                        </IconButton>
                    </Stack>
                    <WishListDetails
                        listingDetails={listingDetails}
                        setListingOpen={setListingOpen}
                    />
                </Box>
            </Drawer>
        </>
    );
};
export default WishlistTable;
