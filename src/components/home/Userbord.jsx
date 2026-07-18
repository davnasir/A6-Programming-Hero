import React from 'react';

const Userbord = () => {
    return (
        <div className='py-10 md:flex bg-blue-700 justify-evenly items-center text-white text-center'>
            <div>
                <h2 className='font-bold text-5xl'>50K+</h2>
                <h4> Active Users </h4>
            </div>
            <div className='usercount'>
                <h2 className='font-bold text-5xl'>200+</h2>
                <h4> Premium Tools </h4>
            </div>
            <div>
                <h2 className='font-bold text-5xl'>4.9 </h2>
                <h4> Rating </h4>
            </div>
        </div>
    );
};

export default Userbord;