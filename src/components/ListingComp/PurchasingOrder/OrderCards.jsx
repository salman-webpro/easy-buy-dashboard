import React from 'react';
import { Avatar, Stack, Paper } from '@mui/material';
import { AvatarGroup } from '@mui/lab';
import Typography from '@mui/material/Typography';

const OrderCards = ({ list }) => {
    let images = list.items?.flatMap((item) => item.images[0]);
    return (
        <>
            <Stack
                bgcolor={'white.main'}
                sx={{ padding: '5px 35px 15px 35px', boxShadow: 'rgb(0 0 0 / 8%) 0px 1px 10px' }}
                spacing={2}
                position={'relative'}
                borderRadius={'8px'}
                minWidth={'350px'}
            >
                <Stack
                    position={'absolute'}
                    top={0}
                    right={0}
                    sx={{
                        width: '8px',
                        height: '100%',
                        borderRadius: '50px 0px 0px 50px',
                        backgroundColor: '#707070',
                        left: '0',
                    }}
                ></Stack>
                <Stack direction={'row'} justifyContent={'space-between'} minWidth={'300px'}>
                    <Stack>
                        <Stack direction={'row'} alignItems={'center'} spacing={1}>
                            <Stack direction={'row'}>
                                <AvatarGroup
                                    max={3}
                                    sx={{
                                        '& .MuiAvatar-root': {
                                            width: 40,
                                            height: 40,
                                            fontSize: 10,
                                            backgroundColor: 'primary.600',
                                            borderColor: 'primary.200',
                                            marginLeft: '-30px',
                                        },
                                    }}
                                >
                                    {images.map((image, index) => (
                                        <Avatar
                                            key={index}
                                            alt='Remy Sharp'
                                            src={image}
                                            style={{ borderColor: '#689D86' }}
                                        />
                                    ))}
                                </AvatarGroup>
                            </Stack>
                            <Stack>
                                <Typography variant={'bodyLarge'} color={'primary.800'}>
                                    {list.orderNumber}
                                </Typography>
                                <Typography variant={'labelMedium'} color={'primary.400'}>
                                    {list.date} at {list.time}
                                </Typography>
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </>
    );
};
export default OrderCards;
