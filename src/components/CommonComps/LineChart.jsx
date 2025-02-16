import React from 'react';
import { Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import ReactApexChart from 'react-apexcharts';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';

let ProfitData = [31, 40, 28, 51, 42, 109, 100, 31, 40, 28, 51, 42, 109, 100];
let LossData = [11, 32, 45, 32, 34, 52, 41, 11, 32, 45, 32, 34, 52, 41];
const LineChart = ({ title, value, percentage }) => {
    let [ChartSet, setChartSet] = React.useState({
        series: [
            {
                name: 'series1',
                data: [0, 10, 15, 31, 52, 69, 80, 91, 100],
            },
            {
                name: 'series2',
                data: [0, 5, 10, 12, 14, 52, 61, 91, 100],
            },
        ],
        options: {
            chart: {
                height: 350,
                type: 'area',
                toolbar: {
                    show: false,
                },
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: 'smooth',
                colors: ['#1DD01D', '#BEBEBE'],
                width: 1,
            },
            xaxis: {
                categories: ['1st', '2nd', '3rd', '4th', '5ht', '6th', '7th', '8th', '9th'],
            },
            yaxis: {
                labels: {
                    show: false,
                },
            },
            legend: {
                show: false,
            },
            grid: {
                show: false,
            },
            fill: {
                colors: ['#ffffff', '#ffffff'],
            },
            tooltip: {
                enabled: false,
                x: {
                    show: false,
                    format: 'dd/MM/yy HH:mm',
                },
                marker: {
                    show: false,
                },
            },
        },
    });

    return (
        <Stack
            direction={'row'}
            justifyContent={'space-between'}
            alignItems={'center'}
            sx={{ position: 'relative' }}
            spacing={2}
        >
            <Stack spacing={0.5} width={'40%'} p={2} pl={3} pt={0}>
                <Typography
                    color={'primary.100'}
                    noWrap
                    sx={{ color: '#000', fontSize: '16px', fontWeight: '500' }}
                >
                    Total Sales {title}
                </Typography>
                <Typography sx={{ color: '#707070', fontSize: '12px', fontWeight: '400' }}>
                    Jan 1, 2023 - Jun 1, 2023
                </Typography>
                <Typography sx={{ color: 'primary.500', fontSize: '22px', fontWeight: '700' }}>
                    $995.29K
                </Typography>
                <Typography sx={{ color: '#707070', fontSize: '12px', fontWeight: '400' }}>
                    <span style={{ color: '#353535' }}>9.2% </span>vs 6 month before
                </Typography>
            </Stack>
            <Stack p={2}>
                <Stack>
                    <ReactApexChart
                        options={ChartSet.options}
                        series={ChartSet.series}
                        type='line'
                        height={130}
                    />
                </Stack>
            </Stack>
        </Stack>
    );
};
export default LineChart;
