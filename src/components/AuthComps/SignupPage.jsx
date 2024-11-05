import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import logo from '../../assets/images/breezeBuyLogo.svg';
import { Stack, TextField, InputAdornment, IconButton, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FileUpload from './FileUpload';
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

const SignupPage = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);

    const handleTogglePasswordVisibility = (identifier) => {
        if (identifier === 'password') {
            setShowPassword(!showPassword);
        } else if (identifier === 'confirmPassword') {
            setShowPassword2(!showPassword2);
        }
    };

    const onSubmit = (data) => {
        console.log(data);
        setTimeout(() => {
            navigate('/create-store');
        }, 500);
    };

    return (
        <div>
            {/*<Stack className='  my-8 mx-2  sm:m-0 px-10 pt-4 bg-black bg-opacity-10 rounded-[15px] backdrop-blur-[50px] flex-col  items-center gap-2 inline-flex'>*/}
            {/*    <img src={logo} alt='Login Image' className='w-[150px] '></img>*/}
            <form onSubmit={handleSubmit(onSubmit)}>
                <Stack direction={'column'} gap={2}>
                    <Stack direction={{ sm: 'column', md: 'row' }} gap={2}>
                        <Stack fullWidth>
                            <Typography
                                variant={'labelLarge'}
                                color={'background.main'}
                                mb={0.5}
                                ml={1}
                            >
                                First Name
                            </Typography>
                            <TextField
                                sx={sharedTextFieldStyles}
                                placeholder={'First Name'}
                                variant='outlined'
                                name={'firstName'}
                            />
                        </Stack>
                        <Stack fullWidth>
                            <Typography
                                variant={'labelLarge'}
                                color={'background.main'}
                                mb={0.5}
                                ml={1}
                            >
                                Last Name
                            </Typography>
                            <TextField
                                sx={sharedTextFieldStyles}
                                placeholder={'Last Name'}
                                variant='outlined'
                                name={'lastName'}
                            />
                        </Stack>
                    </Stack>
                    <Stack>
                        <Typography
                            variant={'labelLarge'}
                            color={'background.main'}
                            mb={0.5}
                            ml={1}
                        >
                            Phone Number
                        </Typography>
                        <TextField
                            sx={sharedTextFieldStyles}
                            placeholder={'Phone Number'}
                            variant='outlined'
                            name={'phoneNumber'}
                        />
                    </Stack>
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
                            sx={sharedTextFieldStyles}
                            width={'100%'}
                            id='email'
                            label=''
                            variant='outlined'
                            type='email'
                            placeholder='Email'
                            name='email'
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
                                        <IconButton
                                            onClick={() =>
                                                handleTogglePasswordVisibility('password')
                                            }
                                        >
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
                    <Stack>
                        <Typography
                            variant={'labelLarge'}
                            color={'background.main'}
                            mb={0.5}
                            ml={1}
                        >
                            Confirm Password
                        </Typography>
                        <TextField
                            sx={sharedTextFieldStyles}
                            id='password'
                            label=''
                            variant='outlined'
                            type={showPassword2 ? 'text' : 'password'}
                            placeholder='Password'
                            name='confirmPassword'
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position='end'>
                                        <IconButton
                                            onClick={() =>
                                                handleTogglePasswordVisibility('confirmPassword')
                                            }
                                        >
                                            {showPassword2 ? (
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
                    <Stack>
                        <Typography
                            variant={'labelLarge'}
                            color={'background.main'}
                            mb={0.5}
                            ml={1}
                        >
                            Upload Image
                        </Typography>
                        <Controller
                            name='logo'
                            control={control}
                            defaultValue={null}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <FileUpload
                                    name='logo'
                                    label='Upload Image'
                                    selectedFile={value}
                                    setSelectedFile={onChange}
                                />
                            )}
                        />
                    </Stack>
                    <input
                        type='submit'
                        value='Signup'
                        className='w-full cursor-pointer md:w-[400px] h-10 px-2.5 rounded-lg border border-white justify-center items-center gap-2 inline-flex text-white hover:bg-[#006C4A] transition ease-in duration-500 '
                    />
                </Stack>
            </form>
            <Stack direction={'row'} justifyContent={'center'} gap={1} mb={3} mt={2}>
                <Typography variant={'bodyLarge'} color={'sc.one'}>
                    Already Have an Account?
                </Typography>
                <Typography variant={'bodyLarge'} color={'yellow.main'}>
                    <Link
                        color={'yellow.main'}
                        underline={'none'}
                        sx={{ cursor: 'pointer' }}
                        onClick={() => navigate('/')}
                    >
                        Click here
                    </Link>
                </Typography>
            </Stack>
            {/*</Stack>*/}
            {/*    </Grid>*/}
            {/*</Grid>*/}
        </div>
    );
};

export default SignupPage;
