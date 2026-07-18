import React from 'react';

const Workflow = () => {
    return (
        <div>
            <div className=' bg-primary text-white py-50'>
                <div className='text-center'>
                    <h1 className='md:text-5xl text-3xl font-bold py-3'> Ready to Transform Your Workflow? </h1>
                    <p className='lg:w-2/7 sm:w-2/6 md:px-0 px-4 mx-auto'> Join thousands of professionals who are already using Digitools to work smarter.
                        Start your free trial today.</p>
                    <div className='mt-4 p-1 rounded-full mx-auto'>
                        <button className="btn rounded-full text-primary me-4"> Explore Products </button>
                        <button className='btn border-2 bg-transparent border-white  text-white rounded-full'>View Pricing</button>
                        <p className='mt-4'>14-day free trial • No credit card required • Cancel anytime</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Workflow;