import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import { Grid, Stack } from '@mui/material';
import Button from '@mui/material/Button';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import PrintOutlinedIcon from '@mui/icons-material/PrintOutlined';
import ImageView from './ImageView';
import RightView from './RightView';
import Divider from '@mui/material/Divider';
import BottomComponents from './BottomComponents';
import Drawer from '@mui/material/Drawer';
import ProductEdit from './ProductEdit';

const ProductView = ({ product, setProductOpen }) => {
    const [isRightDrawerOpen, setIsRightDrawerOpen] = useState(false); // State for the right drawer

    // Function to toggle the right drawer
    const toggleRightDrawer = () => {
        setIsRightDrawerOpen(!isRightDrawerOpen);
        // setProductOpen(false);
    };
    return (
        <Stack>
            <Stack direction={'row'} justifyContent={'space-between'} p={1}>
                <Typography variant={'titleLarge'} color={'primary.900'}>
                    {product.name}
                </Typography>
                <Stack direction={'row'} spacing={2}>
                    <Button
                        variant={'contained'}
                        startIcon={<DeleteOutlinedIcon />}
                        sx={{
                            padding: '10px 24px',
                        }}
                    >
                        Delete
                    </Button>
                    <Button
                        variant={'outlined'}
                        startIcon={<BorderColorOutlinedIcon />}
                        onClick={toggleRightDrawer}
                        sx={{
                            padding: '10px 24px',
                        }}
                    >
                        Edit
                    </Button>
                    <Button
                        sx={{
                            borderColor: 'transparent',
                            '&:hover': {
                                borderColor: 'transparent',
                                backgroundColor: 'transparent',
                            },
                            '&:focus': {
                                borderColor: 'transparent',
                                backgroundColor: 'transparent',
                            },
                        }}
                        variant={'outlined'}
                        startIcon={<PrintOutlinedIcon />}
                    >
                        Print Barcode
                    </Button>
                </Stack>
            </Stack>

            <Stack>
                <Grid container mt={2}>
                    <Grid item md={8} sm={12}>
                        <ImageView images={product.images} />
                    </Grid>

                    <Grid item md={4} sm={12} p={1}>
                        {/*<div style={{ borderLeft: '1px solid #000' }}>assad</div>*/}
                        <RightView product={product} />
                    </Grid>
                </Grid>
            </Stack>
            <Divider />

            <Stack mb={2}>
                <BottomComponents product={product} />
            </Stack>
            <Drawer anchor={'right'} open={isRightDrawerOpen} onClose={toggleRightDrawer}>
                <ProductEdit product={product} toggleRightDrawer={toggleRightDrawer} />
            </Drawer>
        </Stack>
    );
};

export default ProductView;
