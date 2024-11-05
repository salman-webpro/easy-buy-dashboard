import React, { useState } from 'react';
import { Avatar, Button, Grid, Stack, Typography } from '@mui/material';
import ModalAdd from '../../common/ModalAdd';
import customerData from '../../../data/CustomerData';
const CustomerInfo = ({ selectedOffer }) => {
    const [AddDialogOpen, setAddDialogOpen] = useState(false);
    const openAddDialog = () => {
        setAddDialogOpen(true);
    };
    const handleClose = () => {
        setAddDialogOpen(false);
    };

    return (
        <Stack
            width={'100%'}
            p={2}
            backgroundColor='white.main'
            sx={{ borderRadius: '10px' }}
            spacing={2}
        >
            <Typography variant='titleLarge' color={'primary.800'}>
                Customer Info
            </Typography>
            <Stack
                sx={{ backgroundColor: 'primary.50', borderRadius: '8px' }}
                padding={'20px'}
                justifyContent={'space-between'}
                alignItems={'center'}
                direction={'row'}
            >
                <Stack spacing={2}>
                    <Typography variant={'titleLarge'} color={'primary.800'}>
                        Customers
                    </Typography>
                    <Typography variant={'headlineMedium'} color={'primary.700'}>
                        {selectedOffer?.customers?.length}
                    </Typography>
                </Stack>
                <Stack>
                    <Button variant={'contained'} onClick={openAddDialog}>
                        Add{' '}
                    </Button>
                </Stack>
            </Stack>
            <Stack spacing={5}>
                {selectedOffer?.customers?.map((item, index) => {
                    return (
                        <Stack key={index} direction={'row'} alignItems={'center'} spacing={1}>
                            <Avatar alt={item.name} src={item.images} variant='rounded' />
                            <Typography variant='bodyMedium'>{item.name}</Typography>
                        </Stack>
                    );
                })}
            </Stack>
            <ModalAdd
                open={AddDialogOpen}
                handleClose={handleClose}
                type={'customer'}
                data={customerData}
            />
        </Stack>
    );
};
export default CustomerInfo;
