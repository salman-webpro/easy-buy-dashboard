import React, { useState } from 'react';
import { Button, Stack, TextField, Typography } from '@mui/material';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import IconButton from '@mui/material/IconButton';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';

const EditManagerProfile = ({ manager }) => {
    const [selectedImage, setSelectedImage] = useState(null);

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
    return (
        <Stack
            sx={{ width: { md: '484px', xs: '100%' } }}
            direction={'column'}
            justifyContent={'space-between'}
            p={2}
            mt={2}
        >
            <Stack>
                <Stack style={{ position: 'relative', alignItems: 'center' }} gap={2}>
                    <IconButton
                        size={'small'}
                        variant='contained'
                        sx={{
                            position: 'absolute',
                            bottom: -8,
                            right: 160,
                        }}
                        component='label'
                    >
                        <FileUploadOutlinedIcon color={'white'} />
                        <input
                            type='file'
                            accept='image/*'
                            onChange={handleFileChange}
                            style={{ display: 'none' }}
                        />
                    </IconButton>
                    <img
                        src={selectedImage || manager.image}
                        style={{ width: 120, height: 120, borderRadius: '6px' }}
                    />
                </Stack>
                <Stack gap={1} mt={2}>
                    <Stack>
                        <Typography variant={'labelLarge'} color={'primary.800'}>
                            First Name
                        </Typography>
                        <TextField defaultValue={manager.firstName} />
                    </Stack>
                    <Stack>
                        <Typography variant={'labelLarge'} color={'primary.800'}>
                            Last Name
                        </Typography>
                        <TextField defaultValue={manager.lastName} />
                    </Stack>
                    <Stack>
                        <Typography variant={'labelLarge'} color={'primary.800'}>
                            Phone
                        </Typography>
                        <TextField defaultValue={manager.phone} />
                    </Stack>
                    <Stack>
                        <Typography variant={'labelLarge'} color={'primary.800'}>
                            Address
                        </Typography>
                        <TextField defaultValue={manager.address.street} />
                    </Stack>
                </Stack>
            </Stack>
            <Stack direction='row' justifyContent='flex-end' mt={4}>
                <Button type='submit' variant='contained' startIcon={<SaveOutlinedIcon />}>
                    Save
                </Button>
            </Stack>
        </Stack>
    );
};

export default EditManagerProfile;
