import React from 'react';
import { Pagination } from '@mui/material';
import Paper from '@mui/material/Paper';

const TablePaginate = ({ totalPages, currentPage, handlePageChange }) => {
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    return (
        <Paper
            elevation={2}
            sx={{
                mt: 1,
                display: 'flex',
                justifyContent: 'end',
                padding: {
                    xs: '7px 15px',
                    lg: '15px 60px',
                },
                borderRadius: '10px',
                // boxShadow: '0px 0px 15px 0px #3F4D570D !important',
            }}
        >
            <Pagination
                count={totalPages}
                page={currentPage}
                showFirstButton
                showLastButton
                shape='rounded'
                color={'primary'}
                onChange={(e, page) => handlePageChange(e, page)}
            />
        </Paper>
    );
};

export default TablePaginate;

// export default Pagination;
