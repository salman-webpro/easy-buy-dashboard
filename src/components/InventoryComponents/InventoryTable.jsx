import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import data from '../../data/Product';
import { FormControlLabel, Stack, Switch } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ProductView from './ProductComponents/ProductView';
import Pagination from '../CommonComps/TablePaginate';
import TablePaginate from '../CommonComps/TablePaginate';
import CustomSwitch from '../CommonComps/CustomSwitch';
import { MdArrowForwardIos } from 'react-icons/md';
import IconButton from '@mui/material/IconButton';
import { MdOutlineClose } from 'react-icons/md';

const headers = [
    { label: 'Name', key: 'name' },
    { label: 'Stock', key: 'stock' },
    { label: 'Category', key: 'category' },
    { label: 'Aisle Number', key: 'aisleNumber' },
    { label: 'SKU', key: 'sku' },
    { label: 'Barcode Number', key: 'barcodeNumber' },
    { label: 'Price', key: 'price' },
    { label: 'Status', key: 'status' },
    { label: 'Last Modified', key: 'lastModified' },
    { label: 'Action', key: 'action' },
];

export default function InventoryTable({ selectedCategory, selectLowStock }) {
    const [sortConfig, setSortConfig] = useState({ key: '', direction: '' });
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [productOpen, setProductOpen] = useState(false);
    const [productData, setProductData] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(10);
    const [switchValue, setSwitchValue] = useState();
    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };
    let sortedData = data;
    if (selectedCategory === 'All Category' && selectLowStock !== 'Low Stock') {
        // No category filter and no low stock filter, so keep all data
        sortedData = data;
    } else {
        sortedData = selectedCategory
            ? data.filter((item) => item.category === selectedCategory)
            : data;

        if (selectLowStock === 'Low Stock') {
            sortedData = data.filter((item) => item.stock < 10);
        }
    }

    // Apply sorting if sortConfig is set
    if (sortConfig.key && sortConfig.direction) {
        sortedData = [...sortedData].sort((a, b) => {
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
    const requestSort = (key) => {
        let direction = 'asc';

        if (sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key, direction });
    };
    const handleActionClick = (data) => {
        setProductData(data);
        setProductOpen(true); // Open the drawer
    };
    const toggleStatus = async (id, currentStatus) => {
        console.log('toggle Status', id, currentStatus);
        // try {
        //     const newStatus = currentStatus === 'available' ? 'unavailable' : 'available';
        //
        //     await axios.patch(`/api/items/${id}`, { status: newStatus });
        //
        //     const updatedData = data.map(item => {
        //         if (item.id === id) {
        //             return { ...item, status: newStatus };
        //         }
        //         return item;
        //     });
        // } catch (error) {
        //     console.error('Error toggling status:', error);
        // }
    };

    return (
        <>
            <TableContainer component={Paper} sx={{ borderRadius: '10px' }}>
                <Table sx={{ minWidth: 650, overflowY: 'scroll' }} aria-label='simple table'>
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
                        {sortedData.map((row, index) => (
                            <TableRow key={index}>
                                {headers.map((header) => (
                                    <TableCell key={header.key} align='center'>
                                        {header.key === 'name' && row[header.key]}
                                        {header.key === 'stock' &&
                                        row[header.key] < 10 &&
                                        row[header.key] > 0 ? (
                                            <span style={{ color: '#FF8282' }}>
                                                Low Stock ({row[header.key]})
                                            </span>
                                        ) : null}
                                        {header.key === 'category' && row[header.key]}
                                        {header.key === 'aisleNumber' && row[header.key]}
                                        {header.key === 'sku' && row[header.key]}

                                        {header.key === 'barcodeNumber' && row[header.key]}
                                        {header.key === 'stock' && row[header.key] >= 10 ? (
                                            <span style={{ color: 'green' }}>
                                                In Stock ({row[header.key]})
                                            </span>
                                        ) : null}
                                        {header.key === 'stock' && row[header.key] === 0 ? (
                                            <span style={{ color: 'red' }}>
                                                Out of Stock ({row[header.key]})
                                            </span>
                                        ) : null}
                                        {header.key === 'stock' && row[header.key] < 0 ? (
                                            <span style={{ color: '#353535' }}>
                                                Dead Stock ({row[header.key]})
                                            </span>
                                        ) : null}
                                        {header.key === 'lastModified' && row[header.key]}
                                        {header.key === 'price' ? (
                                            <span style={{ color: 'green' }}>
                                                {`$${row[header.key]}`}
                                            </span>
                                        ) : null}

                                        {header.key === 'status' ? (
                                            <CustomSwitch
                                                switchValue={row[header.key]}
                                                setSwitchValue={setSwitchValue}
                                            />
                                        ) : null}

                                        {header.key === 'action' ? ( // Check for "Action" column
                                            <IconButton>
                                                <MdArrowForwardIos
                                                    color={'#D9D9D9'}
                                                    onClick={() => handleActionClick(row)}
                                                />
                                            </IconButton>
                                        ) : // <span
                                        //     style={{
                                        //         cursor: 'pointer',
                                        //         textDecoration: 'underline',
                                        //     }}
                                        //     onClick={() => handleActionClick(row)}
                                        // >
                                        //     <MdArrowForwardIos />
                                        // </span>
                                        null}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePaginate
                totalPages={totalPages}
                currentPage={currentPage}
                handlePageChange={handlePageChange}
            />
            <Drawer anchor='right' open={productOpen} onClose={() => setProductOpen(false)}>
                <Box
                    sx={{
                        width: 1000,
                        p: 2,
                        height: '100vh',
                        borderRadius: '20px 0 20px 0',
                    }}
                >
                    <Stack direction={'row'} alignItems={'center'} justifyContent={'end'}>
                        <IconButton onClick={() => setProductOpen(false)}>
                            <MdOutlineClose color={'#005F40'} />
                        </IconButton>
                    </Stack>
                    <ProductView product={productData} setProductOpen={setProductOpen} />
                </Box>
            </Drawer>
        </>
    );
}
