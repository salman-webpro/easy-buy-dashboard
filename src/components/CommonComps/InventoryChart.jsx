import React, { useState } from 'react';
import { Stack, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import ReactApexChart from 'react-apexcharts';
import data from '../../data/Product';

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
const totalInStock = data.map((d) => d.stock).reduce((acc, d) => acc + d);
const totalLowStock = data
    .filter((d) => d.stock > 0 && d.stock < 10)
    .map((d) => d.stock)
    .reduce((acc, d) => acc + d);

const totalOutofStock = data.map((d) => d.stock === 0).reduce((acc, d) => acc + d);

const totalDeadStock = data
    .filter((d) => d.stock < 0)
    .map((d) => Math.abs(d.stock))
    .reduce((acc, d) => acc + d);

const InventoryChart = () => {
    const isDashboard = false;
    const [PieChartsData, setPieChartsData] = useState([
        totalInStock,
        totalOutofStock,
        totalLowStock,
        totalDeadStock,
    ]);

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
            colors: ['#24A524', '#FF0000', '#FF8282', '#353535'],
            labels: ['In Stock Items', 'Out of Stock Items', 'Low Stock Items', 'Dead Stock Items'],
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
                    <ColoredBadge color='#FF8282' label='Low Stock Items' textColor='red.main' />
                </Stack>
                <Stack gap={2}>
                    <ColoredBadge color='red' label='Out of Stock Items' textColor='danger.main' />
                    <ColoredBadge
                        color='#353535'
                        label='Dead Stock Items'
                        textColor='primary.500'
                    />
                </Stack>
            </Stack>
        </Stack>
    );
};

export default InventoryChart;
