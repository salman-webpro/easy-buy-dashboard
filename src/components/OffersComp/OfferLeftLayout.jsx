import React, { useEffect } from 'react';
import { Stack, Tab, Tabs, TextField, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import Box from '@mui/material/Box';
import * as PropTypes from 'prop-types';

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role='tabpanel'
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box mb={2}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const OfferLeftLayout = ({ OfferData, setSelectedOffer, selectedOffer }) => {
    const [value, setValue] = React.useState(0);
    // Set the initial state to the first staff member in the array
    useEffect(() => {
        if (value === 0) {
            setSelectedOffer(activeOffers[0]);
        }
        if (value === 1) {
            setSelectedOffer(expiredOffers[0]);
        }
    }, [value]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    let activeOffers = OfferData.filter((offer) => offer.offerStatus === 'Active');
    let expiredOffers = OfferData.filter((offer) => offer.offerStatus === 'Expired');
    return (
        <Stack width='100%' backgroundColor='#EBF0EE'>
            <Stack>
                <Box sx={{ width: '100%', backgroundColor: '#EBF0EE' }} mt={2}>
                    <Box
                        sx={{
                            border: 1,
                            borderColor: 'primary.100',
                            borderRadius: '8px',
                            backgroundColor: 'primary.50',
                            margin: '8px',
                        }}
                    >
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            aria-label='basic tabs example'
                            TabIndicatorProps={{
                                sx: {
                                    height: '4px !important',
                                    borderRadius: '10px 10px 0 0',
                                },
                            }}
                            centered
                        >
                            <Tab
                                label='Active'
                                {...a11yProps(0)}
                                sx={{
                                    '&.MuiButtonBase-root.MuiTab-root': {
                                        textTransform: 'none',
                                        color: value === 0 ? 'primary.800' : 'sc.two',
                                    },
                                }}
                            />
                            <Tab
                                label='Expired'
                                {...a11yProps(1)}
                                sx={{
                                    '&.MuiButtonBase-root.MuiTab-root': {
                                        textTransform: 'none',
                                        color: value === 1 ? 'primary.800' : 'sc.two',
                                    },
                                }}
                            />
                        </Tabs>
                    </Box>
                </Box>
                <Stack
                    direction={'row'}
                    gap={1}
                    p={1}
                    sx={{ backgroundColor: 'white.main', padding: 2 }}
                    mb={3}
                >
                    <Stack
                        justifyContent={'center'}
                        alignItems={'center'}
                        width={'70%'}
                        sx={{
                            backgroundColor: 'background.main',
                            padding: '5px 30px',
                            borderRadius: '4px',
                        }}
                        spacing={2}
                    >
                        <Typography variant={'headlineSmall'} color={'primary.800'}>
                            {value === 0 ? activeOffers.length : expiredOffers.length}
                        </Typography>
                        <Typography variant={'titleMedium'} color={'primary.400'}>
                            {value === 0 ? 'Active' : 'Expired'} Offers
                        </Typography>
                    </Stack>
                    <Stack
                        direction={'row'}
                        gap={1}
                        justifyContent={'end'}
                        alignItems={'center'}
                        width={'30%'}
                    >
                        <IconButton
                            sx={{
                                border: '1px solid',
                                borderRadius: '10px',
                                '&:hover': {
                                    bgcolor: 'primary.600',
                                    color: 'sc.one',
                                },
                            }}
                        >
                            <FileUploadOutlinedIcon />
                        </IconButton>
                    </Stack>
                </Stack>
            </Stack>

            <CustomTabPanel value={value} index={0}>
                <Stack>
                    {activeOffers.map((offer, index) => (
                        <Stack
                            direction={'row'}
                            alignItems={'center'}
                            justifyContent={'start'}
                            key={index}
                            gap={2}
                            onClick={() => setSelectedOffer(offer)}
                            className={`cursor-pointer ${
                                offer === selectedOffer ? 'bg-[#FFFFFF]' : 'bg-[#EBF0EE]'
                            }`}
                            sx={{
                                marginLeft: '20px',
                                padding: '16px',
                                borderRadius: '8px 0px 0px 8px',
                            }}
                        >
                            <Stack>
                                <Typography variant='labelLarge' color='primary.800'>
                                    {offer.OfferName} {offer.offerID}
                                </Typography>
                            </Stack>
                        </Stack>
                    ))}
                </Stack>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <Stack>
                    {expiredOffers.map((offer, index) => (
                        <Stack
                            direction={'row'}
                            alignItems={'center'}
                            justifyContent={'start'}
                            key={index}
                            gap={2}
                            onClick={() => setSelectedOffer(offer)}
                            className={`cursor-pointer ${
                                offer === selectedOffer ? 'bg-[#FFFFFF]' : 'bg-[#EBF0EE]'
                            }`}
                            sx={{
                                marginLeft: '20px',
                                padding: '16px',
                                borderRadius: '8px 0px 0px 8px',
                            }}
                        >
                            <Stack>
                                <Typography variant='labelLarge' color='primary.800'>
                                    {offer.OfferName} {offer.offerID}
                                </Typography>
                            </Stack>
                        </Stack>
                    ))}
                </Stack>
            </CustomTabPanel>
        </Stack>
    );
};

export default OfferLeftLayout;
