import React, { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Divider from '@mui/material/Divider';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        },
    },
};

const OptionSelect = ({ title, values }) => {
    const [selectedValue, setSelectedValue] = useState('');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };
    return (
        <div>
            <FormControl sx={{ width: '100%' }}>
                <Select
                    displayEmpty
                    value={selectedValue}
                    onChange={handleChange}
                    MenuProps={MenuProps}
                    inputProps={{ 'aria-label': 'Without label' }}
                    sx={{
                        fontSize: '14px',
                        fontWeight: '400',
                        color: '#006C4A',
                        '.MuiOutlinedInput-notchedOutline': {
                            borderColor: '#006C4A',
                        },
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                            borderColor: '#006C4A',
                        },
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                            borderColor: '#006C4A',
                        },
                        '.MuiSvgIcon-root ': {
                            fill: '#006C4A !important',
                        },
                    }}
                >
                    <MenuItem
                        value=''
                        disabled
                        sx={{
                            fontSize: '14px',
                            fontWeight: '400',
                        }}
                    >
                        {title}
                    </MenuItem>
                    {values?.map((value) => (
                        <>
                            <Divider />
                            <MenuItem
                                key={value}
                                value={value}
                                sx={{
                                    fontSize: '14px',
                                    fontWeight: '400',
                                    color: '#006C4A',
                                }}
                            >
                                {value}
                            </MenuItem>
                        </>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
};

export default OptionSelect;
