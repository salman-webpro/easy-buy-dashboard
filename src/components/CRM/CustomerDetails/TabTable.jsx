import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import InvoicesTable from '../../InventoryComponents/InvoicesTable';
import MostPurchasedTable from './MostPurchasedTable';

export default function TabTable({ customerDetails }) {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box
            mt={2}
            bgcolor={'#FFFFFF'}
            sx={{
                width: '100%',
                p: 2,
                height: '100vh',
                borderRadius: '8px',
            }}
        >
            <Box sx={{ borderColor: 'divider' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    centered
                    aria-label='tabs with tables'
                    sx={{ border: '1px solid #f15a2d', borderRadius: '8px' }}
                >
                    <Tab label='Invoices' sx={{ marginRight: '120px' }} />

                    <Tab label='Most Purchsed Item' sx={{ marginLeft: '120px' }} />
                </Tabs>
            </Box>
            <Box mt={1}>
                {value === 0 && (
                    <Box>
                        <InvoicesTable Invoices={customerDetails.Invoices} />
                    </Box>
                )}
                {value === 1 && (
                    <Box>
                        <MostPurchasedTable MostPurchases={customerDetails.MostPurchases} />
                    </Box>
                )}
            </Box>
        </Box>
    );
}
