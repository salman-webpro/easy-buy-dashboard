// CouponsPurchase
import React from 'react';

import CouponInviceTop from './CouponInviceTop';
import CouInvTable from './CouInvTable';

const CouponsPurchase = ({ Invoice }) => {
    return (
        <div className='bg-white px-4 py-2 rounded-[10px] shadow-md mt-4'>
            <CouponInviceTop Invoice={Invoice} />
            <CouInvTable Inv={Invoice} />
        </div>
    );
};

export default CouponsPurchase;
