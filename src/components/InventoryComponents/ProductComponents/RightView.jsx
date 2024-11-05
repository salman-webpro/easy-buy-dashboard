import React from 'react';
import { ButtonGroup, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';

const RightView = ({ product }) => {
    return (
        <Stack style={{ borderLeft: '1px solid #BEBEBE' }} p={1}>
            <Stack gap={3}>
                <Typography>{product.category}</Typography>
                <ButtonGroup sx={{ width: '50%' }}>
                    <Button variant={'contained'} sx={{ bgcolor: 'primary.400' }}>
                        In Stock
                    </Button>
                    <Button variant={'contained'} sx={{ bgcolor: 'primary.100', width: '30%' }}>
                        {product.stock}
                    </Button>
                </ButtonGroup>
                <Typography
                    variant={'bodySmall'}
                    paddingX={1}
                    sx={{
                        bgcolor: '#ACFFBE',
                        borderRadius: '410px',

                        width: '85px',
                    }}
                >
                    New Arrival
                </Typography>
                <Divider />
            </Stack>
            <Stack mt={3} gap={2}>
                <Typography variant={'labelLarge'}>
                    <strike color={'sc.2'}>$1500.00</strike>
                </Typography>
                <Typography variant={'headlineMedium'} color={'primary.600'}>
                    ${product.price}
                </Typography>
                <Divider />
            </Stack>
            <Stack mt={2} gap={2}>
                <Typography variant={'labelLarge'}>Brand:</Typography>
                <Typography variant={'labelLarge'}>Asile No: {product.aisleNumber}</Typography>
                <Typography variant={'labelLarge'}>
                    <span>Barcode No:</span> {product.barcodeNumber}
                </Typography>
            </Stack>
        </Stack>
    );
};

export default RightView;
