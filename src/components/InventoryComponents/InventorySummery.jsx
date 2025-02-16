import React from 'react';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';

const InventorySummery = () => {
    return (
        <Stack direction={'column'} gap={6}>
            <Stack>
                <Typography variant={'bodyLarge'} sx={{ color: 'primary.500' }}>
                    Summary
                </Typography>
                <Typography variant={'bodySmall'} sx={{ color: 'primary.100' }}>
                    Jan 1, 2023
                </Typography>
            </Stack>
            <Stack direction={'row'} justifyContent={'space-between'}>
                <Stack>
                    <Typography variant={'titleLarge'} sx={{ color: 'primary.500' }}>
                        $320.4k
                    </Typography>
                    <Typography variant={'bodySmall'} sx={{ color: 'primary.100' }}>
                        Total Inventory Value
                    </Typography>
                </Stack>
                <Stack>
                    <Typography variant={'titleLarge'} sx={{ color: 'primary.500' }}>
                        $31.5k
                    </Typography>
                    <Typography variant={'bodySmall'} sx={{ color: 'primary.100' }}>
                        Total Price
                    </Typography>
                </Stack>
                <Stack>
                    <Typography variant={'titleLarge'} sx={{ color: 'primary.500' }}>
                        $4.2k
                    </Typography>
                    <Typography variant={'bodySmall'} sx={{ color: 'primary.100' }}>
                        Total Sale
                    </Typography>
                </Stack>
                <Stack>
                    <Typography variant={'titleLarge'} sx={{ color: 'primary.500' }}>
                        1.2k
                    </Typography>
                    <Typography variant={'bodySmall'} sx={{ color: 'primary.100' }}>
                        Total Items
                    </Typography>
                </Stack>
            </Stack>
        </Stack>
    );
};

export default InventorySummery;
