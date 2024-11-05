import React, { useState } from 'react';
import { Avatar, Stack, Paper } from '@mui/material';
import { AvatarGroup } from '@mui/lab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';

const WishlistCards = ({ list }) => {
    return (
        <>
            <Stack
                bgcolor={'white.main'}
                sx={{ padding: '5px 35px 15px 35px', boxShadow: 'rgb(0 0 0 / 8%) 0px 1px 10px' }}
                spacing={2}
                position={'relative'}
                borderRadius={'8px'}
                width={'100%'}
            >
                <Stack
                    position={'absolute'}
                    top={0}
                    right={0}
                    sx={{
                        width: '8px',
                        background: '#4D80A8',
                        height: '100%',
                        borderRadius: '50px 0px 0px 50px',
                        left: '0',
                    }}
                ></Stack>
                <Stack direction={'row'} justifyContent={'space-between'}>
                    <Stack>
                        <Stack direction={'row'} alignItems={'center'} spacing={1}>
                            <Stack direction={'row'}>
                                <Avatar style={{ color: 'white', backgroundColor: '#4D80A8' }} />
                            </Stack>
                            <Stack>
                                <Typography variant={'bodyLarge'} color={'primary.800'}>
                                    {list.name}
                                </Typography>
                                <Typography variant={'labelMedium'} color={'#4D80A8'}>
                                    {list.items.length} Items
                                </Typography>
                            </Stack>
                        </Stack>
                    </Stack>
                    <Stack>
                        <Typography variant={'bodySmall'} color={'sc.two'}>
                            {list.date}
                        </Typography>
                    </Stack>
                </Stack>
            </Stack>
        </>
    );
};
export default WishlistCards;
