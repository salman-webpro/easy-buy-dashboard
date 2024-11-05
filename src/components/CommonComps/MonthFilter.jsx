import * as React from 'react';
import { Box, InputLabel, MenuItem } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];
let MonthFilter = ({ MonthFilterValue, setMonthFilterValue }) => {
    const handleChange = (event) => {
        setMonthFilterValue(event.target.value);
    };
    return (
        <Box>
            <FormControl sx={{ borderRadius: '8px' }}>
                <Select
                    labelId='demo-simple-select-label'
                    id='demo-simple-select'
                    value={MonthFilterValue}
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
                    {months.map((month, index) => (
                        <MenuItem key={index} value={month} sx={{ padding: '10px' }}>
                            {month}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
};

export default MonthFilter;
