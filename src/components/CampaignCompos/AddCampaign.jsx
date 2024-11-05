import React, { useState } from 'react';
import { MenuItem, Select, Stack, TextField, Typography } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import ProductCategorySelect from './ProductCategorySelect';
import ListItemText from '@mui/material/ListItemText';
import dayjs from 'dayjs';
import DateRangePicker from '../../components/CampaignCompos/DateRangePicker';
import Button from '@mui/material/Button';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';

const AddCampaign = ({ toggleAddDrawer }) => {
    const { control, register, handleSubmit } = useForm();
    const [discountType, setDiscountType] = useState('Percentage');
    const [startDate, setStartDate] = React.useState(dayjs() || null);
    const [endDate, setEndDate] = React.useState(dayjs() || null);

    const handleChangeType = (event) => {
        setDiscountType(event.target.value);
    };
    const onSubmit = (data) => {
        console.log('Form Data:', data);
    };
    return (
        <Stack width={'100%'} p={2}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Stack alignItems={'center'} justifyContent={'center'} mt={2}>
                    <Stack width='100%'>
                        <Typography sx={{ mb: 0.5 }} variant={'labelLarge'} color='primary.800'>
                            Campaign Name
                        </Typography>
                        <TextField
                            placeholder='e.g.: End-Of-Season Blowout '
                            fullWidth
                            {...register('campaignName')}
                        />
                    </Stack>
                    <Stack width='100%' mt={1}>
                        <Typography sx={{ mb: 0.5 }} variant={'labelLarge'} color='primary.800'>
                            Product Category
                        </Typography>
                        <Controller
                            name='categoryName'
                            control={control}
                            defaultValue={[]}
                            render={({ field }) => (
                                <ProductCategorySelect
                                    onChange={(value) => field.onChange(value)}
                                />
                            )}
                        />
                    </Stack>
                    <Stack width='100%' mt={1}>
                        <Typography sx={{ mb: 0.5 }} variant={'labelLarge'} color='primary.800'>
                            Items
                        </Typography>
                        {/* TODO: Choose items based on category? or all? or none */}
                        <ProductCategorySelect />
                    </Stack>
                    <Stack width='100%' mt={1}>
                        <Typography sx={{ mb: 0.5 }} variant={'labelLarge'} color='primary.800'>
                            Discount Type
                        </Typography>
                        <Controller
                            name='discountType'
                            control={control}
                            defaultValue=''
                            render={({ field }) => (
                                <Select {...field} value={discountType} onChange={handleChangeType}>
                                    <MenuItem value={'Percentage'}>Percentage</MenuItem>
                                    <MenuItem value={'Amount'}>Amount</MenuItem>
                                </Select>
                            )}
                        />
                    </Stack>
                    <Stack width='100%' mt={1}>
                        <Typography sx={{ mb: 0.5 }} variant={'labelLarge'} color='primary.800'>
                            Discount Amount
                        </Typography>
                        <TextField
                            placeholder='e.g.: End-Of-Season Blowout'
                            fullWidth
                            {...register('discountAmount')}
                        />
                    </Stack>
                    <Stack width='100%' mt={1}>
                        <Typography sx={{ mb: 0.5 }} variant={'labelLarge'} color='primary.800'>
                            Duration
                        </Typography>
                        <Controller
                            name='dateRange'
                            control={control}
                            defaultValue={{ startDate: null, endDate: null }}
                            render={({ field }) => (
                                <DateRangePicker
                                    startDate={field.startDate}
                                    endDate={field.endDate}
                                    setStartDate={(date) => field.onChange(date)}
                                    setEndDate={(date) => field.onChange(date)}
                                />
                            )}
                        />
                    </Stack>
                </Stack>
                <Stack direction='row' justifyContent='flex-end' mt={4}>
                    <Button
                        type='submit'
                        variant='contained'
                        startIcon={<SaveOutlinedIcon />}
                        onClick={toggleAddDrawer}
                    >
                        Save
                    </Button>
                </Stack>
            </form>
        </Stack>
    );
};

export default AddCampaign;
