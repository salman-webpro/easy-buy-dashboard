import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { TextField } from '@mui/material';

const SearchProduct = ({ onSearchChange }) => {
    return (
        <TextField
            id='outlined-start-adornment'
            sx={{
                m: 1,
                width: '210px',
                font: 'bodyMedium',
                borderRadius: '4px',
            }}
            InputProps={{
                startAdornment: (
                    <InputAdornment position='start'>
                        <SearchIcon />
                    </InputAdornment>
                ),
            }}
            placeholder='Search...'
            onChange={onSearchChange}
        />
    );
};
const CategoryFilter = ({ menuItems, onSearchChange, selectedCategory, setSelectedCategory }) => {
    const handleChange = (event) => {
        const newCategory = event.target.value;
        setSelectedCategory(newCategory);
    };

    const handleSearchChange = (event) => {
        const query = event.target.value;
        onSearchChange(query);
    };

    return (
        <div>
            <FormControl
                sx={{
                    m: 1,
                    width: {
                        xs: '100%',
                        lg: '200px',
                    },
                }}
            >
                <Select
                    labelId='demo-simple-select-label'
                    value={selectedCategory ? selectedCategory : 'All Category'}
                    onChange={handleChange}
                    sx={{
                        height: '44px',
                        fontSize: '14px',
                    }}
                >
                    {/* Search input */}
                    <SearchProduct onSearchChange={handleSearchChange} />
                    {/* Search results */}

                    {menuItems.map((item) => (
                        <MenuItem key={item.value} value={item.value}>
                            {item.label}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
};

export default CategoryFilter;
