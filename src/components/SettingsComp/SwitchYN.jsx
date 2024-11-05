import PropTypes from 'prop-types';
import React from 'react';
import { useReducer } from 'react';

export const SwitchYN = ({ status }) => {
    const [state, dispatch] = useReducer(reducer, {
        status: status || 'on',
    });

    return (
        <div
            className='w-[52px] h-[32px]'
            onClick={() => {
                dispatch('click');
            }}
        >
            <div
                className={`w-[57px] top-[-6px] h-[48px] relative ${
                    state.status === 'off' ? 'left-[-8px]' : 'left-[2px]'
                }`}
            >
                <div
                    className={`w-[47px] top-[8px] h-[28px] rounded-[100px] absolute ${
                        state.status === 'off' ? 'left-[10px]' : 'left-0'
                    } ${state.status === 'off' ? 'shadow-[inset_2px_2px_2px_#0000001a]' : ''} ${
                        state.status === 'off' ? 'bg-[#bebebe]' : 'bg-[#003E27]'
                    }`}
                />
                <div
                    className={`w-[48px] top-0 h-[48px] absolute cursor-pointer ${
                        state.status === 'off' ? 'left-0' : 'left-[9px]'
                    }`}
                    data-plan-function-mode={state.status === 'on' ? 'on' : undefined}
                >
                    <div
                        className={`w-[22px] left-[13px] top-[11px] h-[22px] rounded-[23px] bg-[#ffffff] relative ${
                            state.status === 'off' ? 'shadow-[1px_1px_2px_#0000001a]' : ''
                        }`}
                    >
                        <div
                            className={`[font-family:'Roboto-Bold',Helvetica] tracking-[0] text-[8px] top-[6px] font-bold leading-[normal] whitespace-nowrap absolute ${
                                state.status === 'off' ? 'left-[5px]' : 'left-[4px]'
                            } ${state.status === 'off' ? 'text-[#bebebe]' : 'text-[#003E27]'}`}
                        >
                            {state.status === 'on' && <>YES</>}

                            {state.status === 'off' && <>NO</>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

function reducer(state, action) {
    if (state.status === 'on') {
        switch (action) {
            case 'click':
                return {
                    status: 'off',
                };
        }
    }

    if (state.status === 'off') {
        switch (action) {
            case 'click':
                return {
                    status: 'on',
                };
        }
    }

    return state;
}

SwitchYN.propTypes = {
    status: PropTypes.oneOf(['off', 'on']),
};
