import React from 'react';
import Switch from '@mui/material/Switch';

export default function IOSSwitch({ checked, onChange }) {
    return (
        <Switch
            sx={{
                width: 36,
                height: 20,
                padding: 0,
                '& .MuiSwitch-switchBase': {
                    padding: 0,
                    margin: 2,
                    transitionDuration: '300ms',
                    '&.Mui-checked': {
                        transform: 'translateX(14px)',
                        color: '#fff',
                        '& + .MuiSwitch-track': {
                            backgroundColor: '#65C466',
                            opacity: 1,
                            border: 0,
                        },
                        '&.Mui-disabled + .MuiSwitch-track': {
                            opacity: 0.5,
                        },
                    },
                    '&.Mui-focusVisible .MuiSwitch-thumb': {
                        color: '#33cf4d',
                        border: '6px solid #fff',
                    },
                    '&.Mui-disabled .MuiSwitch-thumb': {
                        color: '#E9E9EA',
                    },
                    '&.Mui-disabled + .MuiSwitch-track': {
                        opacity: 0.7,
                    },
                },
                '& .MuiSwitch-thumb': {
                    boxSizing: 'border-box',
                    width: 20,
                    height: 20,
                },
                '& .MuiSwitch-track': {
                    borderRadius: 20 / 2,
                    backgroundColor: '#E9E9EA',
                    opacity: 1,
                    transition: 'background-color 500ms',
                },
            }}
            checked={checked}
            onChange={onChange}
        />
    );
}
