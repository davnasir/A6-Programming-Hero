import React from 'react';
import { CiPlay1 } from 'react-icons/ci';
import Bannerimage from '../../assets/banner.png';
const Slider = () => {
    return (
        <div className='px-10 grid lg:grid-cols-6 grid-cols-1 items-center my-10'>

            <div className='col-start-4 col-end-2 lg:col-start-1 lg:col-end-3 lg:order-1 order-2'>
                <div className='flex items-center gap-2 bg-[#e1e7ff] py-1 px-3 rounded-full w-fit'>
                    <div className="inline-grid *:[grid-area:1/1]">
                        <div className="status status-error animate-ping"></div>
                        <div className="status status-error"></div>
                    </div>
                    <h4 className='text-[16px] font-semibold text-[#4f39f6]'>New: AI-Powered Tools Available</h4>
                </div>
                <h1 className='text-5xl font-bold text-[#101727] py-2'>Supercharge Your
                    Digital Workflow</h1>
                <p className='text-[#627382]'>Access premium AI tools, design assets, templates, and productivity<br></br> software—all in one place. Start creating faster today. <br></br> Explore Products
                </p>
                <div className='flex gap-1 mt-2'>
                    <button className='btn btn-primary rounded-full'>Explore Products</button>
                    <button className='flex items-center btn btn-outline btn-primary rounded-full'> <CiPlay1 /> Watch Demo</button>
                </div>
            </div>
            <div className='col-span-4 col-end-6 lg:col-span-2 lg:col-end-7 lg:mt-0 mb-4 order-1'>
                <img src={Bannerimage} alt="Banner Image " />
            </div>
        </div>
    );
};

export default Slider;