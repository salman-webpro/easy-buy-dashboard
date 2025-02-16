import React from 'react';
import { Grid, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';

const CategorySummary = () => {
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
                <Grid container spacing={2}>
                    {/* First Stack */}
                    <Grid item xs={6}>
                        <Stack>
                            <Typography variant={'titleLarge'} sx={{ color: 'primary.500' }}>
                                1.5k
                            </Typography>
                            <Typography variant={'bodySmall'} sx={{ color: 'primary.100' }}>
                                Total Category
                            </Typography>
                        </Stack>
                    </Grid>

                    {/* Second Stack */}
                    <Grid item xs={6}>
                        <Stack>
                            <Typography variant={'titleLarge'} sx={{ color: 'primary.500' }}>
                                5.6k
                            </Typography>
                            <Typography variant={'bodySmall'} sx={{ color: 'primary.100' }}>
                                Total Item in Category
                            </Typography>
                        </Stack>
                    </Grid>
                </Grid>
            </Stack>
        </Stack>
    );
};

export default CategorySummary;
