import React from 'react';
import { Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import ReactApexChart from 'react-apexcharts';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';

let ProfitData = [31, 40, 28, 51, 42, 109, 100, 31, 40, 28, 51, 42, 109, 100];
let LossData = [11, 32, 45, 32, 34, 52, 41, 11, 32, 45, 32, 34, 52, 41];
const FitaChart = ({ title, value, percentage }) => {
    let [ChartSet, setChartSet] = React.useState({
        series: [
            {
                name: 'series1',
                data: [31, 40, 28, 51, 42, 109, 100, 31, 40, 28, 51, 42, 109, 100],
            },
            {
                name: 'series2',
                data: [11, 32, 45, 32, 34, 52, 41, 11, 32, 45, 32, 34, 52, 41],
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
                    '2018-09-19T07:30:00.000Z',
                    '2018-09-19T08:30:00.000Z',
                    '2018-09-19T09:30:00.000Z',
                    '2018-09-19T10:30:00.000Z',
                    '2018-09-19T11:30:00.000Z',
                    '2018-09-19T12:30:00.000Z',
                    '2018-09-19T13:30:00.000Z',
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

    // useEffect(() => {
    //     // Check if chartData is available before updating chartState
    //     if (chartData?.data?.length > 0) {
    //         const x = chartData?.data?.map((entry) => entry.date);
    //         const y = chartData?.data?.map((entry) => entry.total_scan);
    //         // console.log('x data', x);
    //         // console.log('y data', y);
    //
    //         setChartState({
    //             ...chartState,
    //             series: [
    //                 {
    //                     name: 'series1',
    //                     data: y,
    //                 },
    //             ],
    //             options: {
    //                 ...chartState.options,
    //                 xaxis: {
    //                     ...chartState.options.xaxis,
    //                     categories: x,
    //                 },
    //             },
    //         });
    //     }
    // }, [chartData]);

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
                    <ArrowDropDownRoundedIcon color={'red'} />
                    <Typography variant={'labelSmall'} color={'red.main'}>
                        {percentage}
                    </Typography>
                </Stack>
            </Stack>
        </Stack>
    );
};
export default FitaChart;
