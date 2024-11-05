import React, { useState, useRef } from 'react';
import {
    Stack,
    Button,
    TextField,
    Select,
    MenuItem,
    Switch,
    Typography,
    Autocomplete,
    Chip,
    InputBase,
} from '@mui/material';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import uploadImage from '../../../assets/images/upload.png';
import lineArrow from '../../../assets/images/lineArrow.png';
import DynamicField from '../DynamicField/DynamicField';
import { useForm } from 'react-hook-form';
import SingleDatePicker from '../../CommonComps/SingleDatePicker';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { MdCalendarMonth } from 'react-icons/md';
import Box from '@mui/material/Box';

const CustomCalendarIcon = () => <MdCalendarMonth size={24} style={{ color: '#567F6D' }} />;

const categoryOptions = [
    { key: 'All Products', value: 'All Products' },
    { key: 'Electronics', value: 'Electronics' },
    { key: 'Personal care', value: 'Personal care' },
    // Add more category options as needed
];

const initialProduct = {
    name: '',
    description: '',
    category: 'All Products',
    brand: '',
    aisleNumber: '',
    sku: '',
    stock: '',
    barcodeNumber: '',
    discountPrice: '',
    duration: '',
    totalPrice: '',
    purchasedPrice: '',
    tags: [],
};

