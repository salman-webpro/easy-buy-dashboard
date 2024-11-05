import React from 'react';
import {
    Stack,
    Typography,
    Paper,
    Table,
    TableHead,
    TableRow,
    TableBody,
    TableCell,
    TableContainer,
} from '@mui/material';
import CustomCheckbox from '../common/CustomCheckbox';
import RolePermissionsTable from '../common/RolePermissionsTable';

const roleData = [
    { role: 'Branch Manager', view: true, update: true, delete: true },
    { role: 'POS Operator', view: true, update: true, delete: false },
    { role: 'Staffs', view: true, update: false, delete: false },
];
const roleColumns = [
    { label: 'Role', width: '40%' },
    { label: 'View', width: '20%' },
    { label: 'Update', width: '20%' },
    { label: 'Delete', width: '20%' },
];
const permissionColumns = [
    { label: 'Actions', width: '40%' },
    { label: 'Branch Manager', width: '20%' },
    { label: 'POS Operator', width: '20%' },
    { label: 'Staffs', width: '20%' },
];
const perMissionData = [
    {
        actions: 'Inventory Settings',
        BranchManager: true,
        POSOperator: true,
        Staffs: true,
    },
    {
        actions: 'Category Settings',
        BranchManager: false,
        POSOperator: true,
        Staffs: true,
    },
    {
        actions: 'Listing Settings',
        BranchManager: true,
        POSOperator: false,
        Staffs: true,
    },
    {
        actions: 'CRM Settings',
        BranchManager: false,
        POSOperator: true,
        Staffs: false,
    },
    {
        actions: 'Staff Settings',
        BranchManager: false,
        POSOperator: true,
        Staffs: false,
    },
    {
        actions: 'Invoice Settings',
        BranchManager: true,
        POSOperator: true,
        Staffs: true,
    },
    {
        actions: 'Offer Settings',
        BranchManager: true,
        POSOperator: false,
        Staffs: true,
    },
    {
        actions: 'Coupon Settings',
        BranchManager: true,
        POSOperator: true,
        Staffs: false,
    },
    {
        actions: 'Campaign Settings',
        BranchManager: true,
        POSOperator: true,
        Staffs: false,
    },
];

const RolesAndPermissions = () => {
    return (
        <Stack>
            <Typography variant={'displayMedium'} color={'primary.800'}>
                Roles & Permissions
            </Typography>
            <>
                <RolePermissionsTable title={'Roles'} data={roleData} columns={roleColumns} />
                <RolePermissionsTable
                    title={'Permissions'}
                    data={perMissionData}
                    columns={permissionColumns}
                />
            </>
        </Stack>
    );
};

export default RolesAndPermissions;
