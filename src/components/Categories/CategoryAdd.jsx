import React from 'react';
import { Stack, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import Typography from '@mui/material/Typography';
import { useForm } from 'react-hook-form';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { TextareaAutosize } from '@mui/material';
const CategoryAdd = ({ category, toggleAddDrawer }) => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    };

    const [selectedCategory, setSelectedCategory] = React.useState(category?.parent_category);

    const handleChange = (event) => {
        setSelectedCategory(event.target.value);
    };
    return (
        <Stack width={'466px'} p={2}>
            <Typography variant={'titleLarge'}>
                {category?.name ? 'Edit Category' : 'Add Category'}
            </Typography>
            {/*<form onSubmit={handleSubmit(onSubmit)}>*/}
            <Stack mt={2}>
                <label>Name</label>
                <TextField
                    placeholder='Category Name'
                    {...register('name')}
                    defaultValue={category?.name}
                ></TextField>
            </Stack>
            <Stack mt={2}>
                <label>Parent Category</label>
                <Select
                    defaultValue={selectedCategory}
                    size={'small'}
                    onChange={handleChange}
                    placeholder='Category Name'
                    {...register('parent_category')}
                >
                    <MenuItem value={'Select Category'}>Select Category</MenuItem>
                    <MenuItem value={'Electronics'}>Electronics</MenuItem>
                    <MenuItem value={'Dairy'}>Dairy</MenuItem>
                    <MenuItem value={'House Hold'}>House Hold</MenuItem>
                </Select>
            </Stack>
            <Stack mt={2}>
                <label>Description</label>
                <TextareaAutosize
                    aria-label='textarea'
                    placeholder='Category Description'
                    minRows={8}
                    style={{
                        height: '56px',
                        border: '1px solid #f15a2d',
                        borderColor: 'green',
                        padding: '5px 10px',
                        borderRadius: '5px',
                    }}
                />
            </Stack>
            <Stack direction={'row'} justifyContent={'end'} mt={3}>
                <Button
                    startIcon={<SaveOutlinedIcon />}
                    variant='contained'
                    type='submit'
                    onClick={toggleAddDrawer}
                >
                    Save
                </Button>
            </Stack>
            {/*</form>*/}
        </Stack>
    );
};

export default CategoryAdd;
