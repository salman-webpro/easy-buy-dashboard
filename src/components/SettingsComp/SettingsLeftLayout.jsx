import React from 'react';
import { Stack, Typography } from '@mui/material';

const SettingsLeftLayout = ({ selectedSetting, setSelectedSetting, settings }) => {
    return (
        <Stack width='100%' backgroundColor='#EBF0EE' height={'100vh'}>
            {/*  */}
            <Stack>
                <Stack mt={3}>
                    {settings.map((setting, index) => (
                        <Stack
                            direction={'row'}
                            alignItems={'center'}
                            justifyContent={'start'}
                            key={index}
                            gap={2}
                            onClick={() => setSelectedSetting(setting)}
                            className={`cursor-pointer ${
                                setting === selectedSetting ? 'bg-[#FFFFFF]' : 'bg-[#EBF0EE]'
                            }`}
                            sx={{
                                marginLeft: '20px',
                                padding: '16px',
                                borderRadius: '8px 0px 0px 8px',
                            }}
                        >
                            <Stack>
                                <Typography variant='labelLarge' color='primary.800'>
                                    {setting.title}
                                </Typography>
                                <Typography variant='labelSmall' color='text.main'>
                                    {setting.description}
                                </Typography>
                            </Stack>
                        </Stack>
                    ))}
                </Stack>
            </Stack>
            {/*  */}
        </Stack>
    );
};

export default SettingsLeftLayout;
