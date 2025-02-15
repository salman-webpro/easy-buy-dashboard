import React from 'react';
import Typography from '@mui/material/Typography';
import { Button, Stack } from '@mui/material';
import styles from '../../style.module.css';
import Box from '@mui/material/Box';
import DashListCard from './DashListCard';
import Sorting from './Sorting';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const Ranges = ['High - Low', 'Low - High'];
const Listings = ({ Products, ListingsData }) => {
    let lists = ListingsData[0].lists;
    let cartItemsImages = Products.filter((product) => product.images);
    return (
        <Stack bgcolor={'white.main'} padding={2} mt={1}>
            <Stack direction={'row'} justifyContent={'space-between'} mb={2} alignItems={'center'}>
                <Typography variant={'titleLarge'} color={'primary.800'}>
                    Listings
                </Typography>
                <Stack width={'20%'} direction={'row'} spacing={1}>
                    {/* <Sorting Ranges={Ranges} placeholder={'Price Sorting'} /> */}
                    <Sorting Ranges={Ranges} placeholder={'Price Sorting'} />
                    <Button>See all listings</Button>
                </Stack>
            </Stack>
            <Box sx={{ width: '100%', overflowX: 'auto' }}>
                {/*<Stack direction={'row'} spacing={2} className={styles.scrollBar}>*/}
                <Swiper slidesPerView={5} spaceBetween={40} className='mySwiper' mousewheel={true}>
                    {lists.map((item, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <DashListCard
                                    cartItemsImages={cartItemsImages}
                                    name={item.name}
                                    date={item.date}
                                    key={index}
                                />
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
                {/*</Stack>*/}
            </Box>
        </Stack>
    );
};
export default Listings;
