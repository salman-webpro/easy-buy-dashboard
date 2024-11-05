import React from 'react';
import { Stack } from '@mui/material';
import ReactApexChart from 'react-apexcharts';
import Typography from '@mui/material/Typography';
import MonthFilter from '../../CommonComps/MonthFilter';
import YearFilter from '../../CommonComps/YearFilter';
// import { MonthFilter, YearFilter } from '../../CommonComps';

const MissedOpportunity = () => {
    let [yearFilterValue, setYearFilterValue] = React.useState('2023');
    let [MonthFilterValue, setMonthFilterValue] = React.useState('January');
    let [MOAChartState, setMOAChartState] = React.useState({
        series: [
            {
                data: [245, 180, 160, 90, 50],
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
            colors: ['#002315', '#24A524', '#FF8282', '#689D86', '#005F40'],
            dataLabels: {
                enabled: true,
                textAnchor: 'start',
                style: {
                    colors: ['#fff'],
                    fontsize: '12px',
                    fontWeight: '500',
                },
                formatter: function (val, opt) {
                    return opt.w.globals.labels[opt.dataPointIndex] + ':  ' + val;
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
                categories: ['Cereal', 'Pasta', 'Apples', 'Tea', 'Juice'],
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
                    Missed Opportunity Analysis
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
                options={MOAChartState.options}
                series={MOAChartState.series}
                type='bar'
                height={250}
            />
        </Stack>
    );
};
export default MissedOpportunity;
