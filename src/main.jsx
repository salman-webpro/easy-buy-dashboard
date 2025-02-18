import * as React from 'react';
import { createRoot } from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import App from './App';
import './index.css';
import './main.css';
import { RouterProvider, BrowserRouter } from 'react-router-dom';
import { router } from './router/Routes';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import 'swiper/css';
import 'swiper/css/pagination';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
import theme from './theme/Theme';

root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <RouterProvider basename='/easy-buy-dashboard' router={router} />
            </LocalizationProvider>
        </ThemeProvider>
    </React.StrictMode>,
);
