import React from 'react';
import master from '../../assets/images/master.png';
import visa from '../../assets/images/visa.png';
export const PaymentCard = ({ cardType, cardNumber, expiryDate, cardName }) => {
    return (
        <div className='flex flex-col w-full items-end gap-[16px] px-[24px] py-[16px]  bg-[#ffffff] rounded-[16px] border border-solid border-st-3'>
            <div className='flex gap-[24px] self-stretch w-full flex-[0_0_auto] items-start '>
                <div className='flex flex-col gap-[6px] flex-1 grow items-start '>
                    <div className=' w-fit mt-[-1.00px] text-[16px] text-[#006c4a]   whitespace-nowrap '>
                        {cardName}
                    </div>
                    <p className=' w-fit   text-x-800 text-[#003E27] text-[14px]  whitespace-nowrap '>
                        {cardType} {cardNumber}
                    </p>
                    <div className=' w-fit text-[#707070] text-[12px] text-sc-3  whitespace-nowrap '>
                        Expires {expiryDate}
                    </div>
                </div>
                {/*<div className='inline-flex justify-end flex-[0_0_auto] items-start relative'>*/}
                {/*    <button className='inline-flex items-center justify-center gap-[10px] px-[16px] py-[8px] relative flex-[0_0_auto] all-[unset] box-border'>*/}
                {/*        <div className='relative w-fit mt-[-1.00px] text-x-500 text-[12px]  whitespace-nowrap text-[#0AAD0A]'>*/}
                {/*            Edit*/}
                {/*        </div>*/}
                {/*    </button>*/}
                {/*    <button className='inline-flex items-center justify-center gap-[10px] px-[16px] py-[8px] relative flex-[0_0_auto] all-[unset] box-border'>*/}
                {/*        <div className='relative w-fit mt-[-1.00px]   text-x-500 text-[12px]   whitespace-nowrap text-[#0AAD0A]'>*/}
                {/*            Remove*/}
                {/*        </div>*/}
                {/*    </button>*/}
                {/*</div>*/}
                <div className='flex items-end gap-2 sm:ml-auto'>
                    <button className='px-2 py-1 text-xs text-[#0AAD0A] '>Edit</button>
                    <button className='px-2 py-1 text-xs text-[#0AAD0A] '>Remove</button>
                </div>
            </div>
            <div className='flex items-end justify-end gap-[10px] relative self-stretch w-full flex-[0_0_auto]'>
                {cardType === 'Visa' && <img src={visa} alt='visa' />}
                {cardType === 'Master' && <img src={master} alt='master' />}
            </div>
        </div>
    );
};
