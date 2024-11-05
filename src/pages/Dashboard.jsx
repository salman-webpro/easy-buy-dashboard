import React from 'react';
import { Button, Grid, Stack } from '@mui/material';
// import { PieCharts } from '../Components/CommonComps';
import Typography from '@mui/material/Typography';
// import { Products, ListingsData } from '../data';
import Products from '../data/Product';
import ListingsData from '../data/ListingData';
import Drawer from '@mui/material/Drawer';
import styles from '../style.module.css';
import AnalyticsDrawer from '../components/DashboaredComps/AnalyticsDrawer';
import Listings from '../components/DashboaredComps/Listings';
import TopSellingProducts from '../components/DashboaredComps/TopSellingProducts';
import NeedToRestock from '../components/DashboaredComps/NeedToRestock';
import Overview from '../components/DashboaredComps/Overview';
import PieCharts from '../components/CommonComps/PieCharts';

const Dashboard = () => {
    let [analyticsDrawer, setAnalyticsDrawer] = React.useState(false);
    return (
        <Stack p={2}>
            {/*Main grid*/}
            <Grid container spacing={1}>
                <Grid item lg={8} md={12}>
                    <Grid container>
                        {/*Overview*/}
                        <Grid
                            item
                            lg={7}
                            md={12}
                            sx={{
                                borderRadius: '10px',
                            }}
                        >
                            <Overview />
                        </Grid>

                        {/*Pie charts */}
                        <Grid item lg={5} md={12} spacing={1} sx={{ paddingBottom: '10px' }}>
                            <Stack
                                justifyContent={'center'}
                                alignItems={'center'}
                                height={'100%'}
                                padding={2}
                                sx={{
                                    borderRadius: '10px',
                                    backgroundColor: 'white.main',
                                    marginBottom: '15px',
                                }}
                            >
                                <Typography
                                    alignSelf={'start'}
                                    variant={'titleSmall'}
                                    color={'primary.500'}
                                >
                                    Customer Journey Analytics
                                </Typography>
                                <PieCharts isDashboard={true} />
                            </Stack>
                        </Grid>
                        {/*Restock*/}
                        <Grid item md={12}>
                            <Stack bgcolor={'white.main'} padding={2}>
                                <NeedToRestock Products={Products} />
                            </Stack>
                        </Grid>
                    </Grid>
                </Grid>
                {/*Top Selling Products*/}
                <Grid item md={4}>
                    <Stack bgcolor={'white.main'} padding={2} height={'100%'}>
                        <TopSellingProducts Products={Products} />
                    </Stack>
                </Grid>
            </Grid>
            <Stack>
                <Listings Products={Products} ListingsData={ListingsData} />
            </Stack>
            <Stack
                sx={{
                    transform: 'rotate(-90deg)',
                    position: 'absolute',
                    right: '-33px',
                    top: '50%',
                }}
            >
                <Button
                    variant={'contained'}
                    sx={{ borderRadius: '8px 8px 0px 0px' }}
                    onClick={() => setAnalyticsDrawer(true)}
                >
                    Analytics
                </Button>
            </Stack>
            <Drawer
                anchor={'right'}
                open={analyticsDrawer}
                onClose={() => setAnalyticsDrawer(false)}
                sx={{
                    '& .MuiDrawer-paper': {
                        borderRadius: '20px 0 0 0',
                    },
                }}
            >
                <Stack width={'600px'} bgcolor={'background.main'}>
                    <AnalyticsDrawer />
                </Stack>
            </Drawer>
        </Stack>
    );
};

export default Dashboard;
