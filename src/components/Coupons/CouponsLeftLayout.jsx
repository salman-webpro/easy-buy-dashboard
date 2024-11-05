import React, { useEffect, useState } from 'react';
import { Avatar, Select, Stack, TextField, Typography } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { MdOutlineFileUpload } from 'react-icons/md';

const CouponsLeftLayout = ({ coupons, setSelectedCoupon, selectedCoupon }) => {
    const [dateSearch, setDateSearch] = useState();

    useEffect(() => {
        if (!selectedCoupon && coupons.length > 0) {
            setSelectedCoupon(coupons[0]);
        }
    }, [coupons, selectedCoupon, setSelectedCoupon]);

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
                    placeholder='Search by Campaign ID, Name, Code'
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position='start'>
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}
                />
                <Stack direction={'row'} gap={1} p={1}>
                    <DatePicker
                        sx={{
                            width: '100%',
                            bgcolor: 'transparent',
                            borderRadius: '10px',
                        }}
                        value={dateSearch}
                        onChange={(newValue) => setDateSearch(newValue)}
                    />
                    {/*<Stack direction={'row'} gap={1} justifyContent={'end'} alignItems={'center'}>*/}
                    {/*    <IconButton*/}
                    {/*        sx={{*/}
                    {/*            border: '1px solid',*/}
                    {/*            borderRadius: '10px',*/}
                    {/*            '&:hover': {*/}
                    {/*                bgcolor: 'primary.600',*/}
                    {/*                color: 'sc.one',*/}
                    {/*            },*/}
                    {/*            height: '48px',*/}
                    {/*        }}*/}
                    {/*    >*/}
                    {/*        <FileUploadOutlinedIcon />*/}
                    {/*    </IconButton>*/}
                    {/*</Stack>*/}
                    <Stack direction={'row'} gap={1} justifyContent={'end'} alignItems={'center'}>
                        <IconButton
                            sx={{
                                border: '1px solid #005F40',
                                borderRadius: '10px',
                                color: '#005F40',
                                '&:hover': {
                                    bgcolor: 'primary.600',
                                    color: 'sc.two',
                                },
                                height: '44px',
                            }}
                        >
                            <MdOutlineFileUpload />
                        </IconButton>
                    </Stack>
                </Stack>
            </Stack>

            <Stack mt={1}>
                <Stack>
                    {coupons.map((coupon, index) => (
                        <Stack
                            direction={'row'}
                            alignItems={'center'}
                            justifyContent={'start'}
                            key={index}
                            gap={2}
                            onClick={() => setSelectedCoupon(coupon)}
                            className={`cursor-pointer ${
                                coupon === selectedCoupon ? 'bg-[#FFFFFF]' : 'bg-[#EBF0EE]'
                            }`}
                            sx={{
                                marginLeft: '20px',
                                padding: '16px',
                                borderRadius: '8px 0px 0px 8px',
                            }}
                        >
                            {/* <Avatar
                                variant='square'
                                src={coupon.image}
                                sx={{ borderRadius: '4px' }}
                            /> */}

                            <Stack>
                                <Typography variant='labelLarge' color='primary.800'>
                                    {coupon.name}
                                </Typography>
                                {/* <Typography variant='labelSmall' color='positive.main'>
                                    {`Discount: ${coupon.discount}%`}
                                </Typography> */}
                            </Stack>
                        </Stack>
                    ))}
                </Stack>
            </Stack>
        </Stack>
    );
};

export default CouponsLeftLayout;
