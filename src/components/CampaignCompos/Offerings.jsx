import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Stack from '@mui/material/Stack';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Avatar } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';

const ProductStockProgressBar = ({ stock, sold }) => {
    // Calculate the percentage of items sold
    const soldPercentage = (sold / stock) * 100;

    return (
        <LinearProgress
            variant='determinate'
            color={soldPercentage < 40 ? 'warning' : 'success'}
            value={soldPercentage}
            sx={{ height: 10, borderRadius: '8px' }}
        />
    );
};

const Offerings = ({ selectedCampaign }) => {
    let offerings = selectedCampaign?.offerings || [];
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    // Get the list of category names from the offerings object
    const categories = Object.keys(offerings);
    return (
        <Stack p={2}>
            <Typography variant='titleLarge'>Offerings</Typography>
            <Box
                mt={2}
                bgcolor='#FFFFFF'
                sx={{ width: '100%', height: '100vh', borderRadius: '8px' }}
            >
                <Box sx={{ borderColor: 'divider' }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        centered
                        sx={{ border: '1px solid #7BB29A', borderRadius: '8px' }}
                    >
                        {categories.map((category, index) => (
                            <Tab label={category} key={index} sx={{ marginRight: '110px' }} />
                        ))}
                    </Tabs>
                </Box>
                <Box mt={1}>
                    {categories.map((category, index) => (
                        <div key={index}>
                            {value === index && (
                                <Box>
                                    <Grid container spacing={2}>
                                        {offerings[category].map((product, productIndex) => (
                                            <Grid item xs={12} sm={6} md={3} key={productIndex}>
                                                <Stack
                                                    sx={{
                                                        bgcolor: '#EBF0EE',
                                                        borderRadius: '8px',
                                                        padding: '10px',
                                                    }}
                                                >
                                                    <Stack
                                                        direction='row'
                                                        gap={2}
                                                        alignItems='center'
                                                    >
                                                        <Avatar
                                                            src={product.productImage}
                                                            sx={{ width: '50px', height: '50px' }}
                                                        />
                                                        <Stack>
                                                            <Typography
                                                                variant='subtitle1'
                                                                color='primary'
                                                            >
                                                                {product.productName}
                                                            </Typography>
                                                            <Typography
                                                                variant='subtitle1'
                                                                color='primary'
                                                            >
                                                                {product.productPrice}
                                                            </Typography>
                                                        </Stack>
                                                    </Stack>
                                                    <Stack mt={2}>
                                                        <Stack
                                                            direction='row'
                                                            gap={2}
                                                            alignItems='center'
                                                            justifyContent={'space-between'}
                                                        >
                                                            <Typography variant='subtitle1'>
                                                                {product.sold}/{product.stock}
                                                            </Typography>
                                                            <Typography variant='subtitle1'>
                                                                {parseInt(
                                                                    (product.sold / product.stock) *
                                                                        100,
                                                                )}
                                                                %
                                                            </Typography>
                                                        </Stack>
                                                        <ProductStockProgressBar
                                                            stock={product.stock}
                                                            sold={product.sold}
                                                        />
                                                    </Stack>
                                                </Stack>
                                            </Grid>
                                        ))}
                                    </Grid>
                                </Box>
                            )}
                        </div>
                    ))}
                </Box>
            </Box>
        </Stack>
    );
};

export default Offerings;
