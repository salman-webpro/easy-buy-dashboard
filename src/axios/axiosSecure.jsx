import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';

const axiosSecure = axios.create({
    baseURL: `${process.env.REACT_APP_BASE_URL}`,

    headers: {
        'Content-Type': 'multipart/form-data',
    },
});

const useAxiosSecure = () => {
    const navigate = useNavigate();
    useEffect(() => {
        axiosSecure.interceptors.request.use((config) => {
            const encodedKey = localStorage.getItem('access-token');
            const token = atob(encodedKey);
            console.log('Request Interceptor - Token:', token);
            if (token) {
                config.headers.Authorization = `Token ${token}`;
            }
            return config;
        });

        axiosSecure.interceptors.response.use(
            (response) => response,
            async (error) => {
                if (
                    error.response &&
                    (error.response.status === 401 || error.response.status === 403)
                ) {
                    console.log('Response Interceptor - Unauthorized');
                    // await logOut();
                    navigate('/');
                }
                return Promise.reject(error);
            },
        );
    }, []);
    return [axiosSecure];
};

export default useAxiosSecure;
// rifat
