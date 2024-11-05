import React, { useRef, useState } from 'react';
import { Stack, TextField, Typography } from '@mui/material';
import image from '../../../src/assets/images/account_circle.png';
import Button from '@mui/material/Button';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import { useForm } from 'react-hook-form';

const AddStaff = ({ selectedStaff, toggleAddDrawer }) => {
    const { register, handleSubmit } = useForm();
    const [selectedImage, setSelectedImage] = useState(selectedStaff?.image || image);
    const fileInputRef = useRef(null);

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
                    <Stack backgroundColor='primary.100' mb={1} borderRadius={'50%'}>
                        <img
                            src={selectedImage ? selectedImage : image}
                            alt='User'
                            style={{
                                height: '160px',
                                width: '160px',
                                borderRadius: '50%',
                                objectFit: 'cover',
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
                    <Stack
                        direction='row'
                        justifyContent='space-between'
                        alignItems='center'
                        spacing={2}
                    >
                        <Stack width='100%'>
                            <Typography variant={'labelLarge'} color='primary.800'>
                                First Name
                            </Typography>
                            <TextField
                                placeholder='ex. John'
                                fullWidth
                                defaultValue={selectedStaff?.name.split(' ')[0]}
                            />
                        </Stack>
                        <Stack width='100%'>
                            <Typography variant={'labelLarge'} color='primary.800'>
                                Last Name
                            </Typography>
                            <TextField
                                placeholder='ex. Smith'
                                fullWidth
                                defaultValue={selectedStaff?.name.split(' ')[1]}
                            />
                        </Stack>
                    </Stack>
                    <Stack width='100%'>
                        <Typography variant={'labelLarge'} color='primary.800'>
                            Role
                        </Typography>
                        <TextField
                            placeholder='ex. Manager'
                            fullWidth
                            defaultValue={selectedStaff?.position}
                        />
                    </Stack>
                    <Stack width='100%'>
                        <Typography variant={'labelLarge'} color='primary.800'>
                            Email
                        </Typography>
                        <TextField
                            placeholder='ex. smith@gmail.com'
                            fullWidth
                            defaultValue={selectedStaff?.email}
                        />
                    </Stack>
                    <Stack width='100%'>
                        <Typography variant={'labelLarge'} color='primary.800'>
                            Gender
                        </Typography>
                        <TextField
                            placeholder='ex. Male'
                            fullWidth
                            defaultValue={selectedStaff?.gender}
                        />
                    </Stack>
                    <Stack width='100%'>
                        <Typography variant={'labelLarge'} color='primary.800'>
                            Phone Number
                        </Typography>
                        <TextField
                            placeholder='ex. +1 123 456 789'
                            fullWidth
                            defaultValue={selectedStaff?.phone}
                        />
                    </Stack>
                    <Stack width='100%'>
                        <Typography variant={'labelLarge'} color='primary.800'>
                            Address
                        </Typography>
                        <TextField
                            placeholder='ex. 123 Main St, Anytown, USA'
                            fullWidth
                            defaultValue={
                                selectedStaff
                                    ? `${selectedStaff?.address?.street}, ${selectedStaff?.address?.city}, ${selectedStaff?.address?.country}`
                                    : null
                            }
                        />
                    </Stack>
                </Stack>

                <Stack direction='row' justifyContent='flex-end' mt={2}>
                    <Button
                        onClick={toggleAddDrawer}
                        type='submit'
                        variant='contained'
                        startIcon={<SaveOutlinedIcon />}
                    >
                        Save
                    </Button>
                </Stack>
            </form>
        </Stack>
    );
};

export default AddStaff;
