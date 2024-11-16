// import React from 'react';
// import { Controller, useForm } from 'react-hook-form';
// import { Stack, TextField, Typography } from '@mui/material';
// import FileUpload from './FileUpload';

// const sharedTextFieldStyles = {
//     borderRadius: '6px',
//     backgroundColor: '#fff',
//     '& fieldset': {
//         border: 'none',
//         borderRadius: '6px',
//     },
//     '&:hover fieldset': {},
//     '&.Mui-focused fieldset': {
//         border: 'none',
//     },
//     '& .MuiOutlinedInput-root': {
//         paddingTop: '0px',
//         paddingBottom: '0px',
//         fontSize: '14px',
//         '& fieldset': {
//             borderColor: 'none',
//             border: 'none',
//         },
//         '&:hover fieldset': {
//             borderColor: 'none',
//         },
//         '&.Mui-focused fieldset': {
//             borderColor: 'none',
//             border: 'none',
//         },
//     },
// };

// const LabelText = ({ label }) => {
//     return (
//         <Typography variant={'labelLarge'} color={'background.main'} mb={0.5} ml={0.5}>
//             {label}
//         </Typography>
//     );
// };

// const CreateStoreForm = ({ setStoreCreated }) => {
//     const {
//         register,
//         handleSubmit,
//         control,
//         formState: { errors },
//     } = useForm();
//     const onSubmit = (data) => {
//         console.log('🚀~ CreateStoreForm:22 ~ ', data);
//         setStoreCreated(true);
//     };
//     return (
//         <div>
//             <form onSubmit={handleSubmit(onSubmit)}>
//                 <Stack direction={'column'} gap={2}>
//                     <Stack>
//                         <LabelText label={'Store name'} />
//                         <TextField
//                             width={'100%'}
//                             variant='outlined'
//                             type='text'
//                             placeholder='Store X'
//                             name='storeName'
//                             sx={sharedTextFieldStyles}
//                         />
//                     </Stack>
//                     <Stack>
//                         <LabelText label={'Store Phone Number'} />
//                         <TextField
//                             width={'100%'}
//                             variant='outlined'
//                             type='text'
//                             placeholder='+8801933553232'
//                             name='storePhoneNumber'
//                             sx={sharedTextFieldStyles}
//                         />
//                     </Stack>
//                     <Stack>
//                         <LabelText label={'Store Email'} />
//                         <TextField
//                             width={'100%'}
//                             variant='outlined'
//                             type='text'
//                             placeholder='store@X.com'
//                             name='storeEmail'
//                             sx={sharedTextFieldStyles}
//                         />
//                     </Stack>
//                     <Stack>
//                         <LabelText label={'Address'} />
//                         <TextField
//                             width={'100%'}
//                             variant='outlined'
//                             type='text'
//                             placeholder='8520 Promenade Blvd San Francisco, CA 94129'
//                             name='address'
//                             sx={sharedTextFieldStyles}
//                         />
//                     </Stack>
//                     <Stack>
//                         <LabelText label={'Slogan'} />
//                         <TextField
//                             width={'100%'}
//                             variant='outlined'
//                             type='text'
//                             placeholder='We sell stuff that makes you happy'
//                             name='slogan'
//                             sx={sharedTextFieldStyles}
//                         />
//                     </Stack>
//                     <Stack>
//                         <LabelText label={'TIN Number'} />
//                         <TextField
//                             width={'100%'}
//                             variant='outlined'
//                             type='text'
//                             placeholder='e.g: 123456789'
//                             name='tinNumber'
//                             sx={sharedTextFieldStyles}
//                         />
//                     </Stack>
//                     <Stack>
//                         <LabelText label={'Upload Profile Picture'} />
//                         <Controller
//                             name='profilePicture'
//                             control={control}
//                             defaultValue={null}
//                             render={({ field: { onChange, onBlur, value } }) => (
//                                 <FileUpload
//                                     name='profilePicture'
//                                     label='Upload Profile Picture'
//                                     selectedFile={value}
//                                     setSelectedFile={onChange}
//                                 />
//                             )}
//                         />
//                     </Stack>
//                     <Stack>
//                         <LabelText label={'Upload Profile Picture'} />
//                         <Controller
//                             name='coverPicture'
//                             control={control}
//                             defaultValue={null}
//                             render={({ field: { onChange, onBlur, value } }) => (
//                                 <FileUpload
//                                     name='coverPicture'
//                                     label='Upload Cover Picture'
//                                     selectedFile={value}
//                                     setSelectedFile={onChange}
//                                 />
//                             )}
//                         />
//                     </Stack>
//                     <input
//                         type='submit'
//                         value='Create'
//                         className='w-full md:w-[400px] h-10 px-2.5 rounded-lg border border-white justify-center items-center gap-2 inline-flex text-white hover:bg-[#006C4A] transition ease-in duration-500 cursor-pointer '
//                     />
//                 </Stack>
//             </form>
//             <Stack gap={1} mb={3} mt={2} direction={'row'} justifyContent={'center'}></Stack>
//         </div>
//     );
// };

// export default CreateStoreForm;
