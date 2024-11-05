import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import {
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    Radio,
    RadioGroup,
    Stack,
    TextField,
    Typography,
} from '@mui/material';
import ListItemIcon from '@mui/material/ListItemIcon';
import textIcon from '../../../assets/images/text _Field.png';
import checkIcon from '../../../assets/images/check_box.png';
import radioIcon from '../../../assets/images/radio_button_checked.png';
import dsicountIcon from '../../../assets/images/percent.png';
import Divider from '@mui/material/Divider';
import ClearIcon from '@mui/icons-material/Clear';

import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import DynamicFormField from './DynamicFormField';
import CheckIcon from '@mui/icons-material/Check';
import IconButton from '@mui/material/IconButton';
const initialField = {
    type: '',
    labelText: '',
};
function DynamicField({ handleChange }) {
    const [addOptionView, setAddOptionView] = useState(false);
    const [addFieldListView, setAddFieldListView] = useState(false);
    const [labelEnableStatus, setLabelEnableStatus] = useState(true);
    const [optionEnableStatus, setOptionEnableStatus] = useState(true);

    const [dynamicFields, setDynamicFields] = useState([]);
    const [dynamicFieldsSet, setDynamicFieldsSet] = useState([]);
    const handleFieldChange = (index, value) => {
        const updatedFields = [...dynamicFields];
        updatedFields[index].value = value;
        setDynamicFields(updatedFields);
    };
    const handleAddField = (type, label) => {
        setAddOptionView(!addOptionView);
        setAddFieldListView(!addFieldListView);
        setDynamicFields([...dynamicFields, { type, label, value: '' }]);
    };
    const handleLabelEnable = () => {
        setLabelEnableStatus(!labelEnableStatus);
    };
    const handleAllColse = () => {
        setAddOptionView(false);
        setAddFieldListView(false);
    };
    const handleLabelDone = () => {
        // const { name, value } = e.target;
        setDynamicFieldsSet(dynamicFields);
        setLabelEnableStatus(!labelEnableStatus);
        setAddOptionView(false);
        setAddFieldListView(true);
    };
    const handleCheckDone = () => {
        // const { name, value } = e.target;
        setDynamicFieldsSet(dynamicFields);
        setLabelEnableStatus(!labelEnableStatus);
        setAddOptionView(false);
        setAddFieldListView(true);
    };
    const handleRemoveField = (index) => {
        // Create a new array without the item at the specified index
        const newArray = [
            ...dynamicFieldsSet.slice(0, index),
            ...dynamicFieldsSet.slice(index + 1),
        ];

        // Update the state with the new array
        setDynamicFieldsSet(newArray);
        setDynamicFields(newArray);
    };
    console.log('dynamicFieldsSet', dynamicFieldsSet);
    // console.log('dynamicFields.length', dynamicFields.length);
    console.log('addOptionView', addOptionView);
    console.log('addFieldListView', addFieldListView);
    return (
        <>
            {dynamicFieldsSet.length > 0 && (
                <>
                    {dynamicFieldsSet?.map((item, index) => (
                        <>
                            {item?.value !== '' && item?.type === 'text' && (
                                <Stack mb={1} key={index}>
                                    <Box>
                                        <IconButton
                                            color='primary'
                                            sx={{ p: '5px', float: 'right', zIndex: '1' }}
                                            aria-label='directions'
                                            onClick={() => handleRemoveField(index)}
                                        >
                                            <ClearIcon sx={{ fontSize: '15px' }} />
                                        </IconButton>
                                        <Typography variant={'labelLarge'} mb={1}>
                                            {item?.value}
                                        </Typography>
                                    </Box>
                                    <TextField
                                        onChange={handleChange}
                                        name={item?.value}
                                    ></TextField>
                                </Stack>
                            )}
                            {item?.value !== '' && item?.type === 'checkbox' && (
                                <Box mb={1} key={index}>
                                    <FormControlLabel
                                        control={<Checkbox onChange={handleChange} />}
                                        label={item?.value}
                                    />
                                    <IconButton
                                        color='primary'
                                        sx={{ p: '5px', float: 'right', zIndex: '1' }}
                                        aria-label='directions'
                                        onClick={() => handleRemoveField(index)}
                                    >
                                        <ClearIcon sx={{ fontSize: '15px' }} />
                                    </IconButton>
                                </Box>
                            )}
                            {item?.value !== '' && item?.type === 'radio' && (
                                <Box mb={1} key={index}>
                                    <FormControl component='fieldset'>
                                        <RadioGroup value={item?.value} onChange={handleChange}>
                                            <FormControlLabel
                                                value='option1'
                                                control={<Radio />}
                                                label={item?.value}
                                            />
                                            {/* Add more radio buttons as needed */}
                                        </RadioGroup>
                                    </FormControl>
                                    <IconButton
                                        color='primary'
                                        sx={{ p: '5px', float: 'right', zIndex: '1' }}
                                        aria-label='directions'
                                        onClick={() => handleRemoveField(index)}
                                    >
                                        <ClearIcon sx={{ fontSize: '15px' }} />
                                    </IconButton>
                                </Box>
                            )}
                        </>
                    ))}
                </>
            )}
            <Stack mb={1}>
                <Paper
                    elevation={0}
                    sx={{
                        height: 'auto',
                        padding: '10px',
                        backgroundColor: '#fff',
                        borderRadius: '10px',
                    }}
                >
                    {addOptionView === true && (
                        <IconButton
                            color='primary'
                            sx={{ p: '5px', float: 'right', zIndex: '1' }}
                            aria-label='directions'
                            onClick={handleAllColse}
                        >
                            <ClearIcon sx={{ fontSize: '15px' }} />
                        </IconButton>
                    )}

                    {addFieldListView && (
                        <Box
                            sx={{
                                borderWidth: '1px',
                                border: 0.5,
                                borderColor: 'green',
                                borderRadius: '10px',
                                marginBottom: '10px',
                            }}
                        >
                            <List sx={{ padding: 0 }}>
                                {/*Text Field*/}
                                <ListItem
                                    disablePadding
                                    onClick={() => handleAddField('text', 'New Text Field')}
                                >
                                    <ListItemButton>
                                        <ListItemText>
                                            <Typography variant='h6' style={{ fontSize: '12px' }}>
                                                Text Field
                                            </Typography>
                                        </ListItemText>
                                        <ListItemIcon sx={{ justifyContent: 'flex-end' }}>
                                            <img
                                                src={textIcon}
                                                alt={`icon`}
                                                width={24}
                                                height={24}
                                            />
                                        </ListItemIcon>
                                    </ListItemButton>
                                </ListItem>
                                <Divider />
                                {/*Checkbox Field*/}
                                <ListItem
                                    disablePadding
                                    onClick={() => handleAddField('checkbox', 'New Checkbox')}
                                >
                                    <ListItemButton>
                                        <ListItemText>
                                            <Typography variant='h6' style={{ fontSize: '12px' }}>
                                                Check Box
                                            </Typography>
                                        </ListItemText>
                                        <ListItemIcon sx={{ justifyContent: 'flex-end' }}>
                                            <img
                                                src={checkIcon}
                                                alt={`icon`}
                                                width={15}
                                                height={15}
                                            />
                                        </ListItemIcon>
                                    </ListItemButton>
                                </ListItem>
                                <Divider />
                                {/*Radio Field*/}
                                <ListItem
                                    disablePadding
                                    onClick={() => handleAddField('radio', 'New Radio Button')}
                                >
                                    <ListItemButton>
                                        <ListItemText>
                                            <Typography variant='h6' style={{ fontSize: '12px' }}>
                                                Radio Button
                                            </Typography>
                                        </ListItemText>
                                        <ListItemIcon sx={{ justifyContent: 'flex-end' }}>
                                            <img
                                                src={radioIcon}
                                                alt={`icon`}
                                                width={15}
                                                height={15}
                                            />
                                        </ListItemIcon>
                                    </ListItemButton>
                                </ListItem>
                                {/*<Divider />*/}
                                {/*Discount Field*/}
                                {/*<ListItem*/}
                                {/*    disablePadding*/}
                                {/*    onClick={() => handleAddField('radio', 'New Radio Button')}*/}
                                {/*>*/}
                                {/*    <ListItemButton>*/}
                                {/*        <ListItemText>*/}
                                {/*            <Typography variant='h6' style={{ fontSize: '12px' }}>*/}
                                {/*                Add Discount*/}
                                {/*            </Typography>*/}
                                {/*        </ListItemText>*/}
                                {/*        <ListItemIcon sx={{ justifyContent: 'flex-end' }}>*/}
                                {/*            <img*/}
                                {/*                src={dsicountIcon}*/}
                                {/*                alt={`icon`}*/}
                                {/*                width={15}*/}
                                {/*                height={15}*/}
                                {/*            />*/}
                                {/*        </ListItemIcon>*/}
                                {/*    </ListItemButton>*/}
                                {/*</ListItem>*/}
                            </List>
                        </Box>
                    )}
                    {addOptionView && (
                        <Box
                            sx={{
                                borderRadius: '10px',
                            }}
                        >
                            {dynamicFields?.map((field, index) => (
                                <div key={index}>
                                    {index == dynamicFields.length - 1 && (
                                        <DynamicFormField
                                            key={index}
                                            index={index}
                                            type={field.type}
                                            label={field.label}
                                            value={field.value}
                                            onChange={handleFieldChange}
                                            handleLabelEnable={handleLabelEnable}
                                            handleLabelDone={handleLabelDone}
                                            labelEnableStatus={labelEnableStatus}
                                            handleCheckDone={handleCheckDone}
                                        />
                                    )}
                                </div>
                            ))}
                        </Box>
                    )}

                    <Button
                        variant='contained'
                        endIcon={!addFieldListView ? <AddOutlinedIcon /> : <ClearIcon />}
                        sx={{
                            background: '#fff',
                            color: 'green',
                            boxShadow: 'none',
                            borderWidth: '1px',
                            border: 1,
                            borderColor: 'green',
                            padding: '3px 6px',
                            borderRadius: '12px',
                            '&:hover': {
                                bgColor: 'primary.600',
                                color: '#fff',
                            },
                        }}
                        onClick={() => setAddFieldListView(!addFieldListView)}
                    >
                        Add New
                    </Button>

                    {/* {dynamicFields.map((field, index) => (
                        <DynamicFormField
                            key={index}
                            index={index}
                            type={field.type}
                            label={field.label}
                            value={field.value}
                            onChange={handleFieldChange}
                        />
                    ))}

                    <Button onClick={() => handleAddField('text', 'New Text Field')}>Add Text Field</Button>
                    <Button onClick={() => handleAddField('checkbox', 'New Checkbox')}>Add Checkbox</Button>
                    <Button onClick={() => handleAddField('radio', 'New Radio Button')}>Add Radio Button</Button> */}
                </Paper>
            </Stack>
        </>
    );
}

export default DynamicField;
