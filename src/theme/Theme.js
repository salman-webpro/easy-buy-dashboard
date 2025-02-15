import { createTheme } from '@mui/material';
import { Palette } from './Palette';
import { typography } from './Typography';

let theme = createTheme({
    palette: Palette,
    typography: typography,
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1535,
        },
    },
    components: {
        // Mui text field
        MuiTextField: {
            styleOverrides: {
                root: {
                    backgroundColor: 'rgba(255,255,255,0.8)',
                    borderColor: '#f15a2d',
                    '& label': {
                        color: 'black',
                    },
                    '& label.Mui-focused': {
                        color: 'black',
                    },
                    '& .MuiInput-underline:after': {},
                    '& .MuiOutlinedInput-root': {
                        paddingTop: '0px',
                        paddingBottom: '0px',
                        fontSize: '14px',
                        '& fieldset': {
                            borderColor: '#f15a2d',
                            border: '0.3px solid #f15a2d',
                        },
                        '&:hover fieldset': {
                            borderColor: '#f15a2d',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: '#f15a2d',
                            border: '0.3px solid #f15a2d',
                        },
                    },
                    '& .MuiInputBase-root': { height: '44px' },
                    // '&  .MuiFormHelperText-root.Mui-error': {
                    //     backgroundColor: '#fef9e4',
                    //     margin: 0,
                    //     paddingTop: 3,
                    //     paddingLeft: 3,
                    // },
                    // '& .MuiFormHelperText-root': {
                    //     backgroundColor: '#fef9e4',
                    // },
                },
            },
        },
        MuiPagination: {
            styleOverrides: {
                root: {
                    '& .MuiPaginationItem-root': {
                        color: '#689D86',
                        fontSize: '11px',
                    },
                    '& .MuiPaginationItem-root.Mui-selected': {
                        color: '#fff',
                    },
                    '& .MuiPaginationItem-root:hover': {
                        backgroundColor: '#002315',
                        color: '#fff',
                    },
                },
            },
        },

        //     Mui Button
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    fontSize: '14px',
                    lineHeight: '15px',
                },
            },
        },

        //     Mui select border color
        MuiInputBase: {
            styleOverrides: {
                root: {
                    '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#f15a2d',
                        border: '0.3px solid #f15a2d',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#f15a2d',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#f15a2d',
                        border: '0.3px solid #f15a2d',
                    },
                },
            },
        },
    },
});
export default theme;
