import React, { useState } from 'react';
import { Avatar, Button, Stack, TextField } from '@mui/material';
import Typography from '@mui/material/Typography';
import manager from '../../data/ManagerProfile';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import StaffDetails from '../../components/NavbarComponents/StaffDetails';
import EditManagerProfile from '../../components/ManagerProfile/EditManagerProfile';

const AddressInfo = ({ label, value }) => {
    return (
        <Stack mb={4}>
            <Typography variant={'titleMedium'} color={'primary.200'}>
                {label}
            </Typography>
            <TextField
                value={value}
                InputProps={{
                    readOnly: true,
                }}
                variant='standard'
            />
        </Stack>
    );
};

const ManagerProfile = () => {
    const formatDate = (dateString) => {
        const options = { month: 'long', day: 'numeric', year: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };
    // drawer start
    const [isEditManagerOpen, setEditManagerOpen] = useState(false);
    const [isStaffDetailsOpen, setStaffDetailsOpen] = useState(false);
    const [staff, setStaff] = useState(null);

    const toggleEditManagerDrawer = (open) => () => {
        setEditManagerOpen(open);
    };

    const toggleStaffDetailsDrawer = (open) => () => {
        setStaffDetailsOpen(open);
    };
    const staffDrawer = (staff, open) => {
        setStaff(staff);
        setStaffDetailsOpen(open);
    };

    // drawer end
    return (
        <Stack sx={{ backgroundColor: 'background.main' }}>
            {/* Profile Info */}
            <Stack
                direction={'row'}
                justifyContent={'space-between'}
                alignItems={'center'}
                spacing={2}
                sx={{ backgroundColor: 'white.main' }}
                className='m-4 p-4 rounded-xl'
            >
                {/* Profile Picture and Details */}
                <Stack direction={'row'} alignItems={'center'} spacing={2}>
                    <Avatar src={manager.image} sx={{ width: '100px', height: '100px' }} />
                    <Stack>
                        <Typography variant={'titleLarge'}>
                            {`${manager.firstName} ${manager.lastName}`}
                        </Typography>
                        <Typography variant={'bodySmall'} color={'sc.two'}>
                            Role <span style={{ color: '#006C4A' }}>{manager.role}</span>
                        </Typography>
                        <Typography variant={'bodySmall'} color={'sc.two'}>
                            Location
                        </Typography>
                    </Stack>
                </Stack>
                {/* Edit Button */}
                <Stack>
                    <Button
                        startIcon={<BorderColorOutlinedIcon />}
                        variant={'contained'}
                        onClick={toggleEditManagerDrawer(true)}
                    >
                        Edit
                    </Button>
                </Stack>
            </Stack>

            {/* Store Info */}
            <Stack
                direction={'row'}
                justifyContent={'space-between'}
                alignItems={'center'}
                gap={2}
                sx={{ backgroundColor: 'white.main' }}
                className='m-4 p-4 rounded-xl'
            >
                {/* Store First Started */}
                <Stack
                    direction={'row'}
                    p={2}
                    spacing={2}
                    sx={{ borderLeft: '4px solid #EEEEEE', borderRadius: '10px', flex: 1 }}
                >
                    <img src='https://i.ibb.co/6wSydds/calendar-1.png' alt='Calendar Icon' />

                    <Stack gap={1} justifyContent={'center'}>
                        <Typography variant={'labelLarge'} color={'primary.8 00'}>
                            Store First Started
                        </Typography>
                        <Typography variant={'titleLarge'} color={'primary.500'}>
                            {formatDate(manager.storeStarted)}
                        </Typography>
                    </Stack>
                </Stack>
                {/* Total Revenue */}
                <Stack
                    direction={'row'}
                    spacing={2}
                    p={2}
                    sx={{ borderLeft: '4px solid #EEEEEE', borderRadius: '10px', flex: 1 }}
                >
                    <img src='https://i.ibb.co/f0DdZtm/shopping-1.png' alt='Shopping Icon' />
                    <Stack gap={1} justifyContent={'center'}>
                        <Typography variant={'labelLarge'} color={'primary.8 00'}>
                            Total Revenue
                        </Typography>
                        <Typography variant={'titleLarge'} color={'primary.500'}>
                            ${manager.totalRevenue}
                        </Typography>
                    </Stack>
                </Stack>
            </Stack>

            {/* Personal Information */}
            <Stack gap={2} sx={{ backgroundColor: 'white.main' }} className='m-4 p-4 rounded-xl'>
                <Typography>Personal Information</Typography>
                <Stack direction={'row'} justifyContent={'space-between'} gap={6}>
                    {/* Reusable AddressInfo Component */}
                    <Stack direction={'column'} sx={{ flex: 1 }}>
                        <AddressInfo label='First Name' value={manager.firstName} />
                        <AddressInfo label='Position' value={manager.role} />
                        <AddressInfo label='Email' value={manager.email} />
                    </Stack>
                    <Stack direction={'column'} sx={{ flex: 1 }}>
                        <AddressInfo label='Last Name' value={manager.lastName} />
                        <AddressInfo label='Date of Birth' value={manager.dateOfBirth} />
                        <AddressInfo label='Phone' value={manager.phone} />
                    </Stack>
                </Stack>
            </Stack>

            <Stack direction={'row'}>
                {/* Address */}
                <Stack
                    gap={2}
                    sx={{ backgroundColor: 'white.main', flex: 1 }}
                    className='m-4 p-4 rounded-xl'
                >
                    <Typography>Address</Typography>
                    <Stack direction={'row'} justifyContent={'space-between'} gap={6}>
                        {/* Reusable AddressInfo Component */}
                        <Stack direction={'column'} sx={{ flex: 1 }}>
                            <AddressInfo label='Country' value={manager?.address?.country} />
                            <AddressInfo label='Street' value={manager?.address?.street} />
                        </Stack>
                        <Stack direction={'column'} sx={{ flex: 1 }}>
                            <AddressInfo label='City' value={manager?.address?.city} />
                            <AddressInfo label='Post Code' value={manager?.address?.postcode} />
                        </Stack>
                    </Stack>
                </Stack>
                {/* Staff */}
                <Stack direction={'row'} sx={{ flex: 1 }}>
                    <Stack
                        gap={2}
                        sx={{ backgroundColor: 'white.main', flex: 1 }}
                        className='m-4 p-4 rounded-xl'
                    >
                        <Typography>My Staffs</Typography>
                        {manager.staff.map((staff, index) => {
                            return (
                                <Stack
                                    key={index}
                                    direction={'row'}
                                    gap={2}
                                    bgcolor={'sc.one'}
                                    p={1}
                                    width={'100%'}
                                    px={2}
                                    sx={{ borderRadius: '10px', cursor: 'pointer' }}
                                    onClick={() => staffDrawer(staff, true)}
                                >
                                    <Stack>
                                        <img
                                            src={staff.image}
                                            width={'40px'}
                                            height={'40px'}
                                            style={{
                                                borderRadius: '6px',
                                            }}
                                        />
                                    </Stack>
                                    <Stack>
                                        <Typography variant={'labelLarge'} color={'primary.700'}>
                                            {staff.name}
                                        </Typography>
                                        <Typography variant={'labelSmall'} color={'primary.100'}>
                                            {staff.role}
                                        </Typography>
                                    </Stack>
                                </Stack>
                            );
                        })}
                    </Stack>
                </Stack>
            </Stack>

            {/* Edit Manager Drawer */}
            <Drawer
                anchor='right'
                open={isEditManagerOpen}
                onClose={toggleEditManagerDrawer(false)}
            >
                <EditManagerProfile manager={manager} />
                {/*<Box sx={{ width: 484, p: 2 }}>*/}
                {/*    */}
                {/*    <Typography>Edit Manager Details</Typography>*/}
                {/*</Box>*/}
            </Drawer>

            {/* Staff Details Drawer */}
            <Drawer
                anchor='right'
                open={isStaffDetailsOpen}
                onClose={toggleStaffDetailsDrawer(false)}
            >
                <Box sx={{ width: 484, p: 2 }}>
                    {/* Add  staff details content here */}
                    <StaffDetails staff={staff} />
                </Box>
            </Drawer>
        </Stack>
    );
};

export default ManagerProfile;