const ProductAdd = ({ toggleAddDrawer }) => {
    const [newProduct, setNewProduct] = useState(initialProduct);
    const [selectedImage, setSelectedImage] = useState(null);
    const [date, setDate] = useState(dayjs('2024-1-1'));

    const fileInputRef = useRef(null);
    const { register, handleSubmit } = useForm();
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
        setNewProduct({ ...newProduct, [name]: value });
    };

    const handleTagAdd = (event) => {
        if (event.key === 'Enter' && newProduct.tags.indexOf(event.target.value) === -1) {
            const updatedTags = [...newProduct.tags, event.target.value];
            setNewProduct({ ...newProduct, tags: updatedTags });
            event.target.value = ''; // Clear the input field
            event.preventDefault();
            console.log(newProduct.tags);
        }
    };
    const [tagInput, setTagInput] = useState('');

    const onSubmit = (data) => {
        console.log(data);
    };

    const top100Films = [
        { title: 'The Shawshank Redemption', year: 1994 },
        { title: 'The Godfather', year: 1972 },
        { title: 'The Godfather: Part II', year: 1974 },
        { title: 'The Dark Knight', year: 2008 },
        { title: '12 Angry Men', year: 1957 },
        { title: "Schindler's List", year: 1993 },
        { title: 'Pulp Fiction', year: 1994 },
    ];
    return (
        <Stack width={'466px'} p={2} sx={{ backgroundColor: '#FAFAFA' }}>
            <form onSubmit={handleSubmit(onSubmit)}>
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
                        src={selectedImage ? selectedImage : uploadImage}
                        alt='Selected Image'
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <input
                        multiple
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
                            cursor: 'pointer',
                            position: 'absolute',
                            bottom: '0px',
                            right: '0px',
                            borderRadius: '8px',
                            zIndex: '0',
                        }}
                        onChange={handleFileChange}
                    >
                        <FileUploadOutlinedIcon />
                    </Button>
                </Stack>
                <Stack mt={3}>
                    <Stack mb={1}>
                        <Typography variant={'labelLarge'} mb={1}>
                            Name
                        </Typography>
                        <TextField
                            {...register('name')}
                            defaultValue={newProduct.name}
                            onChange={handleChange}
                            name='name'
                        ></TextField>
                    </Stack>
                    <Stack mb={1}>
                        <Typography variant={'labelLarge'} mb={1}>
                            Description
                        </Typography>
                        <TextField
                            {...register('description')}
                            defaultValue={newProduct.description}
                            onChange={handleChange}
                            name='description'
                        ></TextField>
                    </Stack>
                    <Stack mb={1}>
                        <Typography variant={'labelLarge'} mb={1}>
                            Category
                        </Typography>
                        <Select
                            {...register('category')}
                            defaultValue={newProduct.category}
                            onChange={handleChange}
                            name='category'
                        >
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
                        <TextField
                            {...register('brand')}
                            defaultValue={newProduct.brand}
                            onChange={handleChange}
                            name='brand'
                        ></TextField>
                    </Stack>
                    <Stack mb={1}>
                        <Typography variant={'labelLarge'} mb={1}>
                            Aisle Number
                        </Typography>
                        <TextField
                            {...register('aisleNumber')}
                            defaultValue={newProduct.aisleNumber}
                            onChange={handleChange}
                            name='aisleNumber'
                        ></TextField>
                    </Stack>
                    <Stack mb={1}>
                        <Typography variant={'labelLarge'} mb={1}>
                            SKU
                        </Typography>
                        <TextField
                            {...register('sku')}
                            defaultValue={newProduct.sku}
                            onChange={handleChange}
                            name='sku'
                        ></TextField>
                    </Stack>
                    <Stack mb={1}>
                        <Typography variant={'labelLarge'} mb={1}>
                            Stock
                        </Typography>
                        <Stack direction={'row'} alignItems={'center'} gap={1}>
                            <TextField
                                {...register('stock')}
                                defaultValue={newProduct.stock}
                                sx={{ flexGrow: 1 }}
                            ></TextField>
                            <Typography variant={'labelMedium'} color={'sc.two'}>
                                Stock Visibility
                            </Typography>
                            <Switch defaultChecked></Switch>
                        </Stack>
                        <Typography variant={'bodySmall'} color={'#24A524'}>
                            * Stock Visibility is enabled from store setting, you cannot modify it
                            right now.
                        </Typography>
                    </Stack>
                    <Stack mb={1}>
                        <Typography variant={'labelLarge'} mb={1}>
                            Barcode Number
                        </Typography>
                        <TextField
                            {...register('barcodeNumber')}
                            defaultValue={newProduct.barcodeNumber}
                            onChange={handleChange}
                            name='barcodeNumber'
                        ></TextField>
                    </Stack>

                    <Stack mb={1}>
                        <Typography variant={'labelLarge'} mb={1}>
                            Discount Price
                        </Typography>
                        <TextField
                            {...register('discountPrice')}
                            defaultValue={newProduct.discountPrice}
                            onChange={handleChange}
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
                        <TextField
                            {...register('totalPrice')}
                            defaultValue={newProduct.totalPrice}
                            onChange={handleChange}
                            name='totalPrice'
                        ></TextField>
                    </Stack>
                    <Stack mb={1}>
                        <Typography variant={'labelLarge'} mb={1}>
                            Purchased Price
                        </Typography>
                        <TextField
                            {...register('purchasedPrice')}
                            defaultValue={newProduct.purchasedPrice}
                            onChange={handleChange}
                            name='purchasedPrice'
                        ></TextField>
                    </Stack>
                    {/*Add New Field*/}
                    <DynamicField handleChange={handleChange} />
                    {/*Add New Field*/}
                    <Stack mb={1}>
                        <Typography variant={'labelLarge'} mb={1}>
                            Tags
                        </Typography>
                        <TextField
                            onKeyPress={handleTagAdd}
                            name='tags'
                            fullWidth
                            placeholder='Press Enter to add tags'
                        />
                    </Stack>
                    {/*<Autocomplete*/}
                    {/*    multiple*/}
                    {/*    id='tags-outlined'*/}
                    {/*    options={top100Films}*/}
                    {/*    getOptionLabel={(option) => option?.title}*/}
                    {/*    defaultValue={[top100Films[0]]}*/}
                    {/*    filterSelectedOptions*/}
                    {/*    freeSolo*/}
                    {/*    renderInput={(params) => (*/}
                    {/*        <TextField*/}
                    {/*            {...params}*/}
                    {/*            label='filterSelectedOptions'*/}
                    {/*            placeholder='Favorites'*/}
                    {/*            {...register('tags')}*/}
                    {/*        />*/}
                    {/*    )}*/}
                    {/*/>*/}
                    {newProduct.tags.length > 0 && (
                        <Stack direction='row' gap={1} sx={{ flexWrap: 'wrap' }}>
                            {newProduct.tags.map((tag, index) => (
                                <Button
                                    variant='outlined'
                                    key={index}
                                    onClick={() => {
                                        const updatedTags = [...newProduct.tags];
                                        updatedTags.splice(index, 1);
                                        setNewProduct({ ...newProduct, tags: updatedTags });
                                    }}
                                >
                                    {tag} | X
                                </Button>
                            ))}
                        </Stack>
                    )}
                    <input
                        type='hidden' // Hide the input field from the user
                        {...register('tags')}
                        value={{ ...newProduct.tags }} // Set the initial value from state
                    />
                </Stack>
                <Stack direction='row' justifyContent='flex-end'>
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

export default ProductAdd;
