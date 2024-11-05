import React from 'react';
import { Stack } from '@mui/material';
import General from './General';
import StorePage from './StorePage';
import ThirdPartyPage from './ThirdPartyPage';
import PaymentMethodPage from './PaymentMethodPage';
import PlanAndBillings from './PlanAndBillings';
import RolesAndPermissions from './RolesAndPermissions';

const SettingsRightLayout = ({ selectedSetting }) => {
    return (
        <Stack
            fullWidth
            sx={{
                height: '93vh',
                padding: '24px',
                backgroundColor: 'white.main',
                position: 'relative',
            }}
        >
            {selectedSetting.title === 'General' && <General />}
            {selectedSetting.title === 'Store' && <StorePage />}
            {selectedSetting.title === 'Third Party' && <ThirdPartyPage />}
            {selectedSetting.title === 'Payment Method' && <PaymentMethodPage />}
            {selectedSetting.title === 'Plans & Billings' && <PlanAndBillings />}
            {selectedSetting.title === 'Roles & Permissions' && <RolesAndPermissions />}
        </Stack>
    );
};

export default SettingsRightLayout;
