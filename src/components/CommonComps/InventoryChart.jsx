import React, { useState } from 'react';
import { Stack, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import ReactApexChart from 'react-apexcharts';

const ColoredBadge = ({ color, label, textColor }) => (
    <Stack
        sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '8px',
        }}
    >
        <Stack
            sx={{
                width: '16px',
                height: '16px',
                borderRadius: '50%',
                background: color,
            }}
        ></Stack>
        <Typography variant={'bodySmall'} color={textColor}>
            {label}
        </Typography>
    </Stack>
);

const InventoryChart = () => {
    const isDashboard = false;
    const [PieChartsData, setPieChartsData] = useState([71, 12, 3, 14]);
    const emptyStackColors = ['#24A524', '#006C4A', '#FFD43D', '#FA6767'];

    let [MDcChartState, setMDcChartState] = React.useState({
        series: PieChartsData,
        options: {
            legend: {
                show: false,
            },

            chart: {
                type: 'donut',
                width: '100%',
            },
            dataLabels: {
                enabled: false,
            },
            colors: ['#FA6767', '#FFD43D', '#006C4A', '#24A524'],
            labels: [],
            // need for responsive chart
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 375,
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
            sx={{ textAlign: 'center', maxWidth: '100%' }}
            p={2}
            alignItems={'center'}
            justifyContent={'left'}
            direction={'row'}
        >
            <Stack sx={{ width: '35%' }}>
                <ReactApexChart
                    options={MDcChartState.options}
                    series={MDcChartState.series}
                    type='donut'
                    // height={'100%'}
                    width={'100%'}
                />
            </Stack>
            {/* TODO: need to fix width and height */}
            <Stack gap={2} direction={'row'} width={'100%'} sx={{ width: '75%' }}>
                <Stack gap={2}>
                    <ColoredBadge
                        color='#24A524'
                        label='In Stock Items'
                        textColor='positive.main'
                    />
                    <ColoredBadge
                        color='#B187E8'
                        label='Low Stock Items'
                        textColor='countdown.main'
                    />
                </Stack>
                <Stack gap={2}>
                    <ColoredBadge
                        color='#FD9800'
                        label='Out of Stock Items'
                        textColor='positive.main'
                    />
                    <ColoredBadge
                        color='#FA6767'
                        label='Dead Stock Items'
                        textColor='orange.main'
                    />
                </Stack>
            </Stack>
        </Stack>
    );
};

export default InventoryChart;
