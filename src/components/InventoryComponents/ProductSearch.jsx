import React from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import { TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import menuItems from './Categories';
import CategoryFilter from './CategoryFilter';

const ProductSearch = ({ handleSearchChange, placeholder, width = '35%' }) => {
    return (
        <>
            <TextField
                id='outlined-start-adornment'
                sx={{
                    // m: 1,
                    width: {
                        xs: '100%',
                        lg: width,
                    },
                    padding: '10px, 48px, 10px, 10px',
                    font: 'bodyMedium',
                    borderRadius: '4px',
                }}
                onChange={(e) => {
                    handleSearchChange(e.target.value);
                }}
                placeholder={
                    placeholder ||
                    'Search by Product Name, Category, Aisle Number, SKU, Barcode Number'
                }
                InputProps={{
                    startAdornment: (
                        <InputAdornment position='start'>
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }}
            />
        </>
    );
};

export default ProductSearch;
