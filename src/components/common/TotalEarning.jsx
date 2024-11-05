import React, { useState } from 'react';
import { Grid, Typography, Paper, FormControlLabel, Stack, TextField } from '@mui/material';
import moneyIcon from '../../assets/images/moneyIcon.png';
import { DemoItem } from '@mui/x-date-pickers/internals/demo';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import dayjs, { Dayjs } from 'dayjs';
const TotalEarning = ({ earning }) => {
    const [open, setOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);

    const [value, setValue] = React.useState(dayjs('2023-08-18T21:11:54'));

    const handleChange = (newValue) => {
        setValue(newValue);
    };
    console.log('etc');
    return (
        <Grid
            container
            sx={{
                backgroundColor: '#FAFAFA',
                padding: '10px',
                borderRadius: '10px',
            }}
        >
            <Grid item sm={3}>
                <img src={moneyIcon} alt='dealsBox' style={{ width: '100px', height: '100px' }} />
            </Grid>

            <Grid item sm={6}>
                <Stack padding={1}>
                    <Typography
                        variant={'bodyMedium'}
                        color={'primary.800'}
                        sx={{
                            color: '#BEBEBE',
                            flexGrow: '1',
                            flexBasis: 'auto',
                            font: '400 16px/24px Roboto, sans-serif ',
                        }}
                    >
                        Total Earning
                    </Typography>
                    <Typography
                        color={'primary.500'}
                        // onClick={handleClickOpen}
                        sx={{
                            cursor: 'pointer',
                            fontSize: '30px',
                        }}
                    >
                        $ {earning}
                    </Typography>
                </Stack>
            </Grid>

            <Grid item sm={3} sx={{ display: 'flex', alignItems: 'center' }}>
                <MobileDatePicker
                    inputFormat='MM/DD/YYYY'
                    value={value}
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}
                />
            </Grid>
        </Grid>
    );
};

export default TotalEarning;
