import React, { useState } from 'react';
import { Grid, Stack, Typography } from '@mui/material';
import squareup from '../../assets/images/squareup.png';
import clover from '../../assets/images/clover.png';
import IntegrateModal from './IntegrateModal';

const ThirdPartyBox = ({ imgURL, description, onClick }) => {
    return (
        <Stack
            sx={{
                border: '1px solid #eeeeee',
                borderRadius: '8px',
                padding: '20px',
                cursor: 'pointer',
            }}
            onClick={onClick}
        >
            <img
                src={imgURL}
                style={{
                    width: '70px',
                }}
            />
            <Typography variant={'titleLarge'} color={'primary.800'}>
                {description}
            </Typography>
        </Stack>
    );
};
const ThirdPartyPage = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [posTitle, setPosTitle] = useState();
    const handleModalOpen = (pos) => {
        setPosTitle(pos);
        setModalOpen(true);
    };
    const handleModalClose = () => {
        setModalOpen(false);
    };
    return (
        <Grid container>
            <Grid item md={12}>
                <Typography variant={'displayMedium'} color={'primary.800'}>
                    Third Party
                </Typography>
                <Stack mb={1} mt={1}>
                    <Grid container spacing={2}>
                        <Grid item md={6}>
                            <ThirdPartyBox
                                description={'Integrate with Squareup'}
                                imgURL={squareup}
                                onClick={() => handleModalOpen('Squareup')}
                            />
                        </Grid>
                        <Grid item md={6}>
                            <ThirdPartyBox
                                description={'Integrate with Clover'}
                                imgURL={clover}
                                onClick={() => handleModalOpen('clover')}
                            />
                        </Grid>
                    </Grid>
                </Stack>
            </Grid>
            <IntegrateModal title={posTitle} open={modalOpen} onClose={handleModalClose} />
        </Grid>
    );
};

export default ThirdPartyPage;
