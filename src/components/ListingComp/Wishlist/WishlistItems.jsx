import React, { useEffect, useState } from 'react';
import { Avatar, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import WishListItemsCard from './WishListItemsCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Link from '@mui/material/Link';
import ProductView from '../../InventoryComponents/ProductComponents/ProductView';
import WishedProductDetails from './WishedProductDetails';
import WishlistCards from './WishlistCards';

const WishlistItems = ({ ListingsData }) => {
    let lists = ListingsData.lists;
    let [selectedList, setSelectedList] = React.useState('6523c30aa5f65357614259d6');
    let list = lists.find((list) => list.id === selectedList);

    const [listingOpen, setListingOpen] = useState(false);
    const [listingDetails, setListingDetails] = useState(null);
    const [selectedWishList, setSelectedWishList] = useState(null);
    const handleActionClick = (data) => {
        setListingDetails(data);
        setListingOpen(true);
    };
    return (
        <Stack>
            <Stack
                direction={'row'}
                sx={{ width: '100%', overflowX: 'auto' }}
                spacing={2}
                mt={3}
                pl={4}
            >
                <Swiper slidesPerView={3} spaceBetween={100} className='mySwiper' mousewheel={true}>
                    {lists.map((list, index) => (
                        <SwiperSlide key={index}>
                            {/*<Stack sx={{ cursor: 'pointer' }} onClick={() => setSelectedList(list.id)}>*/}
                            <WishlistCards list={list} key={index} />
                            {/*</Stack>*/}
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Stack>
            <Stack mt={3} px={4}>
                <Typography variant={'titleMedium'} color={'primary.700'}>
                    Wishlist
                </Typography>
                <Stack spacing={3} mt={3} sx={{ height: '65vh', overflowY: 'auto' }}>
                    {list?.items?.map((item, index) => (
                        <Box sx={{ pointer: 'cursor' }} onClick={() => handleActionClick(item)}>
                            <WishListItemsCard key={index} item={item} />
                        </Box>
                    ))}
                </Stack>
                <Drawer
                    anchor='right'
                    open={listingOpen}
                    onClose={() => setListingOpen(false)}
                    sx={{
                        '& .MuiDrawer-paper': {
                            borderRadius: '20px 0 0 0',
                        },
                    }}
                >
                    <Box
                        bgcolor={'#FAFAFA'}
                        sx={{
                            width: 1000,
                            p: 2,
                            height: '100vh',
                            borderRadius: '20px 0 20px 0',
                        }}
                    >
                        {/*<WishListDetails listingDetails={listingDetails} />*/}
                        <WishedProductDetails
                            setListingOpen={setListingOpen}
                            listingDetails={listingDetails}
                        />
                    </Box>
                </Drawer>
            </Stack>
        </Stack>
    );
};
export default WishlistItems;
