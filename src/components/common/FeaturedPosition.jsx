import React, { useState } from 'react';
import { Grid, Typography } from '@mui/material';
import { MdCheckCircleOutline } from 'react-icons/md';
import positionOne from '../../assets/images/ads/1st.png';
import positionTwo from '../../assets/images/ads/2nd.png';
import positionThree from '../../assets/images/ads/3rd.png';
import positionFour from '../../assets/images/ads/4th.png';
import positionFive from '../../assets/images/ads/5th.png';
import positionSix from '../../assets/images/ads/6th.png';
import positionSeven from '../../assets/images/ads/7th.png';
const images = [
    positionOne,
    positionTwo,
    positionThree,
    positionFour,
    positionFive,
    positionSix,
    positionSeven,
];

const positions = [
    'positionOne',
    'positionTwo',
    'positionThree',
    'positionFour',
    'positionFive',
    'positionSix',
    'positionSeven',
];
const getOrdinal = (number) => {
    const suffixes = ['th', 'st', 'nd', 'rd'];
    const v = number % 100;
    return number + (suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0]);
};
const FeaturedPosition = () => {
    const [selectedPosition, setSelectedPosition] = useState();

    const handlePositionChange = (name) => {
        setSelectedPosition(name);
        console.log('🚀~ FeaturedPosition:15 ~  ', name);
    };

    const imageStyle = {
        width: '60%',
    };

    return (
        <Grid container pl={'10px'} spacing={2} width={'75%'} py={1}>
            {positions.map((position, index) => (
                <Grid
                    key={index}
                    item
                    xs={12}
                    md={4}
                    onClick={() => handlePositionChange(position)}
                >
                    <Typography
                        variant={'bodyLarge'}
                        style={{ color: selectedPosition === position ? '#003E27' : '#BEBEBE' }}
                        className='inline-flex items-center gap-1'
                    >
                        {selectedPosition === position ? (
                            <MdCheckCircleOutline style={{ color: 'green' }} />
                        ) : null}
                        {`${getOrdinal(index + 1)} Position`}
                    </Typography>
                    {/* TODO: image overlay  */}
                    <img src={images[index]} alt={position} style={imageStyle} />
                </Grid>
            ))}
        </Grid>
    );
};

export default FeaturedPosition;
