import React, { useState } from 'react';
import Countdown from 'react-countdown';
import { Stack } from '@mui/material';

const CountdownTimer = ({ selectedCampaign }) => {
    const [isCountdownRunning, setIsCountdownRunning] = useState(true);
    console.log(selectedCampaign);
    const [Days, setDays] = useState();
    const [Hours, setHours] = useState();
    const [Minutes, setMinutes] = useState();
    const [Seconds, setSeconds] = useState();

    const handleComplete = () => {
        setIsCountdownRunning(false);
    };
    const currentDate = new Date();

    const endDate = selectedCampaign?.endDate;
    // Check if the end date is in the past
    if (new Date(endDate) < currentDate) {
        return <div>Campaign is expired!</div>;
    }
    return (
        <Stack
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#006C4A',
                borderRadius: '15px',
                width: '-webkit-fill-available',
                height: '-webkit-fill-available',
            }}
        >
            <Countdown
                date={endDate}
                onComplete={handleComplete}
                renderer={(props) => (
                    <>
                        <div
                            style={{
                                color: 'white',
                                fontWeight: 'bold',
                            }}
                        >
                            <div
                                style={{
                                    fontSize: '36px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    justifyContent: 'center',
                                    fontWeight: 'bold',
                                }}
                            >
                                {props.days} : {props.hours} : {props.minutes} : {props.seconds}
                            </div>
                            <div
                                style={{
                                    fontSize: '12px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '30px',
                                    justifyContent: 'center',
                                }}
                            >
                                <div>Days</div>
                                {/*<div>:</div>*/}
                                <div>Hours</div>
                                {/*<div>:</div>*/}
                                <div>Minutes</div>
                                {/*<div>:</div>*/}
                                <div>Seconds</div>
                                {/*Days : Hours : Minutes : Seconds*/}
                            </div>
                        </div>
                    </>
                )}
            ></Countdown>
        </Stack>
    );
};

export default CountdownTimer;
