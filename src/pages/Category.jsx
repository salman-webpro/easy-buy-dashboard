import React, { useState } from 'react';
import CategoryTop from '../components/Categories/CategoryTop';
import { Grid, Stack } from '@mui/material';
import CategorySummary from '../components/Categories/CategorySummary';
import CategoryTable from '../components/Categories/CategoryTable';

const Category = () => {
    const [selectedCategory, setSelectedCategory] = useState('');
    return (
        <Stack p={2}>
            <CategoryTop
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
            />
            <Stack mt={4}>
                <Stack height={'161px'} p={2} sx={{ bgcolor: 'white.main', borderRadius: '10px' }}>
                    <CategorySummary />
                </Stack>
            </Stack>{' '}
            <Stack mt={4}>
                <Stack>
                    <CategoryTable selectedCategory={selectedCategory} />
                </Stack>
            </Stack>
        </Stack>
    );
};

export default Category;
