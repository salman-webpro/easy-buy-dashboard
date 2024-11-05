import React from 'react';
import { Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';

const BottomComponents = ({ product }) => {
    return (
        <Stack>
            <Typography my={4} color={'sc.two'} variant={'bodyLarge'}>
                {product.description}
            </Typography>

            <Divider />

            <Stack direction={'row'} gap={1}>
                <Typography>SKU : </Typography>
                <Typography>{product.sku} </Typography>
            </Stack>
            <Stack direction={'row'} gap={1} alignItems={'center'}>
                <Typography>Tags :</Typography>
                <Stack direction={'row'} gap={1} mt={1}>
                    {product.tags.map((tag, index) => {
                        return (
                            <Button variant={'outlined'} key={index}>
                                {tag}
                            </Button>
                        );
                    })}
                </Stack>
            </Stack>
        </Stack>
    );
};

export default BottomComponents;
