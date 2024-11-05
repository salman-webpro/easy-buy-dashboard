import React, { useState } from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import ViewQuiltOutlinedIcon from '@mui/icons-material/ViewQuiltOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';

const AisleCard = ({ image, category, capacity, alisleNumber, itemCount }) => {
    return (
        <Stack>
            <Card sx={{ maxWidth: 400 }}>
                <CardActionArea>
                    <CardMedia
                        component='img'
                        image={image}
                        alt={alisleNumber}
                        sx={{ height: '200px', position: 'relative' }}
                    />
                    <div
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '75%',
                            background: 'rgba(0, 0, 0, 0.5)', // Adjust the alpha value (0.5) for the desired transparency
                        }}
                    ></div>
                    <Stack
                        sx={{
                            position: 'absolute',
                            top: '5%',
                            left: '5%',
                            background: '#000000',
                            padding: '5px 10px',
                            border: '1px solid white',
                            borderRadius: '30px',
                        }}
                        direction={'row'}
                        alignItems={'center'}
                        spacing={1}
                    >
                        <CategoryOutlinedIcon
                            fontSize={'12px'}
                            color={'white'}
                            alignSelf={'center'}
                        />
                        <Typography variant={'titleMedium'} color={'white.main'}>
                            {itemCount}/{capacity}
                        </Typography>
                    </Stack>
                    <CardContent sx={{ backgroundColor: 'primary.50' }}>
                        <Stack
                            direction={'row'}
                            justifyContent={'space-between'}
                            alignItems={'center'}
                        >
                            <Stack direction={'row'} alignItems={'center'} spacing={1}>
                                <ViewQuiltOutlinedIcon fontSize={'large'} />
                                <Typography variant={'titleLarge'}>{alisleNumber}</Typography>
                            </Stack>

                            <Typography variant={'bodyLarge'}>({category})</Typography>
                        </Stack>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Stack>
    );
};
export default AisleCard;
