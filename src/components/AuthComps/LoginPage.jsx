import React from 'react';
import { useForm } from 'react-hook-form';
import logo from '../../assets/images/breezeBuyLogo.svg';
import { Stack, TextField, InputAdornment, IconButton, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Link from '@mui/material/Link';

const sharedTextFieldStyles = {
    borderRadius: '6px',
    backgroundColor: '#fff',
    '& fieldset': {
        border: 'none',
        borderRadius: '6px',
    },
    '&:hover fieldset': {},
    '&.Mui-focused fieldset': {
        border: 'none',
    },
    '& .MuiOutlinedInput-root': {
        paddingTop: '0px',
        paddingBottom: '0px',
        fontSize: '14px',
        '& fieldset': {
            borderColor: 'none',
            border: 'none',
        },
        '&:hover fieldset': {
            borderColor: 'none',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'none',
            border: 'none',
        },
    },
};

const LoginPage = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const [showPassword, setShowPassword] = React.useState(false);
    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const onSubmit = (data) => {
        console.log(data);
        setTimeout(() => {
            navigate('dashboard');
        }, 500);
    };

    return (
        <div>
            {/*<Stack*/}
            {/*    style={{*/}
            {/*        transition: 'all 0.7s ease-out',*/}
            {/*    }}*/}
            {/*    className='my-8 mx-2  sm:m-0 h-[534px] px-8 pt-8 bg-black bg-opacity-10 rounded-[15px] backdrop-blur-[50px] flex-col  items-center gap-5 inline-flex'*/}
            {/*>*/}
            {/*<img src={logo} alt='Login Image' className='w-[150px] h-[150px]'></img>*/}
            <form onSubmit={handleSubmit(onSubmit)}>
                <Stack direction={'column'} gap={2}>
                    <Stack>
                        <Typography
                            variant={'labelLarge'}
                            color={'background.main'}
                            mb={0.5}
                            ml={1}
                        >
                            Email
                        </Typography>
                        <TextField
                            width={'100%'}
                            id='email'
                            label=''
                            variant='outlined'
                            type='email'
                            placeholder='Email'
                            name='email'
                            sx={sharedTextFieldStyles}
                        />
                    </Stack>
                    <Stack>
                        <Typography
                            variant={'labelLarge'}
                            color={'background.main'}
                            mb={0.5}
                            ml={1}
                        >
                            Password
                        </Typography>
                        <TextField
                            sx={sharedTextFieldStyles}
                            id='password'
                            label=''
                            variant='outlined'
                            type={showPassword ? 'text' : 'password'}
                            placeholder='Password'
                            name='password'
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position='end'>
                                        <IconButton onClick={handleTogglePasswordVisibility}>
                                            {showPassword ? (
                                                <Visibility style={{ color: 'green' }} />
                                            ) : (
                                                <VisibilityOff style={{ color: 'green' }} />
                                            )}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Stack>
                    <Stack direction={'row'} gap={1}>
                        <Typography variant={'bodySmall'} color={'sc.one'}>
                            Forgot Password?
                        </Typography>
                        <Typography variant={'bodySmall'} color={'yellow.main'}>
                            Click here
                        </Typography>
                    </Stack>
                    <input
                        type='submit'
                        value='Login'
                        className='w-full cursor-pointer md:w-[400px] h-10 px-2.5 rounded-lg border border-white justify-center items-center gap-2 inline-flex text-white hover:bg-[#006C4A] transition ease-in duration-500 '
                    />
                </Stack>
            </form>
            <Stack gap={1} mb={3} mt={2} direction={'row'} justifyContent={'center'}>
                <Typography variant={'bodySmall'} color={'sc.one'}>
                    Don't Have an Account?
                </Typography>

                <Typography variant={'bodySmall'}>
                    <Link
                        color={'yellow.main'}
                        underline={'none'}
                        sx={{ cursor: 'pointer' }}
                        onClick={() => navigate('signup')}
                    >
                        Click here
                    </Link>
                </Typography>
            </Stack>
            {/*</Stack>*/}
        </div>
    );
};

export default LoginPage;
