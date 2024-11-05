import React, { useState, useRef } from 'react';
import {
    Stack,
    Button,
    TextField,
    Select,
    MenuItem,
    Switch,
    Typography,
    Grid,
} from '@mui/material';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import uploadImage from '../../assets/images/upload.png';
import lineArrow from '../../assets/images/lineArrow.png';
import { useForm } from 'react-hook-form';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { MdCalendarMonth } from 'react-icons/md';
import Box from '@mui/material/Box';
import productData from '../../data/Product';
import ModalAdd from '../common/ModalAdd';
import customerData from '../../data/CustomerData';
import IconButton from '@mui/material/IconButton';
import { MdAdd } from 'react-icons/md';
import DataChip from './DataChip';
const CustomCalendarIcon = () => <MdCalendarMonth size={24} style={{ color: '#567F6D' }} />;

const categoryOptions = [
    { key: 'All Products', value: 'All Products' },
    { key: 'Electronics', value: 'Electronics' },
    { key: 'Personal care', value: 'Personal care' },
];
const statusOptions = [
    { key: 'Available', value: 'Available' },
    { key: 'Not Available', value: 'Not Available' },
];
const initialOffer = {
    name: '',
    description: '',
    category: 'All Products',
    status: 'Available',
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

const AddOffer = ({ toggleAddDrawer }) => {
    const [newProduct, setNewProduct] = useState(initialOffer);
    const [selectedImage, setSelectedImage] = useState(null);
    const [date, setDate] = useState(dayjs('2024-1-1'));
    const [AddDialogOpen, setAddDialogOpen] = useState(false);
    const [customerAddDialog, setCustomerAddDialog] = useState(false);
    const [item, setItem] = useState([]);
    const [customers, setCustomers] = useState([]);
    console.log('🚀~ AddOffer:48 ~  ', customers);
    console.log('🚀~ AddOffer:52 ~  ', item);
    const openAddDialog = () => {
        setAddDialogOpen(true);
    };
    const openCustomerAddDialog = () => {
        setCustomerAddDialog(true);
    };
    const handleClose = () => {
        setAddDialogOpen(false);
        setCustomerAddDialog(false);
    };

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

    const handleSaveData = () => {
        toggleAddDrawer();
        localStorage.setItem('items', JSON.stringify(item));
        localStorage.setItem('customers', JSON.stringify(customers));
    };

    const onSubmit = (data) => {
        console.log(data);
    };

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
                        border: '1px dashed #567F6D',
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
                        cursor='pointer'
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
                        <Typography variant={'labelLarge'} color={'primary.800'} mb={1}>
                            Offer Name
                        </Typography>
                        <TextField
                            {...register('name')}
                            placeholder={'e.g Winter Offer'}
                            defaultValue={newProduct.name}
                            onChange={handleChange}
                            name='name'
                        ></TextField>
                    </Stack>
                    <Stack mb={1}>
                        <Typography variant={'labelLarge'} color={'primary.800'} mb={1}>
                            Start Date
                        </Typography>
                        <DatePicker
                            value={date}
                            onChange={(newValue) => setDate(newValue)}
                            components={{
                                OpenPickerIcon: CustomCalendarIcon,
                                SwitchViewButton: CustomCalendarIcon,
                            }}
                        />
                    </Stack>

                    <Stack mb={1}>
                        <Typography variant={'labelLarge'} color={'primary.800'} mb={1}>
                            End Date
                        </Typography>
                        <DatePicker
                            value={date}
                            onChange={(newValue) => setDate(newValue)}
                            components={{
                                OpenPickerIcon: CustomCalendarIcon,
                                SwitchViewButton: CustomCalendarIcon,
                            }}
                        />
                    </Stack>
                    <Stack
                        mt={1}
                        mb={1}
                        sx={{
                            cursor: 'pointer',
                            border: '1px dashed #567F6D',
                            padding: '8px',
                            borderRadius: '4px',
                        }}
                    >
                        {item?.length === 0 && (
                            <Typography
                                align={'center'}
                                variant={'bodyLarge'}
                                onClick={openAddDialog}
                            >
                                Add Items
                            </Typography>
                        )}
                        {item?.length > 0 && (
                            <>
                                <Stack
                                    direction={'row'}
                                    alignItems={'center'}
                                    justifyContent={'space-between'}
                                >
                                    <Typography variant={'bodyLarge'}>Add Items</Typography>
                                    <IconButton onClick={openAddDialog}>
                                        <MdAdd />
                                    </IconButton>
                                </Stack>
                                <Grid container maxWidth={'100%'} flexWrap={'wrap'} gap={1}>
                                    {item?.map((item, index) => (
                                        <DataChip
                                            key={index}
                                            name={item.name}
                                            image={item.images[0]}
                                        />
                                    ))}
                                </Grid>
                            </>
                        )}
                    </Stack>
                    <Stack mb={1}>
                        <Typography variant={'labelLarge'} mb={1}>
                            Select Category
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
                            Offer Status
                        </Typography>
                        <Select
                            {...register('status')}
                            defaultValue={newProduct.status}
                            onChange={handleChange}
                            name='status'
                        >
                            {statusOptions.map((option) => (
                                <MenuItem key={option.key} value={option.value}>
                                    {option.key}
                                </MenuItem>
                            ))}
                        </Select>
                    </Stack>
                    <Stack mb={1}>
                        <Typography variant={'labelLarge'} mb={1}>
                            Discount in %
                        </Typography>
                        <TextField
                            {...register('discountAmount')}
                            onChange={handleChange}
                            name='discountAmount'
                            placeholder={'e.g 5%'}
                        ></TextField>
                    </Stack>
                    <Stack mb={1}>
                        <Typography variant={'labelLarge'} mb={1}>
                            Maximum Purchase Amount
                        </Typography>
                        <TextField
                            {...register('maxPurchaseAmount')}
                            onChange={handleChange}
                            name='maxPurchaseAmount'
                            placeholder={'e.g $1000'}
                        ></TextField>
                    </Stack>
                    <Stack mb={1}>
                        <Typography variant={'labelLarge'} mb={1}>
                            Min. Purchase Amount
                        </Typography>
                        <TextField
                            {...register('minPurchaseAmount')}
                            onChange={handleChange}
                            name='minPurchaseAmount'
                            placeholder={'e.g $100'}
                        ></TextField>
                    </Stack>
                </Stack>
                <Stack
                    mt={1}
                    mb={1}
                    sx={{
                        cursor: 'pointer',
                        border: '1px dashed #567F6D',
                        padding: '8px',
                        borderRadius: '4px',
                    }}
                >
                    {customers?.length === 0 && (
                        <Typography align={'center'} onClick={openCustomerAddDialog}>
                            Add Customer
                        </Typography>
                    )}

                    {customers?.length > 0 && (
                        <>
                            <Stack
                                direction={'row'}
                                alignItems={'center'}
                                justifyContent={'space-between'}
                            >
                                <Typography variant={'bodyLarge'}>Add Items</Typography>
                                <IconButton onClick={openAddDialog}>
                                    <MdAdd />
                                </IconButton>
                            </Stack>
                            <Grid container maxWidth={'100%'} flexWrap={'wrap'} gap={1}>
                                {customers?.map((item, index) => (
                                    <DataChip key={index} name={item.name} image={item.image} />
                                ))}
                            </Grid>
                        </>
                    )}
                </Stack>
                <Stack direction='row' justifyContent='flex-end'>
                    <Button
                        type='submit'
                        variant='contained'
                        startIcon={<SaveOutlinedIcon />}
                        onClick={handleSaveData}
                    >
                        Save
                    </Button>
                </Stack>
                <ModalAdd
                    handleClose={handleClose}
                    open={AddDialogOpen}
                    type={'product'}
                    data={productData}
                    setItem={setItem}
                    item={item}
                />
                <ModalAdd
                    open={customerAddDialog}
                    handleClose={handleClose}
                    type={'customer'}
                    data={customerData}
                    setItem={setCustomers}
                    item={customers}
                />
            </form>
        </Stack>
    );
};

export default AddOffer;
