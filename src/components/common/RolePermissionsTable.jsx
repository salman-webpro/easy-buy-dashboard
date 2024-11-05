import React from 'react';
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from '@mui/material';
import CustomCheckbox from './CustomCheckbox'; // Make sure to import your CustomCheckbox component

const RolePermissionsTable = ({ title, data, columns }) => {
    return (
        <div
            style={{
                marginTop: '10px',
                marginBottom: '20px',
            }}
        >
            <Typography variant={'headlineSmallBold'} color={'primary.600'}>
                {title}
            </Typography>
            <TableContainer component={Paper} sx={{ borderRadius: '10px', mt: 1 }}>
                <Table
                    sx={{ minWidth: 650, overflowY: 'scroll', '& td': { border: 0 } }}
                    size={'small'}
                >
                    <TableHead>
                        {columns.map((column, index) => (
                            <TableCell
                                key={index}
                                sx={{
                                    bgcolor: 'primary.50',
                                    ...(column.width && { width: column.width }),
                                }}
                            >
                                {column.label}
                            </TableCell>
                        ))}
                    </TableHead>

                    <TableBody>
                        {data.map((item, index) => (
                            <TableRow key={index}>
                                {item.role && (
                                    <>
                                        <TableCell>
                                            <Typography variant={'bodyLarge'} color={'primary.900'}>
                                                {item.role}
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <CustomCheckbox defaultCheck={item.view} />
                                        </TableCell>
                                        <TableCell>
                                            <CustomCheckbox defaultCheck={item.update} />
                                        </TableCell>
                                        <TableCell>
                                            <CustomCheckbox defaultCheck={item.delete} />
                                        </TableCell>
                                    </>
                                )}
                                {item.actions && (
                                    <>
                                        <TableCell>
                                            <Typography variant={'bodyLarge'} color={'primary.900'}>
                                                {item.actions}
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <CustomCheckbox defaultCheck={item.BranchManager} />
                                        </TableCell>
                                        <TableCell>
                                            <CustomCheckbox defaultCheck={item.POSOperator} />
                                        </TableCell>
                                        <TableCell>
                                            <CustomCheckbox defaultCheck={item.Staffs} />
                                        </TableCell>
                                    </>
                                )}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default RolePermissionsTable;
