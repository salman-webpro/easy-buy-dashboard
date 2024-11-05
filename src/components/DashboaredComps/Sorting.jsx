import * as React from 'react';
import { Box, InputLabel, MenuItem } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';

// const Ranges = ['High - Low', 'Low - High'];
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}
let Sorting = ({ Ranges, placeholder }) => {
    // const handleChange = (event) => {
    //     setRangeValue(event.target.value);
    // };
    const theme = useTheme();
    const [personName, setPersonName] = React.useState([]);

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    return (
        <Box sx={{ flexGrow: 1 }} borderRadius={'4px'}>
            <FormControl fullWidth>
                <InputLabel id='demo-simple-select-label'></InputLabel>

                <Select
                    displayEmpty
                    value={personName}
                    onChange={handleChange}
                    input={<OutlinedInput />}
                    renderValue={(selected) => {
                        if (selected.length === 0) {
                            return <em>{placeholder}</em>;
                        }

                        return selected.join(', ');
                    }}
                    MenuProps={MenuProps}
                    inputProps={{ 'aria-label': 'Without label' }}
                    sx={{
                        '& .MuiSelect-select': {
                            width: '100px',
                            fontSize: '12px',
                            borderRadius: '8px',
                            padding: '5.5px 14px',
                        },
                    }}
                >
                    <MenuItem disabled value=''>
                        <em>{placeholder}</em>
                    </MenuItem>
                    {Ranges.map((name) => (
                        <MenuItem
                            key={name}
                            value={name}
                            style={getStyles(name, personName, theme)}
                        >
                            {name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
};

export default Sorting;
