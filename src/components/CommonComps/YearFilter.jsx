import * as React from 'react';
import { Box, InputLabel, MenuItem } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const years = ['2023', '2024', '2025', '2026', '2027', '2028', '2029', '2030'];
let YearFilter = ({ setYearFilterValue, yearFilterValue }) => {
    const handleChange = (event) => {
        setYearFilterValue(event.target.value);
    };
    return (
        <Box>
            <FormControl>
                <Select
                    labelId='demo-simple-select-label'
                    id='demo-simple-select'
                    value={yearFilterValue}
                    onChange={handleChange}
                    sx={{
                        '& .MuiSelect-select': {
                            width: '50px',
                            fontSize: '12px',
                            borderRadius: '8px',
                            padding: '5.5px 14px',
                        },
                    }}
                >
                    {years.map((year, index) => (
                        <MenuItem
                            key={index}
                            value={year}
                            onChange={handleChange}
                            sx={{ padding: '10px' }}
                        >
                            {year}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
};

export default YearFilter;
