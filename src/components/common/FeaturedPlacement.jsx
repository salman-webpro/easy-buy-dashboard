import React, { useState } from 'react';
import { Stack, Radio, Typography } from '@mui/material';
import FeaturedPosition from './FeaturedPosition';
import Divider from '@mui/material/Divider';
import PremierShowcase from './PremierShowcase';

const FeaturedPlacement = ({ selectedRadioValue, setSelectedRadioValue }) => {
    // const [] = useState();
    const handleRadioChange = (event) => {
        setSelectedRadioValue(event.target.value);
    };
    return (
        <>
            {/*<Divider sx={{ m: 2 }} />*/}

            <Typography variant={'headlineSmall'}>Placement</Typography>
            <br />
            <Typography variant={'bodyMedium'} color={'sc.two'}>
                Unveil your Deals to the perfect audience in the most fitting locale, capturing
                their attention effortlessly.
            </Typography>
            <Stack
                sx={{
                    bgcolor: 'background.main',
                    border: '1px solid #EEEEEE',
                    borderRadius: '10px',
                    padding: '10px',
                    mt: 2,
                }}
            >
                <div>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}
                    >
                        <Radio
                            checked={selectedRadioValue === 'featured'}
                            onChange={handleRadioChange}
                            value='featured'
                            name='radio-buttons'
                        />
                        <Typography variant={'titleLarge'} color={'primary.800'}>
                            Premiere Showcase
                        </Typography>
                    </div>
                    <div style={{ paddingLeft: '10px' }}>
                        <Typography variant={'bodyMedium'} color={'sc.three'}>
                            Step into the limelight with our exclusive featured section, where your
                            store deals take center stage. Forge direct connections with your ideal
                            shoppers and propel your business to soaring heights. Select any one of
                            your desire position to showcase your best "Deal"
                        </Typography>
                    </div>
                    {selectedRadioValue === 'featured' && <PremierShowcase />}
                </div>
                <div>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}
                    >
                        <Radio
                            checked={selectedRadioValue === 'topListed'}
                            onChange={handleRadioChange}
                            value='topListed'
                            name='radio-buttons'
                        />
                        <Typography variant={'titleLarge'} color={'primary.800'}>
                            Set as Top Listed
                        </Typography>
                    </div>
                    <div style={{ paddingLeft: '10px' }}>
                        <Typography variant={'bodyMedium'} color={'sc.three'}>
                            Radiate success by claiming your place in our sought-after top store
                            section, where you'll directly engage with your target customers and
                            propel your growth to soaring heights.
                        </Typography>
                    </div>
                </div>
            </Stack>
        </>
    );
};

export default FeaturedPlacement;
