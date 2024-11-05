import React from 'react';
import { Stack, Paper } from '@mui/material';
import Typography from '@mui/material/Typography';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

const ProductsAddList = ({ image, name, price, category, quantity, paymentStatus, sku }) => {
    return (
        <Stack direction={'row'} justifyContent={'space-between'} component={Paper} padding={1}>
            <Stack direction={'row'} spacing={2}>
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
                    <img alt={'alt'} src={image} style={{ width: '40px', height: '40px' }} />
                </Stack>

                <Stack spacing={1}>
                    <Typography variant={'titleMedium'} color={'primary.800'}>
                        {name}
                    </Typography>
                    <Typography variant={'bodyLarge'} color={'positive.main'}>
                        ${price}
                    </Typography>
                    <Stack direction={'row'} spacing={2} alignItems={'center'}>
                        <Typography variant={'bodySmall'} color={'primary.200'}>
                            {category}
                        </Typography>
                        <FiberManualRecordIcon sx={{ fontSize: '10px', color: '#EEEEEE' }} />
                        <Typography variant={'bodySmall'} color={'primary.200'}>
                            {quantity}
                        </Typography>
                    </Stack>
                    <Typography variant={'bodySmall'} color={'primary.200'}>
                        Sku: {sku}
                    </Typography>
                </Stack>
            </Stack>
            <Stack>
                <AddOutlinedIcon sx={{ color: 'primary.500', cursor: 'pointer' }} />
            </Stack>
        </Stack>
    );
};
export default ProductsAddList;
