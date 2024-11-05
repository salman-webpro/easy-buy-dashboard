import React from 'react';
import { Stack, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import Typography from '@mui/material/Typography';
import { useForm } from 'react-hook-form';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const AisleAdd = ({ setIsAddDrawerOpen }) => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    };
    return (
        <Stack width={'466px'} p={2}>
            <Typography variant={'titleLarge'}></Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Stack mt={2} spacing={1}>
                    <label>Aisle Number</label>
                    <TextField placeholder='Category Name' {...register('name')}></TextField>
                    <Stack direction={'row'} spacing={1} sx={{ padding: '10px' }}>
                        <InfoOutlinedIcon fontSize={'12px'} color={'disabled'} />
                        <Typography variant={'bodySmall'} color={'sc.two'}>
                            Aisle number must be unique. Aisle number cannot be match with other
                            Aisle number
                        </Typography>
                    </Stack>
                    <Typography></Typography>
                </Stack>
                <Stack mt={2} spacing={1}>
                    <label>Item Capacity</label>
                    <TextField placeholder='150' {...register('ItemCapacity')}></TextField>
                </Stack>
                <Stack mt={2} spacing={1}>
                    <label>What kind of item will be keep (optional)</label>
                    <TextField
                        placeholder='e.g. Clothings'
                        {...register('WhatKindOfItemWillBeKeep')}
                    ></TextField>
                </Stack>
                <Stack direction={'row'} justifyContent={'end'} mt={3}>
                    <Button
                        startIcon={<SaveOutlinedIcon />}
                        variant='contained'
                        type='submit'
                        onClick={() => setIsAddDrawerOpen(false)}
                    >
                        Save
                    </Button>
                </Stack>
            </form>
        </Stack>
    );
};

export default AisleAdd;
