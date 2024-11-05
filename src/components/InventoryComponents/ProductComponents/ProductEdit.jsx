import React, { useState, useRef } from 'react';
import { Stack, Button, Input, TextField, Menu, ButtonGroup } from '@mui/material';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Switch from '@mui/material/Switch';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import DynamicField from '../DynamicField/DynamicField';
import Box from '@mui/material/Box';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import lineArrow from '../../../assets/images/lineArrow.png';
import { MdCalendarMonth } from 'react-icons/md';
import dayjs from 'dayjs';
const CustomCalendarIcon = () => <MdCalendarMonth size={24} style={{ color: '#567F6D' }} />;

const categoryOptions = [
    { key: 'All Products', value: 'All Products' },
    { key: 'Electronics', value: 'Electronics' },
    { key: 'Personal care', value: 'Personal care' },
    // Add more category options as needed
];

const ProductEdit = ({ product, toggleRightDrawer }) => {
    const [selectedImage, setSelectedImage] = useState(null);
    const fileInputRef = useRef(null);
    const [date, setDate] = useState(dayjs('2024-1-1'));

    // Function to handle file input change
    const handleFileChange = (event) => {
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = (e) => {
                setSelectedImage(e.target.result);
            };

            reader.readAsDataURL(file);
        }
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        // setNewProduct({ ...newProduct, [name]: value });
    };

    return (
        <Stack width={'466px'} p={2}>
            <Stack
                style={{
                    position: 'relative',
                    width: '426px',
                    height: '164px',

                    borderRadius: '8px',
                    overflow: 'hidden',
                }}
            >
                <img
                    src={selectedImage ? selectedImage : product.images[0]}
                    alt='Selected Image'
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                {/* Upload button */}
                <input
                    type='file'
                    accept='image/*'
                    ref={fileInputRef}
                    style={{
                        position: 'absolute',
                        bottom: '0px',
                        right: '0px',
                        zIndex: '1',
                        opacity: '0',
                    }}
                    onChange={handleFileChange}
                />
                <Button
                    variant='contained'
                    style={{
                        position: 'absolute',
                        bottom: '0px',
                        right: '0px',
                        borderRadius: '8px',
                        zIndex: '0',
                    }}
                >
                    <FileUploadOutlinedIcon />
                </Button>
            </Stack>
            <Stack mt={3}>
                <Stack mb={1}>
                    <Typography variant={'labelLarge'} mb={1}>
                        Name
                    </Typography>
                    <TextField defaultValue={product.name}></TextField>
                </Stack>
                <Stack mb={1}>
                    <Typography variant={'labelLarge'} mb={1}>
                        Description
                    </Typography>
                    <TextField defaultValue={product.description}></TextField>
                </Stack>
                <Stack mb={1}>
                    <Typography variant={'labelLarge'} mb={1}>
                        Category
                    </Typography>
                    <Select defaultValue={product.category}>
                        {categoryOptions.map((option) => (
                            <MenuItem key={option.key} value={option.value}>
                                {option.key}
                            </MenuItem>
                        ))}
                    </Select>
                </Stack>
                <Stack mb={1}>
                    <Typography variant={'labelLarge'} mb={1}>
                        Brand
                    </Typography>
                    <TextField defaultValue={product.brand}></TextField>
                </Stack>
                <Stack mb={1}>
                    <Typography variant={'labelLarge'} mb={1}>
                        Aisle Number
                    </Typography>
                    <TextField defaultValue={product.aisleNumber}></TextField>
                </Stack>
                <Stack mb={1}>
                    <Typography variant={'labelLarge'} mb={1}>
                        SKU
                    </Typography>
                    <TextField defaultValue={product.sku}></TextField>
                </Stack>
                <Stack mb={1}>
                    <Typography variant={'labelLarge'} mb={1}>
                        Stock
                    </Typography>
                    <Stack direction={'row'} alignItems={'center'} gap={1}>
                        <TextField defaultValue={product.stock} sx={{ flexGrow: 1 }}></TextField>
                        <Typography variant={'labelMedium'} color={'sc.two'}>
                            Stock Visibility
                        </Typography>
                        <Switch defaultChecked></Switch>
                    </Stack>
                    <Typography variant={'bodySmall'} color={'#24A524'}>
                        * Stock Visibility is enabled from store setting, you cannot modify it right
                        now.
                    </Typography>
                </Stack>
                <Stack mb={1}>
                    <Typography variant={'labelLarge'} mb={1}>
                        Barcode
                    </Typography>
                    <TextField defaultValue={product.barcodeNumber}></TextField>
                </Stack>
                <Stack mb={1}>
                    <Typography variant={'labelLarge'} mb={1}>
                        Discount Price
                    </Typography>
                    <TextField
                        // defaultValue={product.discountPrice}
                        // onChange={handleChange}
                        name='discountPrice'
                    ></TextField>
                </Stack>
                <Stack mb={1}>
                    <Typography variant={'labelLarge'} mb={1}>
                        Discount Duration
                    </Typography>
                    <Box sx={{ display: 'flex' }}>
                        <DatePicker
                            value={date}
                            onChange={(newValue) => setDate(newValue)}
                            components={{
                                OpenPickerIcon: CustomCalendarIcon,
                                SwitchViewButton: CustomCalendarIcon,
                            }}
                        />
                        <img
                            src={lineArrow}
                            alt={`arrow`}
                            style={{ width: '20px', height: '10px', margin: 'auto' }}
                        />
                        <DatePicker
                            value={date}
                            onChange={(newValue) => setDate(newValue)}
                            components={{
                                OpenPickerIcon: CustomCalendarIcon,
                                SwitchViewButton: CustomCalendarIcon,
                            }}
                        />
                    </Box>
                </Stack>
                <Stack mb={1}>
                    <Typography variant={'labelLarge'} mb={1}>
                        Total Price
                    </Typography>
                    <TextField defaultValue={product.price}></TextField>
                </Stack>
                <Stack mb={1}>
                    <Typography variant={'labelLarge'} mb={1}>
                        Purchased Price
                    </Typography>
                    <TextField
                    // defaultValue={newProduct.purchasedPrice}
                    // onChange={handleChange}
                    // name='purchasedPrice'
                    ></TextField>
                </Stack>
                {/*Add New Field*/}
                <DynamicField handleChange={handleChange} />
                {/*Add New Field*/}
                <Stack mb={1}>
                    <Typography variant={'labelLarge'} mb={1}>
                        Tags
                    </Typography>
                    <Stack direction={'row'} gap={1} sx={{ flexWrap: 'wrap' }}>
                        {product.tags.map((tag) => (
                            <ButtonGroup key={tag} sx={{ marginLeft: '10px' }}>
                                <Button>{tag}</Button>
                                <Button>X</Button>
                            </ButtonGroup>
                        ))}
                    </Stack>
                </Stack>
            </Stack>
            <Stack direction={'row'} justifyContent={'flex-end'}>
                <Button
                    variant={'contained'}
                    startIcon={<SaveOutlinedIcon />}
                    onClick={toggleRightDrawer}
                >
                    Save
                </Button>
            </Stack>
        </Stack>
    );
};

export default ProductEdit;
