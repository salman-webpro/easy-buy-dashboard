import React, { useState, useEffect } from 'react';
import { Grid, Stack } from '@mui/material';
import authLeft from '../../assets/images/authLeft.jpeg';
import authRight from '../../assets/images/authRight.svg';
import { Outlet } from 'react-router-dom';
import logo from '../../assets/images/breezeBuyLogo.svg';

const AuthMain = () => {
    return (
        <div>
            <Grid container sx={{ height: '100vh' }}>
                <Grid
                    item
                    lg={6}
                    sx={{
                        backgroundImage: `url(${authLeft})`,
                        backgroundSize: 'cover',
                        objectFit: 'cover',
                        display: { xs: 'none', md: 'block' },
                    }}
                ></Grid>
                <Grid
                    item
                    lg={6}
                    md={12}
                    xs={12}
                    style={{
                        backgroundImage: `url(${authRight})`,
                        backgroundSize: 'cover',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'opacity 1s ease-in-out',
                    }}
                    width={'100%'}
                >
                    <Stack
                        className={`my-8 mx-2 m-2 px-10 pt-4 bg-black bg-opacity-10 rounded-[15px] backdrop-blur-[50px] flex-col items-center gap-2 inline-flex`}
                    >
                        <img src={logo} alt='Login Image' className='w-[150px]' />
                        <Outlet />
                    </Stack>
                </Grid>
            </Grid>
        </div>
    );
};

export default AuthMain;
