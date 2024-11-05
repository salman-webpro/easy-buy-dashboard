import React, { useState } from 'react';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import { Avatar, Stack, Typography, Drawer, Box } from '@mui/material';
import InvoiceDetails from '../InvoicesComps/InvoiceView/InvoiceDetails';
import CouponsDetails from './CouponsDetails';
import CouponsPurchase from './CouponsPurchase';
import IconButton from '@mui/material/IconButton';
import { MdOutlineClose } from 'react-icons/md';

const headers = [
    { label: 'Name', key: 'name' },
    { label: 'Purchase Amount', key: 'amount' },
    { label: 'Items', key: 'purchase' }, // Change the key to 'purchase' for sorting
];

const CustomerDetailsTable = ({ selectedCoupon }) => {
    const [isAddDrawerOpen, setIsAddDrawerOpen] = useState(false); // State for the right drawer
    const [purchase, setPurchaseData] = useState();
    // Function to toggle the right drawer
    const toggleAddDrawer = (data) => {
        setIsAddDrawerOpen(!isAddDrawerOpen);
        setPurchaseData(data);
        console.log(data.items);
    };
    const customerData = selectedCoupon?.customers || [];

    const [sortConfig, setSortConfig] = useState({ key: '', direction: '' });

    const requestSort = (key) => {
        let direction = 'asc';

        if (sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }

        setSortConfig({ key, direction });
    };

    // Create a copy of the customer data to avoid mutating the original data
    let sortedData = [...customerData];

    // Sort the data based on the selected key and direction
    sortedData.sort((a, b) => {
        if (sortConfig.direction === 'asc') {
            return a[sortConfig.key] - b[sortConfig.key];
        } else {
            return b[sortConfig.key] - a[sortConfig.key];
        }
    });

    return (
        <Stack>
            <TableContainer sx={{ borderRadius: '10px' }} elevation={0}>
                <Table sx={{ minWidth: 650 }} aria-label='Customer details table'>
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
                        {sortedData.map((customer, index) => (
                            <TableRow key={index}>
                                {headers.map((header) => (
                                    <TableCell key={header.key} align='left'>
                                        {header.key === 'name' && (
                                            <Stack direction='row' alignItems={'center'} gap={1}>
                                                <Avatar src={customer.image} />
                                                {customer[header.key]}
                                            </Stack>
                                        )}
                                        {header.key === 'amount' && customer[header.key]}
                                        {header.key === 'purchase' && (
                                            <Stack
                                                onClick={() => toggleAddDrawer(customer)}
                                                sx={{
                                                    cursor: 'pointer',
                                                }}
                                            >
                                                {customer[header.key]}
                                            </Stack>
                                        )}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            {/*  Drawer */}
            <Drawer anchor={'right'} open={isAddDrawerOpen} onClose={toggleAddDrawer}>
                <Box width={'1000px'} p={2}>
                    <Stack direction={'row'} alignItems={'center'} justifyContent={'end'}>
                        <IconButton onClick={toggleAddDrawer}>
                            <MdOutlineClose color={'#005F40'} />
                        </IconButton>
                    </Stack>
                    <CouponsPurchase Invoice={purchase} />
                </Box>
            </Drawer>
        </Stack>
    );
};

export default CustomerDetailsTable;
