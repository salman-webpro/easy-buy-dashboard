import React from 'react';
import { Avatar, Button, Stack, TextField } from '@mui/material';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
// import { Products } from '../../../data';
import Products from '../../../data/Product';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import DoneRoundedIcon from '@mui/icons-material/DoneRounded';
import OrderCards from './OrderCards';
import ProductsAddList from './ProductsAddList';
import PurchaseLIstItemCard from './PurchaseLIstItemCard';

{
    console.log(Products);
}
const orderListItems = ({ orderDetailsData }) => {
    let orders = orderDetailsData.orders;
    const firstOrder = orders[0].id;
    console.log('🚀~ OrderListItems:16 ~  ', firstOrder);
    let [selectedList, setSelectedList] = React.useState(firstOrder);
    let order = orders.find((list) => list.id === selectedList);
    let [isAddItem, setIsAddItem] = React.useState(false);
    return (
        <Stack>
            <Stack direction={'row'} sx={{ width: '100%', overflowX: 'auto' }} spacing={2} mt={3}>
                {orders.map((list, index) => (
                    <Stack sx={{ cursor: 'pointer' }} onClick={() => setSelectedList(list.id)}>
                        <OrderCards list={list} key={index} />
                    </Stack>
                ))}
            </Stack>
            <Stack mt={3} px={4}>
                <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                    <Typography variant={'titleMedium'} color={'primary.700'}>
                        Purchasing order
                    </Typography>
                    {isAddItem && (
                        <TextField
                            id='outlined-start-adornment'
                            sx={{
                                m: 1,
                                width: '541px',
                                padding: '10px, 48px, 10px, 10px',
                                font: 'bodyMedium',
                                borderRadius: '4px',
                            }}
                            placeholder='Search by Product Name, Category, Aisle Number, SKU, Barcode Number'
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position='start'>
                                        <SearchIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    )}
                    <Button
                        variant={'contained'}
                        onClick={() => setIsAddItem(!isAddItem)}
                        endIcon={isAddItem ? <DoneRoundedIcon size /> : <AddOutlinedIcon />}
                    >
                        {isAddItem ? 'Confirm' : 'add item'}
                    </Button>
                </Stack>
                {!isAddItem ? (
                    <Stack spacing={3} mt={3} sx={{ height: '65vh', overflowY: 'auto' }}>
                        {order?.items?.map((item, index) => (
                            <PurchaseLIstItemCard
                                key={index}
                                image={item.images[0]}
                                name={item.name}
                                price={item.price}
                                category={item.category}
                                quantity={item.quantity}
                                paymentStatus={orderDetailsData.paymentStatus}
                                sku={item.sku}
                            />
                        ))}
                    </Stack>
                ) : (
                    <Stack spacing={3} mt={3} sx={{ height: '65vh', overflowY: 'auto' }}>
                        {Products.map((item, index) => (
                            <ProductsAddList
                                key={index}
                                image={item.images[0]}
                                name={item.name}
                                price={item.price}
                                category={item.category}
                                quantity={item.quantity}
                                paymentStatus={orderDetailsData.paymentStatus}
                                sku={item.sku}
                            />
                        ))}
                    </Stack>
                )}
            </Stack>
        </Stack>
    );
};
export default orderListItems;
