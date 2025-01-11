import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import billingData from '../../data/billingdata';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import Pagination from '../CommonComps/TablePaginate';
import TablePaginate from '../CommonComps/TablePaginate';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#E3FFF3',
        color: '#004C33',
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));
export default function DataTable({ data, headers }) {
    const [sortConfig, setSortConfig] = useState({ key: '', direction: '' });
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [productOpen, setProductOpen] = useState(false);
    const [productData, setProductData] = useState(null);

    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(10);
    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };
    let sortedData = data;
    // Apply sorting if sortConfig is set
    // if (sortConfig.key && sortConfig.direction) {
    //     sortedData = [...sortedData].sort((a, b) => {
    //         if (sortConfig.direction === 'asc') {
    //             if (a[sortConfig.key] < b[sortConfig.key]) return -1;
    //             if (a[sortConfig.key] > b[sortConfig.key]) return 1;
    //             return 0;
    //         }
    //         if (sortConfig.direction === 'desc') {
    //             if (a[sortConfig.key] > b[sortConfig.key]) return -1;
    //             if (a[sortConfig.key] < b[sortConfig.key]) return 1;
    //             return 0;
    //         }
    //         return 0;
    //     });
    // }
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
    };

    return (
        <>
            <TableContainer component={Paper} sx={{ borderRadius: '10px' }}>
                <Table sx={{ minWidth: 650, overflowY: 'scroll' }} aria-label='simple table'>
                    <TableHead>
                        <TableRow>
                            {headers.map((header) => (
                                <StyledTableCell
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
                                </StyledTableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {sortedData.map((row, index) => (
                            <StyledTableRow key={index}>
                                {headers.map((header) => (
                                    <>
                                        <StyledTableCell key={header.key} align='center'>
                                            {header.key === 'name' && row[header.key]}
                                            {header.key === 'id' && row[header.key]}
                                            {header.key === 'email' && row[header.key]}
                                            {header.key === 'total' && row[header.key]}
                                        </StyledTableCell>
                                    </>
                                ))}
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePaginate
                totalPages={totalPages}
                currentPage={currentPage}
                handlePageChange={handlePageChange}
            />
            {/*<Drawer anchor='right' open={productOpen} onClose={() => setProductOpen(false)}>*/}
            {/*    <Box*/}
            {/*        sx={{*/}
            {/*            width: 1000,*/}
            {/*            p: 2,*/}
            {/*            height: '100vh',*/}
            {/*            borderRadius: '20px 0 20px 0',*/}
            {/*        }}*/}
            {/*    >*/}
            {/*        <Typography>Product Details</Typography>*/}
            {/*        <ProductView product={productData} setProductOpen={setProductOpen} />*/}
            {/*    </Box>*/}
            {/*</Drawer>*/}
        </>
    );
}
