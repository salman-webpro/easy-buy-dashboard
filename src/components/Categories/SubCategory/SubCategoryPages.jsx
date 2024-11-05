import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FormControlLabel, Stack, Switch } from '@mui/material';
import ProductSearch from '../../InventoryComponents/ProductSearch';
import CategoryFilter from '../../InventoryComponents/CategoryFilter';
import menuItems from '../../InventoryComponents/Categories';
import StockFilter from '../../InventoryComponents/StockFilter';
import IconButton from '@mui/material/IconButton';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import Button from '@mui/material/Button';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import Drawer from '@mui/material/Drawer';
import ProductAdd from '../../InventoryComponents/ProductComponents/ProductAdd';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import data from '../../../data/Product';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ProductView from '../../InventoryComponents/ProductComponents/ProductView';

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
const SubCategoryPages = ({ params }) => {
    let { id } = useParams();
    console.log(id);
    let sortedData = data.filter((item) => item.category === id);
    const [isAddDrawerOpen, setIsAddDrawerOpen] = useState(false); // State for the right drawer

    const toggleAddDrawer = () => {
        setIsAddDrawerOpen(!isAddDrawerOpen);
    };
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredItems, setFilteredItems] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectLowStock, setSelectLowStock] = useState();
    const [sortConfig, setSortConfig] = useState({ key: '', direction: '' });
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [productOpen, setProductOpen] = useState(false);
    const [productData, setProductData] = useState(null);

    if (selectedCategory === 'All Category' && selectLowStock !== 'Low Stock') {
        // No category filter and no low stock filter, so keep all data
        sortedData = data;
    } else {
        sortedData = data.filter((item) => item.category === id);

        if (selectLowStock === 'Low Stock') {
            sortedData = data.filter((item) => item.stock < 10);
        }
    }

    const handleSearchChange = (query) => {
        setSearchQuery(query);
        const filtered = menuItems.filter((item) =>
            item.label.toLowerCase().includes(query.toLowerCase()),
        );
        setFilteredItems(filtered);
    };
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
        <Stack sx={{ bgcolor: 'sc.one', padding: '8px' }}>
            <Stack
                direction={'row'}
                alignItems={'center'}
                sx={{ bgcolor: 'white.main', borderRadius: '10px', padding: '8px' }}
            >
                <ProductSearch onSearchChange={handleSearchChange} />
                <FormControl sx={{ minWidth: 180 }}>
                    <Select
                        labelId='demo-simple-select-label'
                        id='demo-simple-select'
                        value={selectedCategory}
                    ></Select>
                </FormControl>
            </Stack>
            <TableContainer component={Paper} sx={{ borderRadius: '10px', marginTop: '16px' }}>
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
                                        {header.key === 'name' && row[header.key]}
                                        {header.key === 'stock' && row[header.key] < 10 ? (
                                            <span style={{ color: 'red' }}>
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
                                        {header.key === 'lastModified' && row[header.key]}
                                        {header.key === 'price' ? (
                                            <span style={{ color: 'green' }}>
                                                {`$${row[header.key]}`}
                                            </span>
                                        ) : null}

                                        {header.key === 'status' ? (
                                            <FormControlLabel
                                                control={
                                                    <Switch
                                                        checked={row[header.key] === 'available'}
                                                        color='primary'
                                                        onClick={() =>
                                                            toggleStatus(row.sku, row[header.key])
                                                        }
                                                    />
                                                }
                                            />
                                        ) : null}

                                        {header.key === 'action' ? ( // Check for "Action" column
                                            <span
                                                style={{
                                                    cursor: 'pointer',
                                                    textDecoration: 'underline',
                                                }}
                                                onClick={() => handleActionClick(row)}
                                            >
                                                More
                                            </span>
                                        ) : null}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Drawer anchor='right' open={productOpen} onClose={() => setProductOpen(false)}>
                <Box
                    sx={{
                        width: 1000,
                        p: 2,
                        height: '100vh',
                        borderRadius: '20px 0 20px 0',
                    }}
                >
                    <Typography>Product Details</Typography>
                    <ProductView product={productData} setProductOpen={setProductOpen} />
                </Box>
            </Drawer>
        </Stack>
    );
};

export default SubCategoryPages;
