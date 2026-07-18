import React from 'react';
import Images from '../../assets/products/design-tool.png';
import { IoCheckmark } from 'react-icons/io5';

const ProductCard = () => {
    return (
        <div className='px-10 grid lg:grid-cols-4 md:grid-cols-2 gap-3 mx-auto'>
            <div className="bg-base-100 shadow-xl rounded-xl">
                <div className="card-body">
                    <div className='text-end '>
                        <span className="badge badge-xs badge-warning ">Most Popular</span>
                    </div>
                    <div className='border-[#f6f6f6] border-2 p-2  w-fit rounded-full'>
                        <img src={Images} alt="" />
                    </div>
                    <div className="flex justify-between">
                        <h2 className="text-3xl font-bold">Premium</h2>
                    </div>
                    <div>
                        <p className='my-1'>Automate repetitive tasks and streamline your workflow with powerful tools.</p>
                        <span className="text-xl font-bold">$29/mo</span>
                    </div>
                    <ul className=" flex flex-col gap-2 text-xs">
                        <li >
                            <IoCheckmark className='inline-block me-2 text-[#30b868]'></IoCheckmark>
                            <span>High-resolution image generation</span>
                        </li>
                        <li >
                            <IoCheckmark className='inline-block me-2 text-[#30b868]'></IoCheckmark>
                            <span>High-resolution image generation</span>
                        </li>
                        <li >
                            <IoCheckmark className='inline-block text-[#30b868] me-2'></IoCheckmark>
                            <span>High-resolution image generation</span>
                        </li>
                    </ul>
                    <div className="mt-6">
                        <button className="btn btn-primary btn-block">Subscribe</button>
                    </div>
                </div>
            </div>
            <div className="bg-base-100 shadow-xl rounded-xl">
                <div className="card-body">
                    <div className='text-end '>
                        <span className="badge badge-xs badge-warning ">Most Popular</span>
                    </div>
                    <div className='border-[#f6f6f6] border-2 p-2  w-fit rounded-full'>
                        <img src={Images} alt="" />
                    </div>
                    <div className="flex justify-between">
                        <h2 className="text-3xl font-bold">Premium</h2>
                    </div>
                    <div>
                        <p className='my-1'>Automate repetitive tasks and streamline your workflow with powerful tools.</p>
                        <span className="text-xl font-bold">$29/mo</span>
                    </div>
                    <ul className=" flex flex-col gap-2 text-xs">
                        <li >
                            <IoCheckmark className='inline-block me-2 text-[#30b868]'></IoCheckmark>
                            <span>High-resolution image generation</span>
                        </li>
                        <li >
                            <IoCheckmark className='inline-block me-2 text-[#30b868]'></IoCheckmark>
                            <span>High-resolution image generation</span>
                        </li>
                        <li >
                            <IoCheckmark className='inline-block text-[#30b868] me-2'></IoCheckmark>
                            <span>High-resolution image generation</span>
                        </li>
                    </ul>
                    <div className="mt-6">
                        <button className="btn btn-primary btn-block">Subscribe</button>
                    </div>
                </div>
            </div>
            <div className="bg-base-100 shadow-xl rounded-xl">
                <div className="card-body">
                    <div className='text-end '>
                        <span className="badge badge-xs badge-warning ">Most Popular</span>
                    </div>
                    <div className='border-[#f6f6f6] border-2 p-2  w-fit rounded-full'>
                        <img src={Images} alt="" />
                    </div>
                    <div className="flex justify-between">
                        <h2 className="text-3xl font-bold">Premium</h2>
                    </div>
                    <div>
                        <p className='my-1'>Automate repetitive tasks and streamline your workflow with powerful tools.</p>
                        <span className="text-xl font-bold">$29/mo</span>
                    </div>
                    <ul className=" flex flex-col gap-2 text-xs">
                        <li >
                            <IoCheckmark className='inline-block me-2 text-[#30b868]'></IoCheckmark>
                            <span>High-resolution image generation</span>
                        </li>
                        <li >
                            <IoCheckmark className='inline-block me-2 text-[#30b868]'></IoCheckmark>
                            <span>High-resolution image generation</span>
                        </li>
                        <li >
                            <IoCheckmark className='inline-block text-[#30b868] me-2'></IoCheckmark>
                            <span>High-resolution image generation</span>
                        </li>
                    </ul>
                    <div className="mt-6">
                        <button className="btn btn-primary btn-block">Subscribe</button>
                    </div>
                </div>
            </div>
            <div className="bg-base-100 shadow-xl rounded-xl">
                <div className="card-body">
                    <div className='text-end '>
                        <span className="badge badge-xs badge-warning ">Most Popular</span>
                    </div>
                    <div className='border-[#f6f6f6] border-2 p-2  w-fit rounded-full'>
                        <img src={Images} alt="" />
                    </div>
                    <div className="flex justify-between">
                        <h2 className="text-3xl font-bold">Premium</h2>
                    </div>
                    <div>
                        <p className='my-1'>Automate repetitive tasks and streamline your workflow with powerful tools.</p>
                        <span className="text-xl font-bold">$29/mo</span>
                    </div>
                    <ul className=" flex flex-col gap-2 text-xs">
                        <li >
                            <IoCheckmark className='inline-block me-2 text-[#30b868]'></IoCheckmark>
                            <span>High-resolution image generation</span>
                        </li>
                        <li >
                            <IoCheckmark className='inline-block me-2 text-[#30b868]'></IoCheckmark>
                            <span>High-resolution image generation</span>
                        </li>
                        <li >
                            <IoCheckmark className='inline-block text-[#30b868] me-2'></IoCheckmark>
                            <span>High-resolution image generation</span>
                        </li>
                    </ul>
                    <div className="mt-6">
                        <button className="btn btn-primary btn-block">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;