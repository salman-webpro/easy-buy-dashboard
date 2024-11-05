import React from 'react';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';

const InventorySummery = () => {
    return (
        <Stack direction={'column'} gap={6}>
            <Stack>
                <Typography variant={'bodyLarge'} sx={{ color: '#006C4A' }}>
                    Summary
                </Typography>
                <Typography variant={'bodySmall'}>Jan 1, 2023</Typography>
            </Stack>
            <Stack direction={'row'} justifyContent={'space-between'}>
                <Stack>
                    <Typography variant={'titleLarge'} sx={{ color: '#006C4A' }}>
                        $320.4k
                    </Typography>
                    <Typography variant={'bodySmall'}>Total Inventory Value</Typography>
                </Stack>
                <Stack>
                    <Typography variant={'titleLarge'} sx={{ color: '#006C4A' }}>
                        $31.5k
                    </Typography>
                    <Typography variant={'bodySmall'}>Total Price</Typography>
                </Stack>
                <Stack>
                    <Typography variant={'titleLarge'} sx={{ color: '#006C4A' }}>
                        $4.2k
                    </Typography>
                    <Typography variant={'bodySmall'}>Total Sale</Typography>
                </Stack>
                <Stack>
                    <Typography variant={'titleLarge'} sx={{ color: '#006C4A' }}>
                        1.2k
                    </Typography>
                    <Typography variant={'bodySmall'}>Total Items</Typography>
                </Stack>
            </Stack>
        </Stack>
    );
};

export default InventorySummery;
