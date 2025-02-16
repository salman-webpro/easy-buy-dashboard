import { useEffect } from 'react';
import { Avatar, Select, Stack, TextField, Typography } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import MenuItem from '@mui/material/MenuItem';
import { CiExport, CiImport } from 'react-icons/ci';
import Divider from '@mui/material/Divider';

const LeftLayout = ({ staffs, setSelectedStaff, selectedStaff }) => {
    useEffect(() => {
        if (!selectedStaff && staffs.length > 0) {
            setSelectedStaff(staffs[0]);
        }
    }, [staffs, selectedStaff, setSelectedStaff]);

    return (
        <Stack width='100%' backgroundColor='#EBF0EE'>
            <Stack>
                <TextField
                    id='outlined-start-adornment'
                    sx={{
                        m: 1,
                        width: '94%',
                        padding: '10px, 48px, 10px, 10px',
                        font: 'bodyMedium',
                        borderRadius: '4px',
                    }}
                    placeholder='Search by App ID, Name, Email'
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position='start'>
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}
                />
                <Stack direction={'row'} gap={1} p={1}>
                    <Select value={'all'} sx={{ flex: '1', height: '48px' }}>
                        <MenuItem value={'all'}>All Staffs</MenuItem>
                        <Divider />
                        <MenuItem value={'manager'}>Manager</MenuItem>
                        <Divider />
                        <MenuItem value={'posOperator'}>POS Operator</MenuItem>
                        <Divider />
                        <MenuItem value={'storeKeeper'}>Store Keeper</MenuItem>
                        <Divider />
                        <MenuItem value={'salesPerson'}>Sales Person</MenuItem>
                    </Select>
                </Stack>
            </Stack>

            <Stack>
                <Stack
                // sx={{
                //     overflowY: 'auto', // Enable vertical scrolling
                //     maxHeight: '81vh', // Set a maximum height
                //     '&::-webkit-scrollbar': {
                //         width: '0.5em', // Adjust the width of the scrollbar
                //     },
                //     '&::-webkit-scrollbar-thumb': {
                //         backgroundColor: 'transparent', // Set the color of the thumb
                //     },
                // }}
                >
                    {staffs.map((staff, index) => (
                        <Stack
                            direction={'row'}
                            alignItems={'center'}
                            justifyContent={'start'}
                            key={index}
                            gap={2}
                            onClick={() => setSelectedStaff(staff)}
                            className={`${
                                staff === selectedStaff ? 'bg-[#FFFFFF]' : 'bg-[#EBF0EE]'
                            }`}
                            sx={{
                                cursor: 'pointer',
                                width: '100%',
                                marginLeft: '20px',
                                padding: '16px',
                                borderRadius: '8px 0px 0px 8px',
                            }}
                        >
                            <Avatar
                                variant='square'
                                src={staff.image}
                                sx={{ borderRadius: '4px' }}
                            />

                            <Stack>
                                <Typography variant='labelLarge' color='primary.500'>
                                    {staff.name}
                                </Typography>
                                <Typography variant='labelSmall' color='primary.100'>
                                    {staff.position}
                                </Typography>
                            </Stack>
                        </Stack>
                    ))}
                </Stack>
            </Stack>
        </Stack>
    );
};

export default LeftLayout;
