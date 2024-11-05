import React from 'react';
// import { MonthFilter, YearFilter } from '../CommonComps';
import { LinearProgress, linearProgressClasses, Stack, styled } from '@mui/material';
import Typography from '@mui/material/Typography';
import product from '../../data/Product';
import MonthFilter from '../CommonComps/MonthFilter';
import YearFilter from '../CommonComps/YearFilter';

const TopSellingProducts = ({ Products }) => {
    let TopSellCount = Products.slice(0, 5);
    let [yearFilterValue, setYearFilterValue] = React.useState('2023');
    let [MonthFilterValue, setMonthFilterValue] = React.useState('January');
    const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
        height: 12,
        borderRadius: 5,
        [`&.${linearProgressClasses.colorPrimary}`]: {
            backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
        },
        [`& .${linearProgressClasses.bar}`]: {
            borderRadius: 5,
            backgroundColor: theme.palette.mode === 'light' ? '#006C4A' : '#308fe8',
        },
    }));

    return (
        <Stack>
            <Stack direction={'row'} justifyContent={'space-between'} mb={2}>
                <Typography
                    sx={{ fontSize: { lg: '20px', md: '18px', xs: '14px', maxWidth: '50%' } }}
                    color={'primary.500'}
                >
                    Top Selling Products
                </Typography>
                <Stack
                    width={'50%'}
                    direction={'row'}
                    spacing={1}
                    sx={{ justifyContent: 'flex-end' }}
                >
                    <MonthFilter
                        MonthFilterValue={MonthFilterValue}
                        setMonthFilterValue={setMonthFilterValue}
                    />
                    <YearFilter
                        yearFilterValue={yearFilterValue}
                        setYearFilterValue={setYearFilterValue}
                    />
                </Stack>
            </Stack>
            <Stack spacing={2}>
                {TopSellCount.map((product, index) => (
                    <Stack key={index}>
                        <Stack direction={'row'} justifyContent={'space-between'}>
                            <Stack direction={'row'} alignItems={'center'} mb={2} spacing={1}>
                                <img alt={'item'} width={30} height={30} src={product.images[0]} />
                                <Typography variant={'bodySmall'} color={'primary.900'}>
                                    {product.name}
                                </Typography>
                            </Stack>
                            <Stack>
                                <Typography variant={'titleSmall'} color={'primary.200'}>
                                    {product.sellCount}/{product.stock}
                                </Typography>
                            </Stack>
                        </Stack>
                        <BorderLinearProgress variant='determinate' value={product.Ratio} />
                    </Stack>
                ))}
            </Stack>
        </Stack>
    );
};
export default TopSellingProducts;
