import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';

const ITEM_HEIGHT = 40;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        },
    },
};

export default function MultiOptionSelect({ title, values }) {
    const [selectedData, setSelectedData] = React.useState([]);

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setSelectedData(typeof value === 'string' ? value.split(',') : value);
    };

    return (
        <div>
            <FormControl sx={{ width: '100%' }}>
                <Select
                    id='demo-multiple-checkbox'
                    multiple
                    value={selectedData}
                    onChange={handleChange}
                    input={<OutlinedInput />}
                    renderValue={(selected) => selected.join(', ')}
                    MenuProps={MenuProps}
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
                    {values.map((name) => (
                        <MenuItem
                            key={name}
                            value={name}
                            sx={{
                                fontSize: '14px',
                                fontWeight: '400',
                                color: '#006C4A',
                            }}
                        >
                            <Checkbox checked={selectedData.indexOf(name) > -1} size={'small'} />
                            <ListItemText primary={name} />
                            <hr />
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}
