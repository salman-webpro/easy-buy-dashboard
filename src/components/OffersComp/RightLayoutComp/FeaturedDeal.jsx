import React from 'react';
import { Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded';

const FeaturedDeal = ({ selectedOffer }) => {
    return (
        <Stack direction={'row'} alignItems={'center'} gap={4} padding={3}>
            <img
                width={100}
                height={100}
                src={'https://i.ibb.co/zHCTKsG/customer-1.png'}
                alt={'deal illustration'}
            />
            {selectedOffer?.featuredPosition !== 'none' && (
                <Stack>
                    <Stack direction={'row'} alignItems={'center'} gap={2}>
                        <Typography variant={'headlineMedLarge'} color={'primary.500'}>
                            Featured at {selectedOffer?.featuredPosition} Position
                        </Typography>
                        <ChevronRightRoundedIcon sx={{ color: 'primary.500' }} fontSize={'large'} />
                    </Stack>
                    <Stack direction={'row'} alignItems={'center'} gap={1}>
                        <ErrorOutlineRoundedIcon sx={{ color: 'sc.two' }} fontSize={'12px'} />
                        <Typography variant={'bodyMedium'} color={'sc.two'}>
                            Your deal will listed until {selectedOffer?.EndDate}
                        </Typography>
                    </Stack>
                </Stack>
            )}
            {selectedOffer?.featuredPosition === 'none' && (
                <Stack>
                    <Typography>Place Your deals into featured list</Typography>
                    <Stack direction={'row'} alignItems={'center'} gap={2}>
                        <Typography variant={'headlineMedLarge'} color={'primary.500'}>
                            Set as Featured Deals
                        </Typography>
                        <ChevronRightRoundedIcon sx={{ color: 'primary.500' }} fontSize={'large'} />
                    </Stack>
                </Stack>
            )}
        </Stack>
    );
};
export default FeaturedDeal;
