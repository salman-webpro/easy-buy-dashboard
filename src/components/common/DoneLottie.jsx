import React, { useEffect, useRef } from 'react';
import Lottie from 'react-lottie-player';

import doneAnimation from '../../assets/lotties/doneAnimation.json';
import { Typography } from '@mui/material';

const DoneLottie = () => {
    return (
        <>
            <Lottie loop animationData={doneAnimation} play style={{ width: 300, height: 300 }} />
            <Typography variant='bodyLarge' color={'positive.main'} sx={{ textAlign: 'center' }}>
                Payment Successful
            </Typography>
        </>
    );
};

export default DoneLottie;
