import React from 'react';
import ProductCard from './ProductCard';

const Product = () => {
    return (
        <div>
            <div className='my-10 mx-auto'>
                <div className='text-center'>
                    <h1 className='md:text-5xl text-3xl font-bold py-3'>Premium Digital Tools</h1>
                    <p className='lg:w-2/7 sm:w-2/6 md:px-0 px-4 mx-auto'>Choose from our curated collection of premium digital products designed
                        to boost your productivity and creativity.</p>
                    <div className='mt-5 border-[#f6f6f6] border-2 w-fit p-1 rounded-full mx-auto'>
                        <button className="btn btn-primary rounded-full">Producys </button>
                        <button className=" border-0 rounded-full hover:bg-none ms-5"> Cart(2) </button>
                    </div>
                </div>
            </div>
            <ProductCard></ProductCard>
        </div>
    );
};

export default Product;