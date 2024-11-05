// OffersSwipe.js
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import OffersCard from './OffersCard';
import offerWinter from '../../assets/images/offerWinter.png';
import offerBlack from '../../assets/images/offerBlack.png';

const offersData = [
    {
        image: offerWinter,
        title: 'Winter Offer',
        originalPrice: 500,
        discountedPrice: 400,
        minimumPrice: 1000,
    },
    {
        image: offerWinter,
        title: 'Winter Offer 2',
        originalPrice: 500,
        discountedPrice: 400,
        minimumPrice: 1000,
    },
    {
        image: offerWinter,
        title: 'Winter Offer 3',
        originalPrice: 500,
        discountedPrice: 400,
        minimumPrice: 1000,
    },
    {
        image: offerWinter,
        title: 'Winter Offer 4',
        originalPrice: 500,
        discountedPrice: 400,
        minimumPrice: 1000,
    },
];

const OffersSwipe = () => {
    const [selectedOffer, setSelectedOffer] = useState(null);

    const handleSelectOffer = (index) => {
        setSelectedOffer(index);
    };

    return (
        <div style={{ marginBottom: '15px' }}>
            <Swiper slidesPerView={3} spaceBetween={240} className='mySwiper' mousewheel={true}>
                {offersData.map((offer, index) => (
                    <SwiperSlide key={index}>
                        <OffersCard
                            image={offer.image}
                            title={offer.title}
                            originalPrice={offer.originalPrice}
                            discountedPrice={offer.discountedPrice}
                            minimumPrice={offer.minimumPrice}
                            isSelected={selectedOffer === index}
                            onSelect={() => handleSelectOffer(index)}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default OffersSwipe;
