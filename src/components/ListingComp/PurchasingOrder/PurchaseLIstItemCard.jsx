import React from 'react';
import { Stack, Paper } from '@mui/material';
import Typography from '@mui/material/Typography';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';

const PurchaseLIstItemCard = ({ image, name, price, category, quantity, paymentStatus, sku }) => {
    return (
        <Stack direction={'row'} justifyContent={'space-between'} component={Paper} padding={1}>
            <Stack direction={'row'} spacing={2}>
                <Stack
                    sx={{
                        border: 1,
                        borderColor: '#f15a2d',
                        borderRadius: 10,
                        width: '60px',
                        height: '60px',
                        padding: '10px',
                    }}
                >
                    <img alt={'alt'} src={image} style={{ width: '40px', height: '40px' }} />
                </Stack>

                <Stack spacing={1}>
                    <Typography variant={'titleMedium'} color={'primary.500'}>
                        {name}
                    </Typography>
                    <Typography variant={'bodyLarge'} color={'primary.100'}>
                        ${price}
                    </Typography>
                    <Stack direction={'row'} spacing={2} alignItems={'center'}>
                        <Typography variant={'bodySmall'} color={'primary.500'}>
                            {category}
                        </Typography>
                        <FiberManualRecordIcon sx={{ fontSize: '10px', color: '#EEEEEE' }} />
                        <Typography variant={'bodySmall'} color={'primary.500'}>
                            {quantity}
                        </Typography>
                    </Stack>
                    <Typography variant={'bodySmall'} color={'primary.500'}>
                        Sku: {sku}
                    </Typography>
                </Stack>
            </Stack>
            {paymentStatus === 'waiting' && (
                <Stack>
                    <DeleteForeverOutlinedIcon sx={{ color: 'red.main', cursor: 'pointer' }} />
                </Stack>
            )}
        </Stack>
    );
};
export default PurchaseLIstItemCard;
