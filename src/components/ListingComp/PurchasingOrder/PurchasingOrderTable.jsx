import React, { useEffect, useState } from 'react';
import { Button, Stack } from '@mui/material';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ConfirmPayment from './ConFirmPaymentDialogs';
import IconButton from '@mui/material/IconButton';
import { MdOutlineClose } from 'react-icons/md';
import TablePaginate from '../../CommonComps/TablePaginate';
import OrderDetails from './OrderDetails';

const PurchaseListHeaders = [
    { label: 'Order Number', key: 'orderNumber' },
    { label: 'Total Spend', key: 'totalSpent' },
    { label: 'Barcode', key: 'barcode' },
    { label: 'User Name', key: 'userName' },
    { label: 'Items', key: 'items' },
    { label: 'Payment Method', key: 'paymentMethod' },
    { label: 'Total Price', key: 'totalPrice' },
    { label: 'Date', key: 'date' },
    { label: 'Payment Status', key: 'paymentStatus' },
    { label: 'More', key: 'more' },
];
const PurchasingOrderTable = ({ ordersData, orderDetailsData }) => {
    const [sortConfig, setSortConfig] = useState({ key: '', direction: '' });
    const [customerOpen, setCustomerOpen] = useState(false);
    const [confirmPaymentOpen, setConfirmPaymentOpen] = useState(false);
    const [draftStatus, setDraftStatus] = useState(false);
    const [draftId, setDraftId] = useState(null);
    const [orderDetails, setOrderDetails] = useState(null);
    const [orderList, setOrderList] = useState(null);

    useEffect(() => {
        setOrderList([...ordersData]);
    }, [draftStatus, draftId]);
    // let [isPaid, setIsPaid] = useState(false);
    const requestSort = (key) => {
        let direction = 'asc';

        if (sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key, direction });
    };
    if (sortConfig.key && sortConfig.direction) {
        ordersData = [...ordersData].sort((a, b) => {
            if (sortConfig.direction === 'asc') {
                if (a[sortConfig.key] < b[sortConfig.key]) return -1;
                if (a[sortConfig.key] > b[sortConfig.key]) return 1;
                return 0;
            }
            if (sortConfig.direction === 'desc') {
                if (a[sortConfig.key] > b[sortConfig.key]) return -1;
                if (a[sortConfig.key] < b[sortConfig.key]) return 1;
                return 0;
            }
            return 0;
        });
    }
    const handleActionClick = (data) => {
        data = orderDetailsData.find((item) => item.userName === data.userName);
        setOrderDetails(data);
        setCustomerOpen(true);
    };
    const handleWaiting = (id) => {
        setDraftStatus(true);
        setDraftId(id);
    };
    const handleConfirmPayment = () => {
        setConfirmPaymentOpen(true);
    };
    const handlePaymentDone = () => {
        setConfirmPaymentOpen(true);
        console.log('handle done');
    };
    const handleCloseCP = (id) => {
        setConfirmPaymentOpen(false);
        if (id === 1) {
            const updatedList = orderList?.map((item, index) => {
                if (index === draftId) {
                    return { ...item, paymentStatus: 'paid' };
                }
                return item;
            });

            setOrderList(updatedList);
        }
    };

    return (
        <>
            <TableContainer component={Paper} sx={{ borderRadius: '10px' }} elevation={1}>
                <Table sx={{ minWidth: 650 }} aria-label='simple table'>
                    <TableHead>
                        <TableRow>
                            {PurchaseListHeaders.map((header) => (
                                <TableCell
                                    key={header.label}
                                    align='left'
                                    onClick={() => requestSort(header.key)}
                                    sx={{
                                        cursor: 'pointer',
                                        fontWeight: 'bold',
                                        bgcolor: 'primary.50',
                                    }}
                                >
                                    {header.label}
                                    {sortConfig.key === header.key && (
                                        <span>{sortConfig.direction === 'asc' ? '↑' : '↓'}</span>
                                    )}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orderList?.map((row, index) => (
                            <TableRow key={index}>
                                {PurchaseListHeaders?.map((header) => (
                                    <TableCell
                                        key={header.key}
                                        align='left'
                                        sx={{
                                            typography: 'bodyLarge',
                                            color: 'primary.900',
                                            lineHeight: '3rem',
                                        }}
                                    >
                                        {/* Render cell data, similar to  inventory table */}

                                        {header.key === 'orderNumber' && row[header.key]}
                                        {header.key === 'totalSpent' && row[header.key]}
                                        {header.key === 'barcode' && row[header.key]}
                                        {header.key === 'userName' && row[header.key]}
                                        {header.key === 'items' && row[header.key]}
                                        {header.key === 'paymentMethod' && row[header.key]}
                                        {header.key === 'totalPrice' && row[header.key]}
                                        {header.key === 'date' && row[header.key]}

                                        {header.key === 'paymentStatus' && (
                                            <>
                                                {row.paymentStatus === 'paid' && (
                                                    <Stack
                                                        justifyContent={'center'}
                                                        alignItems={'center'}
                                                        sx={{
                                                            border: 2,
                                                            borderColor: '#24A524',
                                                            borderRadius: '8px',
                                                            background: '#F5FFF5',
                                                            width: '70px',
                                                            height: '40px',
                                                        }}
                                                    >
                                                        <Typography
                                                            variant={'labelMedium'}
                                                            sx={{
                                                                color: '#24A524',
                                                            }}
                                                        >
                                                            paid
                                                        </Typography>
                                                    </Stack>
                                                )}
                                                {row.paymentStatus === 'waiting' && (
                                                    <>
                                                        {draftStatus && draftId === index ? (
                                                            <Button
                                                                justifyContent={'center'}
                                                                alignItems={'center'}
                                                                sx={{
                                                                    border: 2,
                                                                    borderColor: '#007CC2',
                                                                    borderRadius: '8px',
                                                                    background: '#ECF8FF',
                                                                    width: '160px',
                                                                    height: '40px',
                                                                }}
                                                                onClick={handleConfirmPayment}
                                                            >
                                                                <Typography
                                                                    variant={'labelMedium'}
                                                                    sx={{
                                                                        color: '#007CC2',
                                                                    }}
                                                                >
                                                                    Draft{' '}
                                                                    <span
                                                                        style={{
                                                                            color: '#BEBEBE',
                                                                        }}
                                                                    >
                                                                        (Confirm Payment){' '}
                                                                    </span>
                                                                </Typography>
                                                            </Button>
                                                        ) : (
                                                            <Button
                                                                justifyContent={'center'}
                                                                alignItems={'center'}
                                                                sx={{
                                                                    border: 2,
                                                                    borderColor: '#EE9226',
                                                                    borderRadius: '8px',
                                                                    background: '#FFF7ED',
                                                                    width: '70px',
                                                                    height: '40px',
                                                                }}
                                                                onClick={() => handleWaiting(index)}
                                                            >
                                                                <Typography
                                                                    variant={'labelMedium'}
                                                                    sx={{
                                                                        color: '#EE9226',
                                                                    }}
                                                                >
                                                                    waiting
                                                                </Typography>
                                                            </Button>
                                                        )}
                                                    </>
                                                )}
                                            </>
                                        )}
                                        <div
                                            className='text-gray-300 hover:cursor-pointer'
                                            onClick={() => handleActionClick(row)}
                                        >
                                            {header.key === 'more' && (
                                                <ArrowForwardIosOutlinedIcon />
                                            )}
                                        </div>
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePaginate totalPages={10} />
            <Drawer anchor='right' open={customerOpen} onClose={() => setCustomerOpen(false)}>
                <Box
                    bgcolor={'#FAFAFA'}
                    sx={{
                        width: 1000,
                        p: 2,
                        height: '100vh',
                        borderRadius: '20px 0 20px 0',
                    }}
                >
                    <Stack direction={'row'} alignItems={'center'} justifyContent={'end'}>
                        <IconButton onClick={() => setCustomerOpen(false)}>
                            <MdOutlineClose color={'#005F40'} />
                        </IconButton>
                    </Stack>
                    <OrderDetails orderDetailsData={orderDetails} />
                </Box>
            </Drawer>
            <ConfirmPayment
                confirmPaymentOpen={confirmPaymentOpen}
                handleCloseCP={handleCloseCP}
                handlePaymentDone={handlePaymentDone}
            />
        </>
    );
};
export default PurchasingOrderTable;
