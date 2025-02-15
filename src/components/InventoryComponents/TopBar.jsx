import React, { useState, lazy, Suspense } from 'react';
import ProductSearch from './ProductSearch';
import CategoryFilter from './CategoryFilter';
import menuItems from './Categories';
import StockFilter from './StockFilter';
import IconButton from '@mui/material/IconButton';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import Button from '@mui/material/Button';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { Stack } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import ProductAdd from './ProductComponents/ProductAdd';
import SingleDatePicker from '../CommonComps/SingleDatePicker';
import dayjs from 'dayjs';

// const ProductAdd = lazy(() => import('./ProductComponents/ProductAdd'));
const TopBar = ({
    handleSearchChange,
    selectedCategory,
    setSelectedCategory,
    selectLowStock,
    setSelectLowStock,
}) => {
    const [isAddDrawerOpen, setIsAddDrawerOpen] = useState(false); // State for the right drawer
    const [date, setDate] = useState(dayjs('2023-12-5'));
    // Function to toggle the right drawer
    const toggleAddDrawer = () => {
        setIsAddDrawerOpen(!isAddDrawerOpen);
        // setProductOpen(false);
    };
    return (
        <Stack
            direction={{
                xs: 'column',
                lg: 'row',
            }}
            justifyContent={'space-between'}
            alignItems={'center'}
            sx={{ bgcolor: 'white.main', borderRadius: '10px', padding: '8px' }}
        >
            <Stack
                sx={{ width: '80%' }}
                alignItems={'center'}
                direction={{
                    xs: 'column',
                    lg: 'row',
                }}
                gap={1}
            >
                <ProductSearch handleSearchChange={handleSearchChange} />
                <CategoryFilter
                    menuItems={menuItems}
                    onSearchChange={handleSearchChange}
                    setSelectedCategory={setSelectedCategory}
                    selectedCategory={selectedCategory}
                />
                <StockFilter
                    selectLowStock={selectLowStock}
                    setSelectLowStock={setSelectLowStock}
                />
                <SingleDatePicker date={date} setDate={setDate} />
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
                {/* <IconButton
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
                </IconButton> */}
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
                    Add Product
                </Button>
            </Stack>
            {isAddDrawerOpen && (
                <Suspense fallback={<h1>Loading</h1>}>
                    <Drawer anchor={'right'} open={isAddDrawerOpen} onClose={toggleAddDrawer}>
                        <ProductAdd toggleAddDrawer={toggleAddDrawer} />
                    </Drawer>
                </Suspense>
            )}
        </Stack>
    );
};

export default TopBar;
