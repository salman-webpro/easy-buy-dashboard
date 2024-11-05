import React, { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import { MdCheckCircle, MdOutlineRadioButtonUnchecked } from 'react-icons/md';

const CustomCheckbox = ({ checked, setChecked, defaultCheck }) => {
    const handleChange = () => {
        setChecked(!checked);
    };

    return (
        <Checkbox
            icon={<MdOutlineRadioButtonUnchecked style={{ fontSize: 20, color: 'black' }} />}
            checkedIcon={<MdCheckCircle style={{ fontSize: 20, color: 'black' }} />}
            checked={checked}
            defaultChecked={defaultCheck}
            onChange={handleChange}
        />
    );
};

export default CustomCheckbox;
