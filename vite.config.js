import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        generateBundleSourceMaps: false,
    },
    plugins: [react()],
    css: {
        postcss: {
            plugins: [
                require('tailwindcss'),
                require('autoprefixer'),
                require('@tailwindcss/typography'), // Add this line
            ],
        },
    },
});
