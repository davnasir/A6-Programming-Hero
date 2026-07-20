import { useState } from "react";
import { IoCheckmark } from "react-icons/io5";
import { toast } from "react-toastify";

const Productspringcard = ({ producttools, selecteds, setselecteds }) => {

    const [buytools, setbuytools] = useState(false);

    const buyToolsHendeler = () => {
        toast.success(`${producttools.title} successfully add to cart!`);
        setbuytools(true);
        setselecteds([...selecteds, producttools])
    }

    return (
        <div className="bg-base-100 shadow-xl rounded-xl">
            <div className="card-body">
                <div className='text-end '>
                    <span className="badge badge-xs badge-primary ">{producttools.badge}</span>
                </div>
                <div className='border-[#f6f6f6] border-2 p-2  w-fit rounded-full'>
                    <img className="imagesTools" src={producttools.Image} alt="" />
                </div>
                <div className="flex justify-between">
                    <h2 className="text-3xl font-bold">{producttools.title}</h2>
                </div>
                <div>
                    <p className='my-1'>{producttools.description}</p>
                    <span className="text-xl font-bold">{producttools.price}/{producttools.duration}</span>
                </div>
                <ul className=" flex flex-col gap-2 text-xs">

                    {
                        producttools.features.map((features, index) => {
                            return (<li key={index}>
                                <IoCheckmark className='inline-block me-2 text-[#30b868]'></IoCheckmark>
                                <span>{features}</span>
                            </li>)
                        })
                    }
                </ul>
                <div className="mt-6">
                    <button onClick={buyToolsHendeler} disabled={buytools} className="btn btn-primary btn-block" > {buytools === false ? "Buy Now " : "Add To Cart "}</button>
                </div>
            </div>
        </div>
    );
};

export default Productspringcard;