import React, { useState } from 'react';
import ProductSearch from '../components/InventoryComponents/ProductSearch';
import CategoryFilter from '../components/InventoryComponents/CategoryFilter';
import menuItems from '../components/InventoryComponents/Categories';
import StockFilter from '../components/InventoryComponents/StockFilter';
import IconButton from '@mui/material/IconButton';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import Button from '@mui/material/Button';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { Grid, Stack } from '@mui/material';
import TopBar from '../components/InventoryComponents/TopBar';
import InventorySummery from '../components/InventoryComponents/InventorySummery';
import InventoryTable from '../components/InventoryComponents/InventoryTable';
import PieCharts from '../components/CommonComps/PieCharts';
import InventoryChart from '../components/CommonComps/InventoryChart';

const InventoryPage = () => {
    // category filter start
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredItems, setFilteredItems] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectLowStock, setSelectLowStock] = useState('All Products');
    const handleSearchChange = (query) => {
        setSearchQuery(query);
        const filtered = menuItems.filter((item) =>
            item.label.toLowerCase().includes(query.toLowerCase()),
        );
        setFilteredItems(filtered);
    };
    // category filter end

    return (
        <Stack p={2}>
            <TopBar
                handleSearchChange={handleSearchChange}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                selectLowStock={selectLowStock}
                setSelectLowStock={setSelectLowStock}
            />
            <Stack mt={4}>
                <Grid container wrap={'nowrap'} gap={2}>
                    <Grid item md={3.7}>
                        <Stack
                            height={'161px'}
                            sx={{
                                bgcolor: 'white.main',
                                borderRadius: '10px',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                            width={'100%'}
                        >
                            <InventoryChart />
                            {/*<PieCharts />*/}
                        </Stack>
                    </Grid>
                    <Grid item md={8.3}>
                        <Stack
                            height={'161px'}
                            p={2}
                            sx={{ bgcolor: 'white.main', borderRadius: '10px' }}
                        >
                            <InventorySummery />
                        </Stack>
                    </Grid>
                </Grid>
            </Stack>
            <Stack mt={4}>
                <InventoryTable
                    selectedCategory={selectedCategory}
                    selectLowStock={selectLowStock}
                />
            </Stack>
        </Stack>
    );
};

export default InventoryPage;
