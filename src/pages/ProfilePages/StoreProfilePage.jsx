import React, { useState } from 'react';
import { Avatar, Button, Grid, Stack, TextField } from '@mui/material';
import Typography from '@mui/material/Typography';
import store from '../../data/StoreProfile';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import Box from '@mui/material/Box';
import TotalEarning from '../../components/common/TotalEarning';
import TotalConsumers from '../../components/common/TotalConsumers';
import PositionBox from '../../components/common/PositionBox';
import Drawer from '@mui/material/Drawer';
import EditStoreProfile from '../../components/storeProfile/EditStoreProfile';
import DataTable from '../../components/storeProfile/StoreCustomerTable';
import cover from '../../assets/images/cover.png';
import AdsModalLogo from '../../assets/images/adsModalLogo.png';
import AdsDialogs from '../../components/common/AdsDialog';
const headers = [
    { label: 'Customer name', key: 'name' },
    { label: 'App ID', key: 'id' },
    { label: 'Email', key: 'email' },
    { label: 'Total Spending', key: 'total' },
];
const FieldItem = ({ label, value }) => {
    return (
        <Stack mb={4}>
            <Typography sx={{ color: 'green' }}>{label}</Typography>
            <TextField
                value={value}
                InputProps={{
                    readOnly: true,
                }}
                variant='standard'
                // disabled
                sx={{ color: '#000' }}
            />
        </Stack>
    );
};
const StoreProfilePage = () => {
    // drawer start
    const [isEditStoreOpen, setEditStoreOpen] = useState(false);
    // drawer start
    const [isStaffDetailsOpen, setStaffDetailsOpen] = useState(false);
    const [staff, setStaff] = useState(null);
    const [open, setOpen] = useState(false);
    const [step, setStep] = useState(1);
    const toggleEditStoreDrawer = (open) => () => {
        setEditStoreOpen(open);
    };
    const handleUpdate = () => () => {
        console.log('modal');
        setEditStoreOpen(false);
    };
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <>
            <Stack sx={{ backgroundColor: 'background.main' }}>
                <Box className='mx-4 my-2 rounded-xl'>
                    <img src={cover} alt={`cover`} />
                </Box>
                {/* Store Profile Info */}
                <Stack
                    direction={'row'}
                    justifyContent={'space-between'}
                    alignItems={'center'}
                    spacing={2}
                    sx={{ backgroundColor: 'white.main' }}
                    className='mx-4 my-2 p-4 rounded-xl'
                >
                    {/*Store Profile Picture and Details */}
                    <Stack direction={'row'} alignItems={'center'} spacing={2}>
                        <Avatar src={store?.image} sx={{ width: '60px', height: '60px' }} />
                        <Stack>
                            <Typography variant={'titleLarge'}>{store?.storeName}</Typography>

                            <Typography variant={'bodySmall'} color={'sc.two'}>
                                {store?.location}
                            </Typography>
                        </Stack>
                    </Stack>
                    {/* Edit Button */}
                    <Stack>
                        <Button
                            startIcon={<BorderColorOutlinedIcon />}
                            variant={'contained'}
                            onClick={toggleEditStoreDrawer(true)}
                        >
                            Edit
                        </Button>
                    </Stack>
                </Stack>
                <Stack
                    direction={'row'}
                    justifyContent={'space-between'}
                    alignItems={'center'}
                    spacing={2}
                    sx={{ backgroundColor: 'white.main' }}
                    className='mx-4 my-2 p-4 rounded-xl'
                >
                    {/*Store Summary Details */}
                    <Grid container columnSpacing={{ xs: 1, sm: 1, md: 2 }}>
                        <Grid item xs={12} sm={4} md={4} pl={0} spacing={0}>
                            <TotalEarning earning={store?.earning} />
                        </Grid>
                        <Grid item xs={12} sm={4} md={4}>
                            <TotalConsumers consumers={store?.consumers} />
                        </Grid>
                        <Grid item xs={12} sm={4} md={4}>
                            <PositionBox from={'store'} handleClickOpen={handleClickOpen} />
                            <AdsDialogs
                                handleClose={handleClose}
                                open={open}
                                titleImage={AdsModalLogo}
                                step={step}
                                setStep={setStep}
                            />
                        </Grid>
                    </Grid>
                </Stack>

                {/* Store Information */}
                <Stack
                    gap={2}
                    sx={{ backgroundColor: 'white.main' }}
                    className='m-4 p-4 rounded-xl'
                >
                    <Typography>Store Information</Typography>
                    <Stack direction={'row'} justifyContent={'space-between'} gap={6}>
                        {/* Reusable AddressInfo Component */}
                        <Stack direction={'column'} sx={{ flex: 1 }}>
                            <FieldItem label='Store Name' value={store?.storeName} />
                            <FieldItem label='Email' value={store.email} />
                            <FieldItem label='Opening Time' value={store.openingTime} />
                            <FieldItem label='Address' value={store.storeAddress} />
                        </Stack>
                        <Stack direction={'column'} sx={{ flex: 1 }}>
                            <FieldItem label='Slogan' value={store.slogan} />
                            <FieldItem label='Phone Number' value={store.phone} />
                            <FieldItem label='Closinf' value={store.closingTime} />
                        </Stack>
                    </Stack>
                </Stack>
                {/* Visited Customer */}
                <Stack
                    gap={2}
                    sx={{ backgroundColor: 'white.main' }}
                    className='m-4 p-4 rounded-xl'
                >
                    <Typography>Frequently Visited Customer's</Typography>
                    <DataTable headers={headers} data={store?.customers} />
                </Stack>
                {/* Edit Manager Drawer */}
                {/* <Drawer
                    anchor='right'
                    open={isEditStoreOpen}
                    onClose={toggleEditStoreDrawer(false)}
                >
                    <EditStoreProfile store={store} toggleEditStoreDrawer={toggleEditStoreDrawer} />
                </Drawer> */}
            </Stack>
        </>
    );
};

export default StoreProfilePage;
