import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 6.5 + ITEM_PADDING_TOP,
        },
    },
};
const Categories = [
    'All',
    'Fashion',
    'Electronics',
    'Entertainment',
    'Accessories',
    'Sports',
    'Books',
    'Food',
    'Furniture',
];
const ProductCategorySelect = ({ onChange }) => {
    const [categoryName, setCategoryName] = React.useState([]);
    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setCategoryName(typeof value === 'string' ? value.split(',') : value);
        onChange(value);
    };

    return (
        <div>
            <FormControl fullWidth>
                <Select
                    multiple
                    value={categoryName}
                    onChange={handleChange}
                    renderValue={(selected) => selected.join(', ')}
                    MenuProps={MenuProps}
                    defaultValue={'All'}
                >
                    {Categories.map((name) => (
                        <MenuItem key={name} value={name}>
                            <Checkbox checked={categoryName.indexOf(name) > -1} />
                            <ListItemText primary={name} />
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
};

export default ProductCategorySelect;
