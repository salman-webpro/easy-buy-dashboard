import React from 'react';
import invoiceData from '../data/Invoices';
import { Grid, Stack } from '@mui/material';
import InvoiceTop from '../components/InvoicesComps/InvoiceTop';
import InvoicePageTable from '../components/InvoicesComps/InvoicePageTable';
import InvoiceSummary from '../components/InvoicesComps/InvoiceSummary';
import PieCharts from '../components/CommonComps/PieCharts';
import FitaChart from '../components/DashboaredComps/FitaChart';
import LineChart from '../components/CommonComps/LineChart';

const Invoices = () => {
    const chatData = {
        series: [
            {
                name: 'Desktops',
                data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
            },
        ],
        options: {
            chart: {
                height: 350,
                type: 'line',
                zoom: {
                    enabled: false,
                },
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: 'straight',
            },
            title: {
                text: 'Product Trends by Month',
                align: 'left',
            },
            grid: {
                row: {
                    colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                    opacity: 0.5,
                },
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
            },
        },
    };
    return (
        <div className='p-4'>
            <InvoiceTop />
            <Stack mt={3}>
                {/*  */}
                <Grid container wrap={'nowrap'} gap={2}>
                    <Grid item md={6}>
                        <Stack
                            height={'161px'}
                            sx={{ bgcolor: 'white.main', borderRadius: '10px' }}
                            width={'100%'}
                        >
                            <LineChart />
                        </Stack>
                    </Grid>
                    <Grid item md={6}>
                        <Stack
                            height={'161px'}
                            p={2}
                            sx={{ bgcolor: 'white.main', borderRadius: '10px' }}
                        >
                            <InvoiceSummary />
                        </Stack>
                    </Grid>
                </Grid>
            </Stack>
            <Stack mt={3} p={2} sx={{ bgcolor: 'white.main', borderRadius: '10px' }}>
                {/*  */}

                <InvoicePageTable Invoices={invoiceData} />
            </Stack>
        </div>
    );
};

export default Invoices;
