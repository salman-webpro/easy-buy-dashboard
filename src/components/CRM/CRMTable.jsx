import React, { useState } from 'react';
import { Stack } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { FormControlLabel, Switch } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import CustomerDetails from './CustomerDetails/CustomerDetails';
import IconButton from '@mui/material/IconButton';
import { MdOutlineClose } from 'react-icons/md';
import TablePaginate from '../CommonComps/TablePaginate';

const crmHeaders = [
    { label: 'App ID', key: 'appID' },
    { label: 'Name', key: 'name' },
    { label: 'Gender', key: 'gender' },
    { label: 'First Purchase', key: 'firstPurchase' },
    { label: 'Email', key: 'email' },
    { label: 'Location', key: 'location' },
    { label: 'More', key: 'more' },
];
const ITEMS_PER_PAGE = 10; // Number of items per page

const CrmTable = ({ customerData }) => {
    const [sortConfig, setSortConfig] = useState({ key: '', direction: '' });
    const [selectedCustomer, setSelectedCustomer] = useState(null);
    const [customerOpen, setCustomerOpen] = useState(false);
    const [customerDetails, setCustomerDetails] = useState(null);
    const [currentPage, setCurrentPage] = useState(1); // Current page number

    const requestSort = (key) => {
        let direction = 'asc';

        if (sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key, direction });
    };
    // Apply sorting if sortConfig is set
    if (sortConfig.key && sortConfig.direction) {
        customerData = [...customerData].sort((a, b) => {
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
        setCustomerDetails(data);
        setCustomerOpen(true);
    };

    const toggleStatus = async (id, currentStatus) => {
        // Toggle status logic, if needed, similar to  inventory table
    };

    // Calculate pagination range
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const paginatedData = customerData.slice(startIndex, endIndex);

    return (
        <>
            <TableContainer component={Paper} sx={{ borderRadius: '10px' }}>
                <Table sx={{ minWidth: 650 }} aria-label='simple table'>
                    <TableHead>
                        <TableRow>
                            {crmHeaders.map((header) => (
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
                        {customerData.map((row, index) => (
                            <TableRow key={index}>
                                {crmHeaders.map((header) => (
                                    <TableCell key={header.key} align='left'>
                                        {/* Render cell data, similar to  inventory table */}

                                        {header.key === 'appID' && row[header.key]}
                                        {header.key === 'name' && row[header.key]}
                                        {header.key === 'gender' &&
                                            row[header.key].charAt(0).toUpperCase() +
                                                row[header.key].slice(1)}
                                        {header.key === 'firstPurchase' && row[header.key]}
                                        {header.key === 'email' && row[header.key]}
                                        {header.key === 'location' && row[header.key]}
                                        <div
                                            className='text-gray-300 hover:cursor-pointer'
                                            onClick={() => handleActionClick(row)}
                                        >
                                            {header.key === 'more' && (
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
            <Drawer anchor='right' open={customerOpen} onClose={() => setCustomerOpen(false)}>
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
                        <IconButton onClick={() => setCustomerOpen(false)}>
                            <MdOutlineClose color={'#005F40'} />
                        </IconButton>
                    </Stack>
                    <CustomerDetails customerDetails={customerDetails} />
                </Box>
            </Drawer>
        </>
    );
};

export default CrmTable;
