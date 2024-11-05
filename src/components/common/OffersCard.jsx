import React from 'react';
import { Stack, Typography } from '@mui/material';
import { MdCheckCircle } from 'react-icons/md';

const OffersCard = ({
    image,
    title,
    originalPrice,
    discountedPrice,
    minimumPrice,
    isSelected,
    onSelect,
}) => {
    return (
        <Stack
            direction={'row'}
            gap={1}
            justifyContent={'space-between'}
            width={'320px'}
            alignItems={'center'}
            sx={{
                position: 'relative',
                border: `1px solid ${isSelected ? '#36765C' : '#eeeeee'}`,
                borderRadius: '10px',
                padding: '24px',
                cursor: 'pointer',
            }}
            onClick={onSelect}
        >
            <Stack>
                <img src={image} alt={title} width={145} />
            </Stack>
            <Stack gap={0.5}>
                <Typography variant={'headlineMedium'} color={'primary.700'}>
                    {title}
                </Typography>
                <Stack direction={'row'} gap={0.5}>
                    <Typography variant={'labelMedium'} color={'sc.two'}>
                        Total value
                    </Typography>
                    <Typography variant={'labelMedium'} color={'primary.600'}>
                        {discountedPrice}
                    </Typography>
                    <Typography
                        variant={'labelMedium'}
                        color={'sc.two'}
                        sx={{ textDecoration: 'line-through' }}
                    >
                        {originalPrice}
                    </Typography>
                </Stack>

                <Stack direction={'row'} gap={0.5}>
                    <Typography variant={'labelMedium'} color={'sc.two'}>
                        Min. Purchase Amount
                    </Typography>
                    <Typography variant={'labelMedium'} color={'primary.600'}>
                        {minimumPrice}
                    </Typography>
                </Stack>
            </Stack>
            {isSelected && (
                <MdCheckCircle
                    style={{
                        position: 'absolute',
                        top: '5px',
                        right: '5px',
                        color: '#36765C',
                        fill: '#36765C',
                        fontSize: '20px',
                    }}
                />
            )}
        </Stack>
    );
};

export default OffersCard;
