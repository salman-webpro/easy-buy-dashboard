import React from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

const StockFilter = ({ selectLowStock, setSelectLowStock }) => {
    // Set an initial value here
    const handleChange = (event) => {
        console.log(event.target.value);
        setSelectLowStock(event.target.value);
    };

    return (
        <FormControl
            sx={{
                m: 1,
                width: {
                    xs: '100%',
                    lg: '15%',
                },
            }}
        >
            <Select
                labelId='demo-simple-select-label'
                value={selectLowStock}
                onChange={handleChange}
                sx={{
                    height: '44px',
                    fontSize: '14px',
                }}
            >
                <MenuItem key={'All Products'} value={'All Products'}>
                    All Products
                </MenuItem>
                <MenuItem key={'Low Stock'} value={'Low Stock'}>
                    Low Stock
                </MenuItem>
            </Select>
        </FormControl>
    );
};

export default StockFilter;
