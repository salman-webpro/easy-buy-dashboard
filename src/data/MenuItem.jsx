import * as React from 'react';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import CatchingPokemonOutlinedIcon from '@mui/icons-material/CatchingPokemonOutlined';
import FolderCopyOutlinedIcon from '@mui/icons-material/FolderCopyOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import CardGiftcardOutlinedIcon from '@mui/icons-material/CardGiftcardOutlined';
import ConfirmationNumberOutlinedIcon from '@mui/icons-material/ConfirmationNumberOutlined';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import ExtensionOutlinedIcon from '@mui/icons-material/ExtensionOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

const menuItems = [
    { text: 'Dashboard', icon: <DashboardOutlinedIcon />, link: '/dashboard' },
    { text: 'Inventory', icon: <CategoryOutlinedIcon />, link: '/inventory' },
    { text: 'Aisles', icon: <CatchingPokemonOutlinedIcon />, link: '/aisiles' },
    { text: 'Category', icon: <FolderCopyOutlinedIcon />, link: '/category' },
    { text: 'Listing', icon: <FormatListBulletedOutlinedIcon />, link: '/listing' },
    { text: 'Invoice', icon: <ReceiptOutlinedIcon />, link: '/invoices' },
    { text: 'CRM', icon: <PeopleOutlinedIcon />, link: '/crm' },
    { text: 'Staffs', icon: <BadgeOutlinedIcon />, link: '/staff' },
    { text: 'Offers', icon: <CardGiftcardOutlinedIcon />, link: '/offers' },
    { text: 'Coupons', icon: <ConfirmationNumberOutlinedIcon />, link: '/coupons' },
    { text: 'Campaign', icon: <CampaignOutlinedIcon />, link: '/campaigns' },
    { text: 'Ads', icon: <ExtensionOutlinedIcon />, link: '/ads' },
    { text: 'Settings', icon: <SettingsOutlinedIcon />, link: '/settings' },
];
export default menuItems;
