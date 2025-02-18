import React, { lazy } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import DashboardLayout from '../layouts/DashboardLayout';
import Dashboard from '../pages/Dashboard';
import InventoryPage from '../pages/InventoryPage';
import Aisles from '../pages/Aisles';
import SingleLayout from '../layouts/SingleLayout';
import ManagerProfile from '../pages/ProfilePages/ManagerProfile';
import StoreProfilePage from '../pages/ProfilePages/StoreProfilePage';
import LoginPage from '../components/AuthComps/LoginPage';
import Category from '../pages/Category';
import Listing from '../pages/Listing';
import SubCategoryPages from '../components/Categories/SubCategory/SubCategoryPages';
import Crm from '../pages/CRM';
import Invoices from '../pages/Invoices';
import Staffs from '../pages/Staffs';
import Coupons from '../pages/Coupons';
import Campaign from '../pages/Campaign';
// import { Offers } from '../pages';
import Offers from '../pages/Offers';
import Settings from '../pages/Settings';
import AdsPage from '../pages/AdsPage';
import SignupPage from '../components/AuthComps/SignupPage';
import AuthMain from '../components/AuthComps/AuthMain';
import CreateStore from '../components/AuthComps/CreateStore';
import CreateStoreForm from '../components/AuthComps/CreateStoreForm';

export const router = createBrowserRouter([
    {
        path: '/easy-buy-dashboard',
        element: <AuthMain />,
        children: [
            {
                path: '',
                element: <LoginPage />,
            },
            {
                path: 'signup',
                element: <SignupPage />,
            },
            {
                path: 'create-store',
                element: <CreateStore />,
            },
        ],
    },
    {
        path: '/easy-buy-dashboard',
        element: <DashboardLayout />,
        children: [
            {
                path: 'dashboard',
                element: <Dashboard />,
            },
            {
                path: 'inventory',
                element: <InventoryPage />,
            },
            {
                path: 'aisiles',
                element: <Aisles />,
            },
            {
                path: 'category',
                element: <Category />,
            },
            {
                path: 'listing',
                element: <Listing />,
            },
            {
                path: 'crm',
                element: <Crm />,
            },
            {
                path: 'invoices',
                element: <Invoices />,
            },
            {
                path: 'staff',
                element: <Staffs />,
            },
            {
                path: 'offers',
                element: <Offers />,
            },
            {
                path: 'coupons',
                element: <Coupons />,
            },
            {
                path: 'campaigns',
                element: <Campaign />,
            },
            {
                path: 'settings',
                element: <Settings />,
            },
            {
                path: 'ads',
                element: <AdsPage />,
            },
        ],
    },
    {
        path: '/easy-buy-dashboard',
        element: <SingleLayout />,
        children: [
            {
                path: 'manager-profile',
                element: <ManagerProfile />,
            },
            {
                path: 'store-profile',
                element: <StoreProfilePage />,
            },
            {
                path: 'category-product/:id',
                element: <SubCategoryPages />,
            },
        ],
    },
    {
        path: '*',
        element: <Navigate to={'/'} />,
    },
]);
