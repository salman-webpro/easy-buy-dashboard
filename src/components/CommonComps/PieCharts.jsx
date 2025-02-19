import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { Stack, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';

const PieCharts = ({ isDashboard }) => {
    const PieTitles = ['Listing', 'Purchased', 'Conversion', 'Cancelled'];
    const [PieChartsData, setPieChartsData] = useState([21, 22, 34, 56]);
    const emptyStackColors = ['#24A524', '#006C4A', '#FFD43D', '#FA6767'];

    // console.log(MDcLabels);
    let [MDcChartState, setMDcChartState] = React.useState({
        series: [21, 22, 34, 56],
        options: {
            legend: {
                show: false,
            },
            chart: {
                type: 'donut',
                width: 100,
                height: 100,
            },
            dataLabels: {
                enabled: false,
            },
            colors: ['#24A524', '#006C4A', '#FFD43D', '#FA6767'],
            labels: PieTitles,
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200,
                        },
                        legend: {
                            show: false,
                        },
                    },
                },
            ],
        },
    });

    return (
        <Stack
            sx={{ textAlign: 'center', width: '100%' }}
            py={1}
            alignItems={'center'}
            justifyContent={'space-evenly'}
            direction={'row'}
        >
            <Stack sx={{ width: '40%' }} spacing={{ md: 1.5, lg: 2 }}>
                {PieChartsData.map((entry, index) => (
                    <Stack
                        direction={'row'}
                        justifyContent={'space-between'}
                        alignItems={'center'}
                        width={'100%'}
                        spacing={2}
                        key={index}
                    >
                        <Stack direction={'row'} alignItems={'center'} spacing={2}>
                            <Stack
                                sx={{
                                    width: '16px',
                                    height: '16px',
                                    borderRadius: '50px',
                                    background: entry[0]
                                        ? 'rgb(0, 143, 251)'
                                        : emptyStackColors[index % emptyStackColors.length],
                                }}
                            ></Stack>

                            <Typography
                                sx={{
                                    color: entry[0]
                                        ? '#FA6767'
                                        : emptyStackColors[index % emptyStackColors.length],
                                }}
                                variant={'labelMedium'}
                            >
                                {PieTitles[index % PieTitles.length]} ({entry}%)
                            </Typography>
                        </Stack>
                    </Stack>
                ))}
            </Stack>
            <Divider
                variant={'sc.two'}
                orientation={'vertical'}
                flexItem
                sx={{ width: '1px', marginLeft: '1rem' }}
            />
            <Stack sx={{ width: '60%' }}>
                <ReactApexChart
                    options={MDcChartState.options}
                    series={MDcChartState.series}
                    type='donut'
                    // height={isDashboard ? '250px' : '100%'}
                    // width={isDashboard ? '250px' : '100%'}
                    width={'100%'}
                />
            </Stack>
        </Stack>
    );
};
export default PieCharts;
