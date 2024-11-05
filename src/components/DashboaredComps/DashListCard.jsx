import React from 'react';
import { Avatar, Stack } from '@mui/material';
import { AvatarGroup } from '@mui/lab';
import Typography from '@mui/material/Typography';

const DashListCard = ({ cartItemsImages, name, date }) => {
    return (
        <>
            <Stack
                bgcolor={'#F7FAFD'}
                sx={{ padding: '15px 35px' }}
                spacing={1}
                position={'relative'}
                borderRadius={'16px'}
                width={'80%'}
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
                <Stack direction={'row'}>
                    <AvatarGroup
                        max={3}
                        sx={{
                            '& .MuiAvatar-root': {
                                width: 18,
                                height: 18,
                                fontSize: 10,
                                backgroundColor: '#4D80A8',
                                borderColor: '#A7BED0',
                            },
                        }}
                    >
                        {cartItemsImages.map((image, index) => (
                            <Avatar
                                key={index}
                                alt='Remy Sharp'
                                src={image.image}
                                style={{ borderColor: '#689D86' }}
                            />
                        ))}
                    </AvatarGroup>
                </Stack>
                <Typography variant={'bodyLarge'} color={'primary.800'}>
                    {name}
                </Typography>
                <Typography variant={'labelMedium'} color={'#4D80A8'}>
                    {date}
                </Typography>
            </Stack>
        </>
    );
};
export default DashListCard;
