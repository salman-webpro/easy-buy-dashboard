import React, { useState } from 'react';
import SearchWithDatePicker from '../components/common/SearchWithDatePicker';
import { Grid, Stack } from '@mui/material';
import DataTable from '../components/common/DataTable';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import AdsDialogs from '../components/common/AdsDialog';
import AdsModalLogo from '../assets/images/adsModalLogo.png';
import DealsBox from '../components/common/DealsBox';
import PositionBox from '../components/common/PositionBox';
import DealsDialog from '../components/common/DealsDialog';
import store from '../data/StoreProfile';
const headers = [
    { label: 'Billing Number', key: 'billingNumber' },
    { label: 'Type', key: 'type' },
    { label: 'Status', key: 'status' },
    { label: 'Price', key: 'price' },
    { label: 'Payment Method', key: 'paymentMethod' },
    { label: 'Invoice Date', key: 'invoiceDate' },
];
const AdsPage = () => {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectLowStock, setSelectLowStock] = useState('All Products');
    const YesNoToggle = styled(Switch)(({ theme }) => ({
        padding: 8,
        '& .MuiSwitch-track': {
            borderRadius: 22 / 2,
            '&:before, &:after': {
                content: '""',
                position: 'absolute',
                top: '50%',
                transform: 'translateY(-50%)',
                width: 16,
                height: 16,
            },
            '&:before': {
                backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
                    theme.palette.getContrastText(theme.palette.primary.main),
                )}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
                left: 12,
            },
            '&:after': {
                backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
                    theme.palette.getContrastText(theme.palette.primary.main),
                )}" d="M19,13H5V11H19V13Z" /></svg>')`,
                right: 12,
            },
        },
        '& .MuiSwitch-thumb': {
            boxShadow: 'none',
            width: 16,
            height: 16,
            margin: 2,
        },
    }));
    const [step, setStep] = useState(1);
    const [open, setOpen] = useState(false);
    const [dealsOpen, setDealsOpen] = useState(false);
    const handleDealsOpen = () => {
        setDealsOpen(true);
    };

    const handleDealsClose = () => {
        setDealsOpen(false);
    };
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Stack p={2}>
                <SearchWithDatePicker />
            </Stack>
            <Stack p={2}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6}>
                        <PositionBox handleClickOpen={handleClickOpen} from={'ads'} />
                    </Grid>
                    <Grid item lg={6}>
                        <DealsBox handleDealsOpen={handleDealsOpen} />
                    </Grid>
                    <AdsDialogs
                        handleClose={handleClose}
                        open={open}
                        titleImage={AdsModalLogo}
                        step={step}
                        setStep={setStep}
                    />
                    <DealsDialog dealsOpen={dealsOpen} handleDealsClose={handleDealsClose} />
                </Grid>
            </Stack>

            <Stack p={2}>
                <Typography sx={{ fontSize: '22px', color: '#003E27', marginBottom: '10px' }}>
                    Billing history
                </Typography>
                <DataTable
                    headers={headers}
                    selectedCategory={selectedCategory}
                    selectLowStock={selectLowStock}
                />
            </Stack>
        </>
    );
};

export default AdsPage;
