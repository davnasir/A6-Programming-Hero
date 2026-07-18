import React from 'react';
import User from '../../assets/user.png'
import Usertwo from '../../assets/package.png'
import Userthee from '../../assets/rocket.png'

const Started = () => {
    return (
        <div className='bg-[#f9fafc] py-20 text-center mt-10'>
            <div className='mb-10'>
                <h2 className='md:text-5xl text-3xl font-bold py-3'>Get Started in 3 Steps</h2>
                <p className='lg:w-2/7 sm:w-2/6 md:px-0 px-4 mx-auto'>Start using premium digital tools in minutes, not hours.</p>
            </div>
            <div>
                <div className='lg:grid-cols-3 md:grid-cols-2 grid mx-auto gap-5 lg:px-50 md:px-20 px-5'>
                    <div className="card bg-base-100 shadow-sm">
                        <div className=' justify-end flex'>
                            <span className=' bg-primary py-1 px-2 text-white rounded-full w-fit me-5 mt-4'>01</span>
                        </div>
                        <figure className="mx-auto rounded-full bg-[#4f39f6]/15 w-fit p-5 mt-2">
                            <img
                                src={User}
                                alt="Create Account"
                                className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center -mt-3">
                            <h2 className="card-title font-bold"> Create Account</h2>
                            <p className='px-5'>Sign up for free in seconds. No credit card required to get started.</p>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-sm md:my-0 my-5">
                        <div className=' justify-end flex'>
                            <span className=' bg-primary py-1 px-2 text-white rounded-full w-fit me-5 mt-4'>02</span>
                        </div>
                        <figure className="mx-auto rounded-full bg-[#4f39f6]/15 w-fit p-5 mt-2">
                            <img
                                src={Usertwo}
                                alt="Create Account"
                                className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center -mt-3">
                            <h2 className="card-title font-bold"> Choose Products </h2>
                            <p className='px-5'> Browse our catalog and select the tools
                                that fit your needs. </p>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-sm">
                        <div className=' justify-end flex'>
                            <span className=' bg-primary py-1 px-2 text-white rounded-full w-fit me-5 mt-4'>03</span>
                        </div>
                        <figure className="mx-auto rounded-full bg-[#4f39f6]/15 w-fit p-5 mt-2">
                            <img
                                src={Userthee}
                                alt="Create Account"
                                className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center -mt-3">
                            <h2 className="card-title font-bold"> Start Creating </h2>
                            <p className='px-5'> Download and start using your premium
                                tools immediately. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Started;