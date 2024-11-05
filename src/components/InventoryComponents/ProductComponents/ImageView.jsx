import React, { useState } from 'react';
import { Stack, Paper, Typography, Input } from '@mui/material';

const ImageView = ({ images }) => {
    const [selectedImage, setSelectedImage] = useState(images[0]);
    const [newImage, setNewImage] = useState(null);

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        // setNewImage(URL.createObjectURL(file));
        console.log(file);
        handleUpload(); // Trigger the upload function when a file is selected
    };

    const handleUpload = () => {
        if (newImage) {
            // console.log(newImage);
            // Make a patch request to the server to update images
            // You can implement this part according to your server's API
            // After successful upload, add the new image to the images array
            // const updatedImages = [...images, newImage];
            // setSelectedImage(newImage); // Set the newly uploaded image as selected
            // setNewImage(null); // Reset the newImage state
        }
    };

    return (
        <Stack>
            <Stack direction='row' alignItems='flex-start' spacing={2}>
                <Stack>
                    {/* Large Thumbnail */}
                    <img
                        src={selectedImage}
                        alt='Selected Image'
                        style={{
                            maxWidth: '100%',
                            height: '455px',
                            width: '540px',
                            objectFit: 'cover',
                            overflow: 'hidden',
                            borderRadius: '8px',
                        }}
                    />
                </Stack>

                <Stack>
                    {/* Small Thumbnails */}
                    {images.map((image, index) => (
                        <Paper
                            key={index}
                            onClick={() => handleImageClick(image)}
                            style={{
                                cursor: 'pointer',
                                width: '125px',
                                height: '95px',
                                overflow: 'hidden',
                                borderRadius: '5px',
                                marginBottom: '24px',
                            }}
                        >
                            <img
                                src={image}
                                alt={`Thumbnail ${index}`}
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </Paper>
                    ))}

                    {/* Empty Thumbnail Boxes */}
                    {[...Array(4 - images.length)].map((_, index) => (
                        <Paper
                            key={images.length + index}
                            style={{
                                width: '125px',
                                height: '95px',
                                border: '1px dashed #ccc',
                                borderRadius: '5px',
                                marginBottom: '24px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <Input
                                type='file'
                                accept='image/*'
                                onChange={handleFileChange}
                                style={{ display: 'none' }}
                                id={`file-input-${index}`}
                            />
                            <label htmlFor={`file-input-${index}`}>
                                <Typography fontSize={'40px'} style={{ color: 'green' }}>
                                    +
                                </Typography>
                            </label>
                        </Paper>
                    ))}
                </Stack>
            </Stack>
        </Stack>
    );
};

export default ImageView;
