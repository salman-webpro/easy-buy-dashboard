import React, { useState } from 'react';
import { Grid, Typography } from '@mui/material';
import { MdCheckCircleOutline } from 'react-icons/md';
import positionOne from '../../assets/images/ads/deal.png';
import positionTwo from '../../assets/images/ads/deal-1.png';
import positionThree from '../../assets/images/ads/deal-2.png';

const images = [positionOne, positionTwo, positionThree];

const positions = ['positionOne', 'positionTwo', 'positionThree'];
const getOrdinal = (number) => {
    const suffixes = ['th', 'st', 'nd', 'rd'];
    const v = number % 100;
    return number + (suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0]);
};
const PremierShowcase = () => {
    const [selectedPosition, setSelectedPosition] = useState();

    const handlePositionChange = (name) => {
        setSelectedPosition(name);
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

export default PremierShowcase;
