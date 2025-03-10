import React from 'react';
import { Stack, Paper } from '@mui/material';
import Typography from '@mui/material/Typography';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const WishListItemsCard = ({ item }) => {
    return (
        <Stack>
            <Stack direction={'row'} spacing={2} component={Paper} padding={1}>
                <Stack
                    sx={{
                        border: 1,
                        borderColor: '#4D80A8',
                        borderRadius: 10,
                        width: '60px',
                        height: '60px',
                        padding: '10px',
                    }}
                >
                    <img
                        alt={'alt'}
                        src={item?.images[0]}
                        style={{ width: '40px', height: '40px' }}
                    />
                </Stack>

                <Stack spacing={1}>
                    <Typography variant={'titleMedium'} color={'primary.800'}>
                        {item?.name}
                    </Typography>
                    <Typography variant={'bodyLarge'} color={'primary.100'}>
                        {item?.price}
                    </Typography>
                    <Stack direction={'row'} spacing={2} alignItems={'center'}>
                        <Typography variant={'bodySmall'} color={'primary.500'}>
                            {item?.category}
                        </Typography>
                        <FiberManualRecordIcon sx={{ fontSize: '10px', color: '#EEEEEE' }} />
                        <Typography variant={'bodySmall'} color={'primary.500'}>
                            {item?.quantity}
                        </Typography>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    );
};
export default WishListItemsCard;
