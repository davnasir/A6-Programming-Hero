import { use } from 'react';
import ProductCard from './ProductCard';
import { useState } from 'react';
import Cartlist from './Cartlist';

const Product = ({ dataDigital ,setselecteds , selecteds }) => {

    const productsTools = use(dataDigital);

    const [cartselected, setcartselected] = useState('Producys');



    // console.log(productsTools);
    // console.log("click", cartselected);

    return (
        <div>
            <div className='my-10 mx-auto'>
                <div className='text-center'>
                    <h1 className='md:text-5xl text-3xl font-bold py-3'>Premium Digital Tools</h1>
                    <p className='lg:w-2/7 sm:w-2/6 md:px-0 px-4 mx-auto'>Choose from our curated collection of premium digital products designed
                        to boost your productivity and creativity.</p>
                    <div className='mt-5 border-[#f6f6f6] border-2 w-fit p-1 rounded-full mx-auto'>
                        <button onClick={() => setcartselected("Producys")} className={`btn ${cartselected === "Producys" ? "bg-[#300AD1] text-white" : ""} rounded-full`}> Producys </button>
                        <button onClick={() => setcartselected("Cart")} className={`btn ${cartselected === "Cart" ? "bg-[#300AD1] text-white" : ""} rounded-full`}> Cart({selecteds.length}) </button>

                    </div>
                </div>
            </div>
            {cartselected === 'Producys' ? (<ProductCard productsTools={productsTools} selecteds={selecteds} setselecteds={setselecteds} ></ProductCard>) : (<Cartlist productsTools={productsTools} selecteds={selecteds} setselecteds={setselecteds}></Cartlist>)}

        </div>
    );
};

export default Product;