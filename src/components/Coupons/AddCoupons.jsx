import React, { useRef, useState } from 'react';
import { Stack, TextField, Typography } from '@mui/material';
import image from '../../../src/assets/images/account_circle.png';
import Button from '@mui/material/Button';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import { useForm } from 'react-hook-form';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Category from '../../pages/Category';
import { DatePicker } from '@mui/x-date-pickers';
const AddCoupons = ({ toggleAddDrawer }) => {
    const { register, handleSubmit } = useForm();
    const [selectedImage, setSelectedImage] = useState();
    const fileInputRef = useRef(null);

    const [available, setAvailable] = React.useState('available');

    const handleAvailableChange = (event) => {
        setAvailable(event.target.value);
    };
    const [category, setCategory] = React.useState('select');

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onload = (e) => {
            setSelectedImage(e.target.result);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };
    const openFileInput = () => {
        fileInputRef.current.click();
    };

    const onSubmit = (data) => {
        // You can access the selected image via the selectedImage state
        console.log('Form Data:', data);
        // console.log('Selected Image:', selectedImage);
    };
    return (
        <Stack width={'100%'} p={2}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Stack alignItems={'center'} justifyContent={'center'} mt={2}>
                    <Stack
                        backgroundColor='primary.100'
                        height='150px'
                        width='150px'
                        borderRadius='50%'
                        mb={1}
                        alignItems={'center'}
                        justifyContent={'center'}
                    >
                        <img
                            src={selectedImage ? selectedImage : image}
                            alt='User'
                            style={{
                                width: '150px',
                                height: '150px',
                                objectFit: 'cover',
                                borderRadius: '50%',
                            }}
                        />
                    </Stack>
                    <Button variant='outlined' onClick={openFileInput}>
                        <FileUploadOutlinedIcon /> Update Image
                    </Button>
                    <input
                        type='file'
                        accept='image/*'
                        style={{ display: 'none' }}
                        onChange={(e) => {
                            // Use the "register" function to add the selected image to the form data
                            handleImageChange(e);
                            register('image', { required: true });
                        }}
                        ref={fileInputRef}
                    />
                </Stack>
                <Stack spacing={2} mt={2}>
                    <Stack width='100%'>
                        <Typography variant={'labelLarge'} color='primary.800'>
                            Name*
                        </Typography>
                        <TextField placeholder='' fullWidth />
                    </Stack>
                    <Stack width='100%'>
                        <Typography variant={'labelLarge'} color='primary.800'>
                            Details*
                        </Typography>
                        <TextField placeholder='' fullWidth />
                    </Stack>
                    <Stack width='100%'>
                        <Typography variant={'labelLarge'} color='primary.800'>
                            Code*
                        </Typography>
                        <TextField placeholder='' fullWidth />
                    </Stack>
                    <Stack width='100%'>
                        <Typography variant={'labelLarge'} color='primary.800'>
                            Number of Times*
                        </Typography>
                        <TextField placeholder='' fullWidth />
                    </Stack>
                    <Stack width='100%'>
                        <Typography variant={'labelLarge'} color='primary.800'>
                            Total Coupon
                        </Typography>
                        <TextField placeholder='' fullWidth />
                    </Stack>
                    <Stack width='100%'>
                        <Typography variant={'labelLarge'} color='primary.800'>
                            Expired Date
                        </Typography>
                        <DatePicker />
                    </Stack>
                    <Stack width='100%'>
                        <Typography variant={'labelLarge'} color='primary.800'>
                            Minimum Purchase Price*
                        </Typography>
                        <TextField placeholder='' fullWidth />
                    </Stack>
                    <Stack width='100%'>
                        <Typography variant={'labelLarge'} color='primary.800'>
                            Discount In*
                        </Typography>
                        <TextField placeholder='' fullWidth />
                    </Stack>
                    <Stack width='100%'>
                        <Typography variant={'labelLarge'} color='primary.800'>
                            Availablity
                        </Typography>
                        <Select value={available} onChange={handleAvailableChange}>
                            <MenuItem value={'available'}>Available</MenuItem>
                            <MenuItem value={'notAvailable'}> Not Available</MenuItem>
                        </Select>
                    </Stack>
                    <Stack width='100%'>
                        <Typography variant={'labelLarge'} color='primary.800'>
                            Select Categoty
                        </Typography>
                        <Select value={category} onChange={handleCategoryChange}>
                            <MenuItem value={'select'} disabled>
                                Select Category
                            </MenuItem>
                            <MenuItem value={'electronics'}>Electronics</MenuItem>
                            <MenuItem value={'dairy'}>Dairy</MenuItem>
                            <MenuItem value={'grocery'}>Grocery</MenuItem>
                            <MenuItem value={'beverages'}>Beverages</MenuItem>
                            <MenuItem value={'frozen'}>Frozen</MenuItem>
                            <MenuItem value={'other'}>Other</MenuItem>
                        </Select>
                    </Stack>
                </Stack>
                <Stack direction='row' justifyContent='flex-end' mt={2}>
                    <Button
                        type='submit'
                        variant='contained'
                        startIcon={<SaveOutlinedIcon />}
                        onClick={toggleAddDrawer}
                    >
                        Save
                    </Button>
                </Stack>
            </form>
        </Stack>
    );
};

export default AddCoupons;
