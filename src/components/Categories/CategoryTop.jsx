import React, { useState } from 'react';
import { Stack, TextField } from '@mui/material';
import ProductSearch from '../InventoryComponents/ProductSearch';
import CategoryFilter from '../InventoryComponents/CategoryFilter';
import menuItems from '../InventoryComponents/Categories';
import StockFilter from '../InventoryComponents/StockFilter';
import IconButton from '@mui/material/IconButton';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import Button from '@mui/material/Button';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import Drawer from '@mui/material/Drawer';
import ProductAdd from '../InventoryComponents/ProductComponents/ProductAdd';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import CategoryAdd from './CategoryAdd';
import { DatePicker } from '@mui/x-date-pickers';
import CompareArrowsOutlinedIcon from '@mui/icons-material/CompareArrowsOutlined';
import dayjs from 'dayjs'; // Make sure to import dayjs

const CategoryTop = ({ selectedCategory, setSelectedCategory }) => {
    // category filter start
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredItems, setFilteredItems] = useState([]);
    // const [selectedCategory, setSelectedCategory] = useState('');
    const [selectLowStock, setSelectLowStock] = useState('All Products');
    const handleSearchChange = (query) => {
        setSearchQuery(query);
        const filtered = menuItems.filter((item) =>
            item.label.toLowerCase().includes(query.toLowerCase()),
        );
        setFilteredItems(filtered);
    };
    // category filter end
    const [isAddDrawerOpen, setIsAddDrawerOpen] = useState(false); // State for the right drawer

    // Function to toggle the right drawer
    const toggleAddDrawer = () => {
        setIsAddDrawerOpen(!isAddDrawerOpen);
        // setProductOpen(false);
    };
    const [startDate, setStartDate] = React.useState(null);
    const [endDate, setEndDate] = React.useState(null);
    const formattedStartDate = startDate ? startDate.format('YYYY-MM-DD') : null;
    const formattedEndDate = endDate ? endDate.format('YYYY-MM-DD') : null;
    console.log(formattedStartDate, formattedEndDate);
    const handleEndDateChange = (date) => {
        if (startDate && date && date.isBefore(startDate)) {
            alert('End Date cannot be before Start Date');
            setEndDate(null);
        } else {
            setEndDate(date);
        }
    };
    return (
        <Stack
            direction={'row'}
            justifyContent={'space-between'}
            alignItems={'center'}
            sx={{ bgcolor: 'white.main', borderRadius: '10px', padding: '8px' }}
        >
            <Stack
                direction={{
                    xs: 'column',
                    lg: 'row',
                }}
                gap={1}
                sx={{ width: '80%' }}
            >
                <TextField
                    id='outlined-start-adornment'
                    sx={{
                        m: 1,
                        width: {
                            xs: '100%',
                            lg: '35%',
                        },
                        padding: '10px, 48px, 10px, 10px',
                        font: 'bodyMedium',
                        borderRadius: '4px',
                    }}
                    placeholder='Search by Name, Category'
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position='start'>
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}
                />
                <CategoryFilter
                    menuItems={menuItems}
                    onSearchChange={handleSearchChange}
                    setSelectedCategory={setSelectedCategory}
                    selectedCategory={selectedCategory}
                />

                <Stack direction={'row'} alignItems={'center'} gap={0.5}>
                    <DatePicker
                        startDate={startDate}
                        onChange={(newValue) => setStartDate(newValue)}
                    />
                    <CompareArrowsOutlinedIcon sx={{ color: 'sc.two' }} />
                    <DatePicker endDate={endDate} onChange={handleEndDateChange} />
                </Stack>
            </Stack>
            <Stack
                sx={{
                    height: {
                        lg: '44px',
                    },
                    width: '20%',
                }}
                direction={'row'}
                gap={1}
                justifyContent={{
                    xs: 'start',
                    lg: 'end',
                }}
            >
                <IconButton
                    sx={{
                        color: '#006C4A',
                        borderRadius: '8px',
                        '&:hover': {
                            bgcolor: 'primary.600',
                            color: '#fff',
                        },
                        borderWidth: '1px',
                        border: 1,
                        borderColor: '#006C4A',
                    }}
                >
                    <FileUploadOutlinedIcon />
                </IconButton>
                <IconButton
                    sx={{
                        color: '#006C4A',
                        borderRadius: '8px',
                        '&:hover': {
                            bgcolor: 'primary.600',
                            color: '#fff',
                        },
                        borderWidth: '1px',
                        border: 1,
                        borderColor: '#006C4A',
                    }}
                >
                    <FileDownloadOutlinedIcon />
                </IconButton>
                <Button
                    variant='contained'
                    sx={{
                        bgColor: 'primary.400',
                        padding: { lg: '4px 20px', xs: '4px 40px' },
                        borderRadius: '8px',
                    }}
                    startIcon={<AddOutlinedIcon />}
                    onClick={toggleAddDrawer}
                >
                    Add Category
                </Button>
            </Stack>
            <Drawer anchor={'right'} open={isAddDrawerOpen} onClose={toggleAddDrawer}>
                <CategoryAdd toggleAddDrawer={toggleAddDrawer} />
            </Drawer>
        </Stack>
    );
};

export default CategoryTop;
