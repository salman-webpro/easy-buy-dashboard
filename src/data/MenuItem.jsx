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
    { text: 'Dashboard', icon: <DashboardOutlinedIcon />, link: '/easy-buy-dashboard/dashboard' },
    { text: 'Inventory', icon: <CategoryOutlinedIcon />, link: '/easy-buy-dashboard/inventory' },
    { text: 'Aisles', icon: <CatchingPokemonOutlinedIcon />, link: '/easy-buy-dashboard/aisiles' },
    { text: 'Category', icon: <FolderCopyOutlinedIcon />, link: '/easy-buy-dashboard/category' },
    {
        text: 'Listing',
        icon: <FormatListBulletedOutlinedIcon />,
        link: '/easy-buy-dashboard/listing',
    },
    { text: 'Invoice', icon: <ReceiptOutlinedIcon />, link: '/easy-buy-dashboard/invoices' },
    { text: 'CRM', icon: <PeopleOutlinedIcon />, link: '/easy-buy-dashboard/crm' },
    { text: 'Staffs', icon: <BadgeOutlinedIcon />, link: '/easy-buy-dashboard/staff' },
    { text: 'Offers', icon: <CardGiftcardOutlinedIcon />, link: '/easy-buy-dashboard/offers' },
    {
        text: 'Coupons',
        icon: <ConfirmationNumberOutlinedIcon />,
        link: '/easy-buy-dashboard/coupons',
    },
    { text: 'Campaign', icon: <CampaignOutlinedIcon />, link: '/easy-buy-dashboard/campaigns' },
    { text: 'Ads', icon: <ExtensionOutlinedIcon />, link: '/easy-buy-dashboard/ads' },
    { text: 'Settings', icon: <SettingsOutlinedIcon />, link: '/easy-buy-dashboard/settings' },
];
export default menuItems;
