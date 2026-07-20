import { IoCheckmark } from 'react-icons/io5';

const PricingCard = () => {
    return (
        <div>
            <div className='lg:grid-cols-3 md:grid-cols-2 grid mx-auto gap-5 lg:px-50 md:px-20 px-5 lg:mb-10 mb-2'>
                <div className="card bg-base-100 shadow-sm px-5 py-5">
                    <div className="flex justify-between">
                        <h2 className="text-3xl font-bold">Enterprise</h2>
                    </div>
                    <div>
                        <p className='my-1'> For teams and businesses.</p>
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
                        <button className="btn btn-primary btn-block rounded-full">Get Started Free</button>
                    </div>
                </div>
                <div className="card bg-primary shadow-xl rounded-xl text-white px-5 py-5">
                    <div className='text-center -mt-9'>
                        <span className="bg-[#fef3c6] text-md font-bold rounded-full text-red-700 p-2">Most Popular</span>
                    </div>

                    <div className="flex justify-between">
                        <h2 className="text-3xl font-bold">Enterprise</h2>
                    </div>
                    <div>
                        <p className='my-1'> For teams and businesses.</p>
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
                        <button className="btn btn-block rounded-full">Get Started Free</button>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-sm px-5 py-5">

                    <div className="flex justify-between">
                        <h2 className="text-3xl font-bold">Enterprise</h2>
                    </div>
                    <div>
                        <p className='my-1'> For teams and businesses.</p>
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
                        <button className="btn btn-primary btn-block rounded-full">Get Started Free</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PricingCard;