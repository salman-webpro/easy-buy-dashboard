import React from 'react';
import { Stack } from '@mui/material';
import ReactApexChart from 'react-apexcharts';
import Typography from '@mui/material/Typography';
import MonthFilter from '../../CommonComps/MonthFilter';
import YearFilter from '../../CommonComps/YearFilter';
// import { MonthFilter, YearFilter } from '../../CommonComps';

const HighDemandProducts = () => {
    let [yearFilterValue, setYearFilterValue] = React.useState('2023');
    let [MonthFilterValue, setMonthFilterValue] = React.useState('January');
    let [HDPChartState, setHDPChartState] = React.useState({
        series: [
            {
                data: [20, 30, 50, 70, 90],
            },
        ],
        options: {
            chart: {
                type: 'bar',
                height: 350,
            },
            plotOptions: {
                bar: {
                    barHeight: '70%',
                    distributed: true,
                    horizontal: true,
                    dataLabels: {
                        position: 'bottom',
                    },
                },
            },
            legend: {
                show: false,
            },
            colors: ['#9D81D8', '#36765C', '#FA6767', '#7BB29A', '#004C33'],
            dataLabels: {
                enabled: true,
                textAnchor: 'start',
                style: {
                    colors: ['#fff'],
                    fontsize: '12px',
                    fontWeight: '500',
                },
                formatter: function (val, opt) {
                    return opt.w.globals.labels[opt.dataPointIndex];
                },
                offsetX: 0,
                dropShadow: {
                    enabled: false,
                },
            },
            grid: {
                xaxis: {
                    lines: {
                        show: true,
                    },
                },
                yaxis: {
                    lines: {
                        show: false,
                    },
                },
            },
            xaxis: {
                categories: [
                    'Beef Bistek',
                    'Beef Ribeye Steak',
                    'Japanese Saikoro Beef (Wagyu Cubes)',
                    'Bolzico Beef Tenderloin Steak',
                    'US Scallops',
                ],
            },
            yaxis: {
                labels: {
                    show: false,
                },
            },
        },
    });
    return (
        <Stack>
            <Stack direction={'row'} justifyContent={'space-between'} mb={2} alignItems={'center'}>
                <Typography variant={'titleSmall'} color={'primary.900'}>
                    Top Selling Products
                </Typography>
                <Stack width={'40%'} direction={'row'} spacing={1}>
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
            <ReactApexChart
                options={HDPChartState.options}
                series={HDPChartState.series}
                type='bar'
                height={250}
            />
        </Stack>
    );
};
export default HighDemandProducts;
