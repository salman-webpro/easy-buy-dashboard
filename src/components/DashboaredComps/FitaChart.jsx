import React from 'react';
import { Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import ReactApexChart from 'react-apexcharts';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import ArrowDropUpRoundedIcon from '@mui/icons-material/ArrowDropUpRounded';
let ProfitData = [31, 40, 28, 51, 42, 109];
let LossData = [11, 32, 45, 32, 34, 52, 41];
const FitaChart = ({ title, value, percentage, ThisMonth, LastMonth, status }) => {
    let [ChartSet, setChartSet] = React.useState({
        series: [
            {
                name: 'series1',
                data: ThisMonth,
            },
            {
                name: 'series2',
                data: LastMonth,
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
                colors: ['#E24355', '#24A524'],
                width: 1,
            },
            xaxis: {
                type: 'datetime',
                categories: [
                    '2018-09-19T00:00:00.000Z',
                    '2018-09-19T01:30:00.000Z',
                    '2018-09-19T02:30:00.000Z',
                    '2018-09-19T03:30:00.000Z',
                    '2018-09-19T04:30:00.000Z',
                    '2018-09-19T05:30:00.000Z',
                    '2018-09-19T06:30:00.000Z',
                ],
                labels: {
                    show: false,
                },
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
            spacing={7}
        >
            <Stack spacing={0.5} width={'60%'}>
                <Typography variant={'labelMedium'} color={'primary.100'} noWrap>
                    {title}
                </Typography>
                <Typography variant={'TitleLarge'} color={'primary.800'}>
                    {value}
                </Typography>
            </Stack>
            <Stack direction={'column'}>
                <Stack>
                    <ReactApexChart
                        options={ChartSet.options}
                        series={ChartSet.series}
                        type='area'
                        height={100}
                    />
                </Stack>

                <Stack
                    direction={'row'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    sx={{ position: 'absolute', bottom: -5, right: 8 }}
                >
                    {status === 'up' ? (
                        <ArrowDropUpRoundedIcon color='positive' />
                    ) : (
                        <ArrowDropDownRoundedIcon color={'red'} />
                    )}
                    <Typography
                        variant={'labelSmall'}
                        color={status === 'up' ? 'positive.main' : 'red.main'}
                    >
                        {percentage}
                    </Typography>
                </Stack>
            </Stack>
        </Stack>
    );
};
export default FitaChart;
