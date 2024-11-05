import React from 'react';
import { Avatar, Button, Grid, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const WishedProductDetails = ({ setListingOpen, listingDetails }) => {
    console.log('listingDetails', listingDetails);
    return (
        <>
            <Stack direction={'column'} px={2} py={1}>
                <Stack
                    justifyContent={'space-between'}
                    sx={{ flexDirection: 'row', width: '100%' }}
                >
                    <Typography variant='titleLarge'>
                        Product Name : {listingDetails?.name}
                    </Typography>
                    <Button onClick={() => setListingOpen(false)}>
                        <img alt='' src='/icon.svg' />
                    </Button>
                </Stack>
                <Stack spacing={1} direction={'column'} className='my-3 rounded-xl'>
                    <Swiper
                        slidesPerView={2.5}
                        spaceBetween={10}
                        className='mySwiper'
                        mousewheel={true}
                        navigation
                        pagination={true}
                        scrollbar={{ draggable: true }}
                    >
                        {listingDetails?.images?.map((list, index) => (
                            <SwiperSlide key={index}>
                                <Stack sx={{ cursor: 'pointer' }}>
                                    {/*<WishlistCards list={list} key={index} />*/}
                                    <img src={list} width={400} height={350} alt={'pro image'} />
                                </Stack>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Stack>
                <Stack
                    spacing={1}
                    direction={'column'}
                    sx={{ backgroundColor: 'white.main' }}
                    className='my-3 p-5 rounded-xl'
                >
                    <Typography color={'#003E27'} fontSize={18} sx={{ fontWeight: '700' }}>
                        Specifications
                    </Typography>
                    <Grid container>
                        <Grid
                            item
                            xs={12}
                            md={6}
                            pl={0}
                            sx={{ borderRight: { md: '1px solid #BEBEBE', xs: 'none' } }}
                        >
                            <Typography color={'#003E27'} py={1}>
                                <span style={{ fontWeight: '700' }}>Color </span> {'  :'} Black Soot
                                Purchase
                            </Typography>
                            <Typography color={'#003E27'} py={1}>
                                <span style={{ fontWeight: '700' }}>Gender </span> {'  :'} Male
                            </Typography>
                            <Typography color={'#003E27'} py={1}>
                                <span style={{ fontWeight: '700' }}>Brand </span> {'  :'} George
                            </Typography>
                            <Typography color={'#003E27'} py={1}>
                                <span style={{ fontWeight: '700' }}>Clothing Size </span> {'  :'} L
                            </Typography>
                            <Typography color={'#003E27'} py={1}>
                                <span style={{ fontWeight: '700' }}>
                                    Country of Origin - Textiles{' '}
                                </span>{' '}
                                {'  :'} Imported
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={6} sx={{ paddingLeft: { xs: '15px', md: '30px' } }}>
                            <Typography color={'#003E27'} py={1}>
                                <span style={{ fontWeight: '700' }}>Category </span> {'  :'}{' '}
                                {listingDetails?.category}
                            </Typography>
                            <Typography color={'#003E27'} py={1}>
                                <span style={{ fontWeight: '700' }}>Price </span> {'  :'} $
                                {listingDetails?.price}
                            </Typography>
                            <Typography color={'#003E27'} py={1}>
                                <span style={{ fontWeight: '700' }}>Stock </span> {'  :'}{' '}
                                {listingDetails?.status}
                            </Typography>
                            <Typography color={'#003E27'} py={1}>
                                <span style={{ fontWeight: '700' }}>Offer Available Till </span>{' '}
                                {'  :'} {listingDetails?.lastModified}
                            </Typography>
                            <Typography color={'#003E27'} py={1}>
                                <span style={{ fontWeight: '700' }}>SKU</span> {'  :'}{' '}
                                {listingDetails?.sku}
                            </Typography>
                        </Grid>
                    </Grid>
                </Stack>
                <Stack sx={{ marginTop: '10px' }}>
                    <Typography>{listingDetails?.description}</Typography>
                </Stack>
            </Stack>
        </>
    );
};
export default WishedProductDetails;
