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
                    borderColor: '#7BB29A',
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
                            borderColor: '#7BB29A',
                            border: '0.3px solid #7BB29A',
                        },
                        '&:hover fieldset': {
                            borderColor: '#7BB29A',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: '#7BB29A',
                            border: '0.3px solid #7BB29A',
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
                        borderColor: '#7BB29A',
                        border: '0.3px solid #7BB29A',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#7BB29A',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#7BB29A',
                        border: '0.3px solid #7BB29A',
                    },
                },
            },
        },
    },
});
export default theme;
