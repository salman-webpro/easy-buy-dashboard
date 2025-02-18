import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import data from '../../data/Category';
import { FormControlLabel, Switch } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import CategoryAdd from './CategoryAdd';
import { useNavigate } from 'react-router-dom';
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import TablePaginate from '../CommonComps/TablePaginate';
import CustomSwitch from '../CommonComps/CustomSwitch';

const headers = [
    { label: 'Name', key: 'name' },
    { label: 'Parent Category', key: 'parent_category' },
    {
        label: 'Description',
        key: 'description',
    },
    {
        label: 'count',
        key: 'count',
    },
    { label: 'Status', key: 'status' },

    { label: 'Action', key: 'action' },
];

export default function CategoryTable({ selectedCategory, selectLowStock }) {
    const [sortConfig, setSortConfig] = useState({ key: '', direction: '' });
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [productOpen, setProductOpen] = useState(false);
    const [productData, setProductData] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(10);
    const navigate = useNavigate();
    const [switchValue, setSwitchValue] = useState();

    let sortedData = data;

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };
    if (selectedCategory === 'All Category' && selectLowStock !== 'Low Stock') {
        // No category filter and no low stock filter, so keep all data
        sortedData = data;
    } else {
        sortedData = selectedCategory
            ? data.filter((item) => item.parent_category === selectedCategory)
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

    //
    const [isAddDrawerOpen, setIsAddDrawerOpen] = useState(false); // State for the right drawer
    const [category, setCategory] = useState(null);
    // Function to toggle the right drawer
    const toggleAddDrawer = (data) => {
        setIsAddDrawerOpen(!isAddDrawerOpen);
        setCategory(data);
        console.log(data);
        // setProductOpen(false);
    };

    const handleRoute = (data) => {
        console.log(data);
        navigate('/easy-buy-dashboard/category-product/' + data.parent_category);
    };

    return (
        <>
            <TableContainer component={Paper} sx={{ borderRadius: '10px' }}>
                <Table sx={{ minWidth: 650 }} aria-label='simple table'>
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
                                        {/* onClick={() => handleRoute(row)}   */}
                                        <div
                                            onClick={() => handleRoute(row)}
                                            className='hover:cursor-pointer'
                                        >
                                            {header.key === 'name' && row[header.key]}
                                        </div>
                                        <div
                                            onClick={() => handleRoute(row)}
                                            className='hover:cursor-pointer'
                                        >
                                            {header.key === 'parent_category' && row[header.key]}
                                        </div>
                                        <div
                                            onClick={() => handleRoute(row)}
                                            className='hover:cursor-pointer'
                                        >
                                            {header.key === 'description'
                                                ? row[header.key].length > 20
                                                    ? row[header.key].slice(0, 20) + '...'
                                                    : row[header.key]
                                                : null}
                                        </div>
                                        <div
                                            onClick={() => handleRoute(row)}
                                            className='hover:cursor-pointer'
                                        >
                                            {header.key === 'count' && row.products.length}
                                        </div>
                                        {header.key === 'status' ? (
                                            <CustomSwitch
                                                switchValue={row[header.key] === 'Available'}
                                                setSwitchValue={setSwitchValue}
                                            />
                                        ) : null}
                                        {/*{header.key === 'status' ? (*/}
                                        {/*    <FormControlLabel*/}
                                        {/*        control={*/}
                                        {/*            <Switch*/}
                                        {/*                checked={row[header.key] === 'Available'}*/}
                                        {/*                color='primary'*/}
                                        {/*                onClick={() =>*/}
                                        {/*                    toggleStatus(row.sku, row[header.key])*/}
                                        {/*                }*/}
                                        {/*            />*/}
                                        {/*        }*/}
                                        {/*    />*/}
                                        {/*) : null}*/}
                                        {header.key === 'action' ? (
                                            <div>
                                                <span
                                                    className='cursor-pointer underline text-xl me-1 text-[#36765C]' // Adjust the size using text classes (e.g., text-sm, text-md, text-lg, text-xl, etc.)
                                                    onClick={() => toggleAddDrawer(row)}
                                                >
                                                    <DriveFileRenameOutlineOutlinedIcon />
                                                </span>
                                                <span
                                                    className='cursor-pointer underline text-xl text-[#FA6767]' // Adjust the size using text classes
                                                    onClick={() => console.log('de')}
                                                >
                                                    <DeleteOutlinedIcon />
                                                </span>
                                            </div>
                                        ) : null}
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
            <Drawer anchor={'right'} open={isAddDrawerOpen} onClose={toggleAddDrawer}>
                <CategoryAdd category={category} setCategory={setCategory} />
            </Drawer>
        </>
    );
}
