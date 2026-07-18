import React from 'react';
import PricingCard from './PricingCard';

const Pricing = () => {
    return (
        <div>
            <div className='my-20 mx-auto'>
                <div className='text-center'>
                    <h1 className='md:text-5xl text-3xl font-bold py-3'> Simple, Transparent Pricing </h1>
                    <p className='lg:w-2/7 sm:w-2/6 md:px-0 px-4 mx-auto'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
                </div>
            </div>
            <PricingCard></PricingCard>
        </div>
    );
};

export default Pricing;