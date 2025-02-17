import React, { useEffect, useState } from 'react';
import { Stack, TextField, Typography, Select, IconButton } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { MdOutlineFileUpload } from 'react-icons/md';

const CampaignLeftLayout = ({ campaigns, setSelectedCampaign, selectedCampaign }) => {
    const [dateSearch, setDateSearch] = useState();
    useEffect(() => {
        if (!selectedCampaign && campaigns.length > 0) {
            setSelectedCampaign(campaigns[0]);
        }
    }, [campaigns, selectedCampaign, setSelectedCampaign]);

    return (
        <Stack width='100%' backgroundColor='#EBF0EE' height={'100vh'}>
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
                </Stack>
            </Stack>
            {/*  */}
            <Stack>
                <Stack>
                    {campaigns.map((campaign, index) => (
                        <Stack
                            direction={'row'}
                            alignItems={'center'}
                            justifyContent={'start'}
                            key={index}
                            gap={2}
                            onClick={() => setSelectedCampaign(campaign)}
                            className={`cursor-pointer ${
                                campaign === selectedCampaign ? 'bg-[#FFFFFF]' : 'bg-[#EBF0EE]'
                            }`}
                            sx={{
                                marginLeft: '20px',
                                padding: '16px',
                                borderRadius: '8px 0px 0px 8px',
                            }}
                        >
                            {/* <Avatar
                                variant='square'
                                src={campaign.image}
                                sx={{ borderRadius: '4px' }}
                            /> */}

                            <Stack>
                                <Typography variant='labelLarge' color='primary.800'>
                                    {campaign.campaignName}
                                </Typography>
                                {/* <Typography variant='labelSmall' color='positive.main'>
                                    {`Discount: ${campaign.discount}%`}
                                </Typography> */}
                            </Stack>
                        </Stack>
                    ))}
                </Stack>
            </Stack>
            {/*  */}
        </Stack>
    );
};

export default CampaignLeftLayout;
