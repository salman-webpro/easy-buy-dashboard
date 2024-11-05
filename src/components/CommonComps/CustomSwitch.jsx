import * as React from 'react';
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import { FormControlLabel } from '@mui/material';

const IOSSwitch = styled((props) => (
    <Switch focusVisibleClassName='.Mui-focusVisible' disableRipple {...props} />
))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    '& .MuiSwitch-switchBase': {
        padding: 0,
        margin: 2,
        transitionDuration: '300ms',
        '&.Mui-checked': {
            transform: 'translateX(16px)',
            color: 'primary',
            '& + .MuiSwitch-track': {
                backgroundColor: '#005F40',
                opacity: 1,
                border: 0,
            },
            '&.Mui-disabled + .MuiSwitch-track': {
                opacity: 0.5,
            },
        },
        '&.Mui-disabled .MuiSwitch-thumb': {
            color: '#fff',
        },
        '&.Mui-disabled + .MuiSwitch-track': {
            opacity: 0.7,
        },
    },
    '& .MuiSwitch-thumb': {
        color: '#fff',
        boxSizing: 'border-box',
        width: 22,
        height: 22,
    },
    '& .MuiSwitch-track': {
        borderRadius: 26 / 2,
        backgroundColor: '#C5C5C5',
        opacity: 1,
        transition: theme.transitions.create(['background-color'], {
            duration: 500,
        }),
    },
}));

export default function CustomSwitch({ switchValue, setSwitchValue }) {
    const [checked, setChecked] = React.useState(switchValue);

    const handleChange = (event) => {
        setChecked(event.target.checked);
        setSwitchValue(!switchValue);
    };
    return <IOSSwitch sx={{ m: 1 }} checked={checked} onChange={handleChange} />;
}
