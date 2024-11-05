import React from 'react';
import { Stack, TextField } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import customerData from '../../../data/CustomerData';

const OfferAddDialoge = () => {
    return (
        <Stack>
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
            <Stack>
                {customerData.map((item, index) => {
                    return (
                        <Stack key={index} direction={'row'} alignItems={'center'} spacing={1}>
                            <Avatar alt={item.name} src={item.images} variant='rounded' />
                            <Typography variant='bodyMedium'>{item.name}</Typography>
                        </Stack>
                    );
                })}
            </Stack>
        </Stack>
    );
};
export default OfferAddDialoge;
