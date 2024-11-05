import React, { useState } from 'react';
import { Grid, Stack } from '@mui/material';
// import { AisleTopBar, AisleCard, AisleAdd } from '../Components/Aisles';
import aisleData from '../data/ailsle';
import Typography from '@mui/material/Typography';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import AisleTopBar from '../components/Aisles/AisleTopBar';
import AisleCard from '../components/Aisles/AisleCard';
import AisleAdd from '../components/Aisles/AisleAdd';

const Aisles = () => {
    const [isAddDrawerOpen, setIsAddDrawerOpen] = useState(false); // State for the right drawer
    const toggleAddDrawer = () => {
        setIsAddDrawerOpen(!isAddDrawerOpen);
        // setProductOpen(false);
    };
    return (
        <Stack p={2}>
            <Stack>
                <AisleTopBar />
                <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                    <Typography variant={'titleLarge'} color={'primary.800'} my={3}>
                        Available Aisle List
                    </Typography>
                    <Button
                        variant='contained'
                        sx={{ bgcolor: 'primary.400' }}
                        startIcon={<AddOutlinedIcon />}
                        onClick={toggleAddDrawer}
                    >
                        Add Aisle
                    </Button>
                </Stack>

                <Grid container spacing={1}>
                    {aisleData.map((aisle, index) => (
                        <Grid item md={3}>
                            <AisleCard
                                key={index}
                                image={aisle.image}
                                alisleNumber={aisle.aisleNumber}
                                capacity={aisle.capacity}
                                itemCount={aisle.ItemCount}
                                category={aisle.category}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Stack>
            <Drawer
                anchor={'right'}
                open={isAddDrawerOpen}
                onClose={toggleAddDrawer}
                sx={{
                    '& .MuiDrawer-paper': {
                        borderRadius: '20px 0 0 0',
                    },
                }}
            >
                <AisleAdd setIsAddDrawerOpen={setIsAddDrawerOpen} />
            </Drawer>
        </Stack>
    );
};

export default Aisles;
