import React from 'react';
import { Chip, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';

const NeedToRestock = ({ Products }) => {
    let LowStock = Products.filter((product) => product.stock <= 10);
    return (
        <Stack>
            <Stack direction={'row'} alignItems={'center'} spacing={1} mb={2}>
                <Typography variant={'titleLarge'} color={'primary.500'}>
                    Need to Restock
                </Typography>
                <Chip
                    sx={{
                        borderRadius: '4px',
                        backgroundColor: 'red.main',
                        color: 'white.main',
                        fontSize: '8px',
                        fontWeight: '400',
                        height: '16px',
                    }}
                    size={'small'}
                    label='Low Stock'
                />
            </Stack>
            <Stack direction={'row'} sx={{ width: '100%', overflowX: 'auto' }} spacing={2}>
                {LowStock.map((product, index) => (
                    <Stack
                        bgcolor={'background.main'}
                        padding={2}
                        sx={{ minWidth: '200px', borderRadius: '16px' }}
                        key={index}
                    >
                        <Stack direction={'row'} spacing={2}>
                            <img alt={'item'} width={30} height={30} src={product.images[0]} />
                            <Stack spacing={1}>
                                <Typography
                                    variant={'bodyLarge'}
                                    color={'primary.800'}
                                    maxWidth='120px'
                                    noWrap
                                    overflow={'hidden'}
                                    textOverflow='ellipsis'
                                >
                                    {product.name}
                                </Typography>
                                <Typography variant={'labelSmall'} color={'primary.200'}>
                                    {product.category}
                                </Typography>
                            </Stack>
                        </Stack>
                        <Typography textAlign={'end'} variant={'titleLarge'} color={'red.main'}>
                            {product.stock}
                        </Typography>
                    </Stack>
                ))}
            </Stack>
        </Stack>
    );
};
export default NeedToRestock;
