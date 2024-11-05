// DynamicFormField.js

import React from 'react';
import {
    Input,
    FormControlLabel,
    Checkbox,
    Radio,
    RadioGroup,
    FormControl,
    Stack,
    TextField,
    Typography,
    Button,
} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import editSqure from '../../../assets/images/edit_square.png';
import CheckIcon from '@mui/icons-material/Check';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import ClearIcon from '@mui/icons-material/Clear';
const DynamicFormField = ({
    index,
    type,
    label,
    value,
    onChange,
    handleLabelEnable,
    handleLabelDone,
    handleCheckDone,
    labelEnableStatus,
}) => {
    const handleChange = (e) => {
        onChange(index, e.target.value);
    };

    console.log('index', index);
    // console.log('value', value);
    // console.log('label', label);

    switch (type) {
        case 'text':
            return (
                <>
                    <Stack
                        mb={1}
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'end',
                            marginBottom: 0,
                            width: '100%',
                        }}
                    >
                        <Typography variant={'labelLarge'} mb={1}>
                            Label
                        </Typography>

                        {labelEnableStatus ? (
                            <IconButton
                                color='primary'
                                sx={{ p: '10px' }}
                                aria-label='directions'
                                onClick={handleLabelEnable}
                            >
                                <img src={editSqure} alt={`icon`} width={15} height={15} />
                            </IconButton>
                        ) : (
                            <IconButton
                                color='primary'
                                sx={{ p: '10px' }}
                                aria-label='directions'
                                onClick={handleLabelDone}
                            >
                                <CheckIcon sx={{ fontSize: '15px' }} />
                            </IconButton>
                        )}
                    </Stack>
                    <Input
                        label={label}
                        value={value}
                        onChange={handleChange}
                        placeholder='e.g Label'
                        sx={{ width: '100%', marginBottom: '5px' }}
                        disabled={labelEnableStatus}
                    />
                </>
            );

        case 'checkbox':
            return (
                <>
                    <Stack
                        mb={1}
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'end',
                            marginBottom: 0,
                            width: '100%',
                        }}
                    >
                        <Typography variant={'labelLarge'} mb={1}>
                            Options
                        </Typography>
                    </Stack>
                    <Input
                        label={label}
                        value={value}
                        onChange={handleChange}
                        placeholder='e.g Label'
                        sx={{ width: '100%', marginBottom: '5px' }}
                    />
                    <FormControlLabel
                        control={<Checkbox onChange={handleChange} />}
                        label={value}
                    />
                    <IconButton
                        color='primary'
                        sx={{ p: '10px', float: 'right', zIndex: '1' }}
                        aria-label='directions'
                        onClick={handleCheckDone}
                    >
                        <CheckIcon sx={{ fontSize: '15px' }} />
                    </IconButton>
                    <br />
                    {/*<Button*/}
                    {/*    variant='contained'*/}
                    {/*    sx={{*/}
                    {/*        background: '#fff',*/}
                    {/*        color: 'green',*/}
                    {/*        boxShadow: 'none',*/}
                    {/*        borderWidth: '1px',*/}
                    {/*        border: 1,*/}
                    {/*        borderColor: 'green',*/}
                    {/*        padding: '3px 6px',*/}
                    {/*        borderRadius: '12px',*/}
                    {/*        fontSize: '10px',*/}
                    {/*        float: 'right',*/}
                    {/*        '&:hover': {*/}
                    {/*            bgColor: 'primary.600',*/}
                    {/*            color: '#fff',*/}
                    {/*        },*/}
                    {/*    }}*/}
                    {/*    onClick={() => handleCheckDone}*/}
                    {/*>*/}
                    {/*    Add More*/}
                    {/*</Button>*/}
                </>
            );

        case 'radio':
            return (
                <>
                    {' '}
                    <Stack
                        mb={1}
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'end',
                            marginBottom: 0,
                            width: '100%',
                        }}
                    >
                        <Typography variant={'labelLarge'} mb={1}>
                            Options
                        </Typography>
                    </Stack>
                    <Input
                        label={label}
                        value={value}
                        onChange={handleChange}
                        placeholder='e.g Label'
                        sx={{ width: '100%', marginBottom: '5px' }}
                    />
                    <IconButton
                        color='primary'
                        sx={{ p: '10px', float: 'right', zIndex: '1' }}
                        aria-label='directions'
                        onClick={handleCheckDone}
                    >
                        <CheckIcon sx={{ fontSize: '15px' }} />
                    </IconButton>
                    <br />
                    <FormControl component='fieldset'>
                        <RadioGroup value={value} onChange={handleChange}>
                            <FormControlLabel value='option1' control={<Radio />} label={value} />
                            {/* Add more radio buttons as needed */}
                        </RadioGroup>
                    </FormControl>
                </>
            );

        default:
            return null;
    }
};

export default DynamicFormField;
