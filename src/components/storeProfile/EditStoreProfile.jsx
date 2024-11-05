import React from 'react';
import Box from '@mui/material/Box';
import { Button, ButtonGroup, Stack, TextField } from '@mui/material';
import Typography from '@mui/material/Typography';
import { TimePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import imageHolder from '../../assets/images/imageHolder.png';
import cover from '../../assets/images/cover.png';
function EditStoreProfile({ store, toggleEditStoreDrawer }) {
    return (
        <Stack sx={{ width: { md: '484px', xs: '100%' } }} p={2}>
            <Box
                sx={{
                    width: '100%',
                    height: '150px',
                    backgroundSize: 'cover',
                    p: 2,
                    backgroundImage: `url(${cover})`,
                    marginBottom: '40px',
                }}
            >
                <Box className='mx-4 my-2 rounded-xl'></Box>
                <img
                    src={store?.image}
                    alt={`cover`}
                    style={{
                        width: '70px',
                        height: '70px',
                        position: 'absolute',
                        marginTop: '100px',
                        border: '2px solid #fff',
                        borderRadius: '50%',
                    }}
                />
                <img
                    src={imageHolder}
                    alt={`cover`}
                    style={{
                        width: '25px',
                        height: '25px',
                        position: 'absolute',
                        marginTop: '100px',
                        marginLeft: '50px',
                        borderRadius: '50%',
                    }}
                />
            </Box>
            {/* Edit Store Profile */}
            <Stack mt={3}>
                <Stack mb={1}>
                    <Typography variant={'labelLarge'} mb={1}>
                        Branch Name
                    </Typography>
                    <TextField defaultValue={store.storeName}></TextField>
                </Stack>
                <Stack mb={1}>
                    <Typography variant={'labelLarge'} mb={1}>
                        Email
                    </Typography>
                    <TextField defaultValue={store.email}></TextField>
                </Stack>
                <Stack mb={1}>
                    <Typography variant={'labelLarge'} mb={1}>
                        Phone Number
                    </Typography>
                    <TextField defaultValue={store.phone}></TextField>
                </Stack>
                <Stack mb={1}>
                    <Typography variant={'labelLarge'} mb={1}>
                        Address
                    </Typography>
                    <TextField defaultValue={store.storeAddress}></TextField>
                </Stack>
                <Stack mb={1}>
                    <Typography variant={'labelLarge'} mb={1}>
                        Slogan
                    </Typography>
                    <TextField defaultValue={store.slogan}></TextField>
                </Stack>
                <Stack mb={1}>
                    <Typography variant={'labelLarge'} mb={1}>
                        Opening Time
                    </Typography>
                    <TimePicker defaultValue={dayjs('2022-04-17T15:30')} />
                </Stack>
                <Stack mb={1}>
                    <Typography variant={'labelLarge'} mb={1}>
                        Closing Time
                    </Typography>
                    <TimePicker defaultValue={dayjs('2022-04-17T15:30')} />
                </Stack>
            </Stack>
            <Stack direction={'row'} justifyContent={'flex-end'}>
                <Button
                    variant={'contained'}
                    startIcon={<SaveOutlinedIcon />}
                    onClick={toggleEditStoreDrawer(false)}
                >
                    Save
                </Button>
            </Stack>
        </Stack>
    );
}

export default EditStoreProfile;
