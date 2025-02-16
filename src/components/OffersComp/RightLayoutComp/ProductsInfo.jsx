import React, { useState } from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    Grid,
    Stack,
    Typography,
} from '@mui/material';
import ModalAdd from '../../common/ModalAdd';
import productData from '../../../data/Product';
const ProductsInfo = ({ selectedOffer }) => {
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
            <Typography variant='titleLarge' color={'primary.500'}>
                Product Info
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
                        Items
                    </Typography>
                    <Typography variant={'headlineMedium'} color={'primary.100'}>
                        {selectedOffer?.items.length}
                    </Typography>
                </Stack>
                <Stack>
                    <Button variant={'contained'} onClick={openAddDialog}>
                        Add
                    </Button>
                </Stack>
            </Stack>
            <Stack spacing={5}>
                {selectedOffer?.items.map((item, index) => {
                    return (
                        <Stack key={index} direction={'row'} alignItems={'center'} spacing={1}>
                            <img src={item.images} alt={item.name} width={50} height={50} />
                            <Typography variant='bodyMedium'>{item.name}</Typography>
                        </Stack>
                    );
                })}
            </Stack>

            <ModalAdd
                handleClose={handleClose}
                open={AddDialogOpen}
                type={'product'}
                data={productData}
            />
        </Stack>
    );
};
export default ProductsInfo;
