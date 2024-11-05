import React from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import { TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const AilseSearch = (onSearchChange, selectedCategory, setSelectedCategory) => {
    return (
        <>
            <TextField
                id='outlined-start-adornment'
                sx={{
                    m: 1,
                    width: '541px',
                    padding: '10px, 48px, 10px, 10px',
                    font: 'bodyMedium',
                    borderRadius: '4px',
                }}
                placeholder='Search by Product Name, Category, Aisle Number, SKU, Barcode Number'
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

export default AilseSearch;
