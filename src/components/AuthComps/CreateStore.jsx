import React, { useState } from 'react';
import WelcomeStore from './WelcomeStore';
import CreateStoreForm from './CreateStoreForm';
import SuccessStore from './SuccessStore';

const CreateStore = () => {
    const [storeStart, setStoreStart] = useState(true);
    const [storeCreated, setStoreCreated] = useState(false);
    console.log(storeCreated, storeStart);
    return (
        <div
            style={{
                width: '100%',
            }}
        >
            {storeStart ? <WelcomeStore setStoreStart={setStoreStart} /> : null}
            {!storeStart && !storeCreated ? (
                <CreateStoreForm setStoreCreated={setStoreCreated} />
            ) : null}
            {storeCreated ? <SuccessStore /> : null}
        </div>
    );
};

export default CreateStore;
