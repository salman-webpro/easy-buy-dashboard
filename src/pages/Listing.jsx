import React from 'react';
import { Badge, Stack, Tab, Tabs } from '@mui/material';
import Box from '@mui/material/Box';
import * as PropTypes from 'prop-types';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import Typography from '@mui/material/Typography';
// import { ListingsData, ordersData, orderDetailsData } from '../data';
import ListingsData from '../data/ListingData';
import ordersData from '../data/purchasing/orders';
import orderDetailsData from '../data/purchasing/orderDetails';
import WishlistTable from '../components/ListingComp/Wishlist/WishlistTable';
import PurchasingOrderTable from '../components/ListingComp/PurchasingOrder/PurchasingOrderTable';
import ListingTop from '../components/ListingComp/ListingTop';

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
                <Box sx={{ marginTop: 3 }}>
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

const Listing = () => {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Stack p={2}>
            <ListingTop />
            <Box sx={{ width: '100%' }} mt={2}>
                <Box
                    sx={{
                        border: 1,
                        borderColor: 'primary.500',
                        borderRadius: '8px',
                        backgroundColor: 'white.main',
                        position: 'relative', //  Badge can be positioned relative to this box
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
                            label={
                                <Badge color='red' variant='dot' invisible={false}>
                                    WishList
                                </Badge>
                            }
                            {...a11yProps(0)}
                            sx={{
                                position: 'absolute',
                                left: '25%',
                                '&.MuiButtonBase-root.MuiTab-root': {
                                    textTransform: 'none',
                                },
                            }}
                        />

                        <Tab
                            label={
                                <Badge color='red' variant='dot' invisible={false}>
                                    Purchasing order
                                </Badge>
                            }
                            {...a11yProps(1)}
                            sx={{
                                position: 'absolute',
                                right: '25%',
                                '&.MuiButtonBase-root.MuiTab-root': {
                                    textTransform: 'none',
                                },
                            }}
                        />
                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                    <WishlistTable ListingsData={ListingsData} />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    <PurchasingOrderTable
                        ordersData={ordersData}
                        orderDetailsData={orderDetailsData}
                    />
                </CustomTabPanel>
            </Box>
        </Stack>
    );
};

export default Listing;
