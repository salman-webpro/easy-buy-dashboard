import React, { useEffect, useState } from 'react';
import staffs from '../data/Staffs';
import LeftLayout from '../components/Staffs/LeftLayout';
import RightLayout from '../components/Staffs/RightLayout';
import { Stack } from '@mui/material';

const Staffs = () => {
    const [selectedStaff, setSelectedStaff] = useState(null);

    return (
        <Stack direction='row'>
            <Stack
                width='350px'
                sx={{
                    overflowY: 'auto', // Enable vertical scrolling
                    maxHeight: '97vh', // Set a maximum height
                    '&::-webkit-scrollbar': {
                        width: '0.5em', // Adjust the width of the scrollbar
                    },
                    '&::-webkit-scrollbar-thumb': {
                        backgroundColor: 'transparent', // Set the color of the thumb
                    },
                }}
            >
                <LeftLayout
                    staffs={staffs}
                    setSelectedStaff={setSelectedStaff}
                    selectedStaff={selectedStaff}
                />
            </Stack>
            <Stack width='100%'>
                <RightLayout selectedStaff={selectedStaff} />
            </Stack>
        </Stack>
    );
};

export default Staffs;
