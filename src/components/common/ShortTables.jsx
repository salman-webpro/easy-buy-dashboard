import React, { useState } from 'react';
import { Checkbox, Paper, Stack, TableCell, Typography } from '@mui/material';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import imgAvatar from '../../assets/images/imagesmode.png';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
const ShortTables = ({ data, type, setItem }) => {
    const [selectedItems, setSelectedItems] = useState([]);

    const handleSelectAll = () => {
        const newSelectedItems =
            selectedItems?.length === data?.length ? [] : data.map((item) => item?.id);
        setSelectedItems(newSelectedItems);
        setItem(data);
    };
    const handleCheckboxChange = (id) => {
        console.log('🚀~ ShortTables:20 ~ ', id);
        const isSelected = selectedItems?.includes(id);
        const newSelectedItems = isSelected
            ? selectedItems?.filter((selectedId) => selectedId !== id)
            : [...selectedItems, id];
        setSelectedItems(newSelectedItems);
        getFullItemData();
    };

    const getFullItemData = () => {
        const filteredProducts = data?.filter((product) => selectedItems.includes(product?.id));
        setItem(filteredProducts);
    };

    return (
        <TableContainer sx={{ borderRadius: '8px', mt: 1, maxHeight: '400px' }}>
            <Table sx={{ overflowY: 'scroll', '& td': { border: 0 } }}>
                <TableHead
                    sx={{
                        bgcolor: 'primary.50',
                    }}
                >
                    <TableCell>
                        <Stack direction={'row'} alignItems={'center'} gap={0.5}>
                            {/* this will checkbox all items */}
                            <Checkbox
                                checked={selectedItems?.length === data?.length}
                                onClick={handleSelectAll}
                            />
                            <img src={imgAvatar} />
                            <Typography variant={'labelMedium'} color={'primary.700'}>
                                {type === 'customers' ? 'Customer Name' : 'Product'}
                            </Typography>
                        </Stack>
                    </TableCell>
                    <TableCell>
                        <Typography variant={'labelMedium'} color={'primary.700'}>
                            {type === 'customers' ? 'Total Spendings' : 'Price'}
                        </Typography>
                    </TableCell>
                </TableHead>
                <TableBody>
                    {data?.map((item, index) => (
                        <TableRow key={index}>
                            <TableCell>
                                <Stack
                                    direction={'row'}
                                    justifyContent={'start'}
                                    alignItems={'center'}
                                    gap={0.5}
                                >
                                    {/* this will only checkbox this item */}
                                    <Checkbox
                                        checked={selectedItems.includes(item.id)}
                                        onChange={() => handleCheckboxChange(item.id)}
                                    />
                                    <img
                                        src={item?.image || item?.images[0]}
                                        height={'30px'}
                                        width={'30px'}
                                        style={{ borderRadius: '4px' }}
                                    />
                                    <Typography variant={'bodySmall'} color={'primary.900'}>
                                        {item?.name}
                                    </Typography>
                                </Stack>
                            </TableCell>
                            <TableCell>
                                <Typography variant={'bodySmall'} color={'primary.900'}>
                                    ${item?.totalSpendings || item?.price}
                                </Typography>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ShortTables;
