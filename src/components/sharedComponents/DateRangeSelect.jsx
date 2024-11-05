import * as React from 'react';
import dayjs from 'dayjs';
import PropTypes from 'prop-types';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MultiInputDateRangeField } from '@mui/x-date-pickers-pro';

function DateRangePicker({ startDate, endDate, onDateRangeChange }) {
    const [value, setValue] = React.useState({
        startDate,
        endDate,
    });

    const handleChange = (newValue) => {
        setValue(newValue);
        onDateRangeChange(newValue);
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <MultiInputDateRangeField value={value} onChange={handleChange} />
        </LocalizationProvider>
    );
}

DateRangePicker.propTypes = {
    startDate: PropTypes.object.isRequired,
    endDate: PropTypes.object.isRequired,
    onDateRangeChange: PropTypes.func.isRequired,
};

export default DateRangePicker;
