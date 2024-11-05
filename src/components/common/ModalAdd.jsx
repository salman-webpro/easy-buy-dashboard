import React from 'react';
import { Button, Dialog, DialogActions, Stack, Typography } from '@mui/material';
import DialogContent from '@mui/material/DialogContent';
import ProductSearch from '../InventoryComponents/ProductSearch';
import ShortTables from './ShortTables';

const ModalAdd = ({ open, handleClose, type, data, setItem, item }) => {
    const handleSearchChange = (query) => {
        console.log('🚀~ ModalAdd:11 ~ ', query);
    };
    const handleSaveData = () => {
        console.log('🚀~ ModalAdd:12 ~ ', item);
        localStorage.setItem(type, JSON.stringify(item));
        handleClose();
    };
    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                maxWidth='xs'
                fullWidth
                sx={{
                    '& .MuiPaper-root': {
                        borderRadius: '10px',
                        padding: '0px',
                    },
                }}
            >
                <DialogContent fullWidth>
                    <Typography variant={'titleMedium'} color={'primary.700'}>
                        {type === 'customer' ? 'Add Customers' : 'Add Items'}
                    </Typography>
                    <Stack mt={0.5}>
                        <ProductSearch
                            handleSearchChange={handleSearchChange}
                            placeholder={type === 'customer' ? 'Search Customers' : 'Search Items'}
                            width={'100%'}
                        />
                    </Stack>
                    <Stack>
                        <ShortTables data={data} type={type} setItem={setItem} />
                    </Stack>
                </DialogContent>
                <DialogActions>
                    <Button
                        variant={'contained'}
                        sx={{
                            borderRadius: '8px',
                            padding: '10px 20px',
                            marginBottom: '10px',
                        }}
                        onClick={handleSaveData}
                    >
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default ModalAdd;
