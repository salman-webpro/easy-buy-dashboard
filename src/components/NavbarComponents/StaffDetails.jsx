import React from 'react';
import { Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import {
    MdOutlineBusinessCenter,
    MdOutlineEmail,
    MdLocationPin,
    MdOutlineAdd,
    MdOutlinePhone,
} from 'react-icons/md';

const DetailsBox = ({ icon, label, value }) => {
    return (
        <Stack>
            <Typography variant={'labelLarge'} color={'primary.800'}>
                {label}
            </Typography>
            <Stack
                direction={'row'}
                alignItems={'center'}
                gap={2}
                sx={{
                    border: '1px solid #BEBEBE',
                    borderRadius: '6px',
                    p: '16px',
                    marginTop: '4px',
                    marginBottom: '8px',
                }}
            >
                <Stack fontSize={20} color={'primary.500'}>
                    {icon}
                </Stack>
                <Typography variant={'bodyLarge'} color={'sc.two'}>
                    {value}
                </Typography>
            </Stack>
        </Stack>
    );
};
const StaffDetails = ({ staff }) => {
    console.log('🚀~ StaffDetails:35 ~  ', staff);
    return (
        <div>
            <Stack sx={{ display: 'flex', alignItems: 'center' }} gap={2} mt={'40px'}>
                <img src={staff.image} style={{ width: 120, height: 120, borderRadius: '6px' }} />
                <Typography variant={'titleLarge'}>{staff.name}</Typography>
            </Stack>
            <DetailsBox label={'Position'} icon={<MdOutlineBusinessCenter />} value={staff.role} />
            <DetailsBox label={'Email'} icon={<MdOutlineEmail />} value={staff.email} />
            <DetailsBox label={'Address'} icon={<MdLocationPin />} value={staff.address} />
            <DetailsBox label={'Phone'} icon={<MdOutlinePhone />} value={staff.phone} />
            <DetailsBox label={'Joining'} icon={<MdOutlineAdd />} value={staff.joinDate} />
        </div>
    );
};

export default StaffDetails;
