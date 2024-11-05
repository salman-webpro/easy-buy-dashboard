import React, { useEffect } from 'react';
import { Stack, Tab, Tabs } from '@mui/material';
import ReactApexChart from 'react-apexcharts';
import Typography from '@mui/material/Typography';
// import { MonthFilter, YearFilter } from '../../CommonComps';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import CircleIcon from '@mui/icons-material/Circle';
import MonthFilter from '../../CommonComps/MonthFilter';
import YearFilter from '../../CommonComps/YearFilter';

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role='tabpanel'
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

let ProfitData = [31, 40, 28, 51, 42, 109, 100, 31, 40, 28, 51, 42, 109, 100];
let LossData = [11, 32, 45, 32, 34, 52, 41, 11, 32, 45, 32, 34, 52, 41];
const ProfitLoss = () => {
    let [isProfitData, setIsProfitData] = React.useState(true);
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    let [yearFilterValue, setYearFilterValue] = React.useState('2023');
    let [MonthFilterValue, setMonthFilterValue] = React.useState('January');
    let [PLChartSet, setPLChartSet] = React.useState({
        series: [
            {
                name: 'series1',
                data: [],
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
                    show: true,
                },
            },
            legend: {
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

    useEffect(() => {
        // Check if chartData is available before updating chartState
        if (isProfitData) {
            setPLChartSet({
                ...PLChartSet,
                series: [
                    {
                        name: 'series1',
                        data: ProfitData,
                    },
                ],
                options: {
                    ...PLChartSet.options,
                    stroke: {
                        colors: ['green'],
                        width: 1,
                    },
                },
            });
        } else {
            setPLChartSet({
                ...PLChartSet,
                series: [
                    {
                        name: 'series1',
                        data: LossData,
                    },
                ],
                options: {
                    ...PLChartSet.options,
                    stroke: {
                        colors: ['red'],
                        width: 1,
                    },
                },
            });
        }
    }, [isProfitData]);
    console.log('data', isProfitData);
    return (
        <Stack>
            <Stack direction={'row'} justifyContent={'space-between'} mb={2} alignItems={'center'}>
                <Typography variant={'titleSmall'} color={'primary.900'}>
                    Profit / Loss Analysis
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
            <Stack>
                <Box sx={{ width: '100%' }}>
                    <Box>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            aria-label='basic tabs example'
                            variant={'fullWidth'}
                            sx={{
                                '& .MuiTabs-indicator': {
                                    display: 'none',
                                },
                            }}
                        >
                            <Tab
                                icon={<CircleIcon color='positive' />}
                                iconPosition='start'
                                label='Profit'
                                {...a11yProps(0)}
                                onClick={() => setIsProfitData(true)}
                                sx={{
                                    '&.MuiButtonBase-root.MuiTab-root': {
                                        alignItems: 'center',
                                        justifyContent: 'start',
                                        borderRadius: '8px',
                                        color: 'positive.main',
                                    },
                                    '&.Mui-selected': {
                                        backgroundColor: 'sc.one',
                                    },
                                }}
                            />
                            <Tab
                                icon={<CircleIcon color='red' />}
                                iconPosition='start'
                                label='Loss'
                                {...a11yProps(1)}
                                onClick={() => setIsProfitData(false)}
                                sx={{
                                    '&.MuiButtonBase-root.MuiTab-root': {
                                        alignItems: 'center',
                                        justifyContent: 'start',
                                        borderRadius: '8px',
                                        color: 'red.main',
                                    },
                                    '&.Mui-selected': {
                                        backgroundColor: 'sc.one',
                                    },
                                }}
                            />
                        </Tabs>
                    </Box>
                    <CustomTabPanel value={value} index={0}>
                        <ReactApexChart
                            options={PLChartSet.options}
                            series={PLChartSet.series}
                            type='area'
                            height={250}
                        />
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={1}>
                        <ReactApexChart
                            options={PLChartSet.options}
                            series={PLChartSet.series}
                            type='area'
                            height={250}
                        />
                    </CustomTabPanel>
                </Box>
            </Stack>
            {/*<ReactApexChart*/}
            {/*    options={PLChartSet.options}*/}
            {/*    series={PLChartSet.series}*/}
            {/*    type='area'*/}
            {/*    height={250}*/}
            {/*/>*/}
        </Stack>
    );
};
export default ProfitLoss;
