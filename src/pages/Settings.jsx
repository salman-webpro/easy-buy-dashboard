import { Stack } from '@mui/material';
import React, { useState } from 'react';
import SettingsLeftLayout from '../components/SettingsComp/SettingsLeftLayout';
import SettingsRightLayout from '../components/SettingsComp/SettingsRightLayout';
import settings from '../data/Settings';

const Settings = () => {
    const [selectedSetting, setSelectedSetting] = useState(settings[0]);

    return (
        <Stack direction='row'>
            <Stack
                width='350px'
                sx={{
                    overflowY: 'auto',
                    maxHeight: '93vh',
                }}
            >
                <SettingsLeftLayout
                    settings={settings}
                    selectedSetting={selectedSetting}
                    setSelectedSetting={setSelectedSetting}
                />
            </Stack>
            <Stack
                width='100%'
                sx={{
                    overflowY: 'auto',
                    maxHeight: '93vh',
                }}
            >
                <SettingsRightLayout selectedSetting={selectedSetting} />
            </Stack>
        </Stack>
    );
};

export default Settings;
