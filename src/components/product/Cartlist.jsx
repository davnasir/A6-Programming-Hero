import { useState } from "react";
import { toast } from "react-toastify";


const Cartlist = ({ productsTools, selecteds, setselecteds }) => {
    // console.log(productsTools);

    const totalPrice = selecteds.reduce((total, item) => {
        return total + Number(item.price.replace("$", ""));
    }, 0);

    const cartHendelerdelete = (toolscard) => {
        const filtersTools = selecteds.filter(
            (item) => item.title !== toolscard.title
        );

        const confirmDelete = window.confirm(`Are you sure you want to delete this item? ${toolscard.title}`);
        if (confirmDelete) {
            toast.success(`${toolscard.title} successfully deleted!`);
        } else {
            toast.error(`Failed to delete the  ${toolscard.title}. Try again.`);
            return;
        }

        setselecteds(filtersTools);

    };


    const handleCheckout = () => {
        const confirmCheckout = window.confirm(
            "Are you sure you want to checkout?"
        );

        if (!confirmCheckout) return;

        setselecteds([]);
        toast.success("Checkout completed successfully!");
    };

    return (
        <div className='px-10 w-7/12  mx-auto'>
            <div className="card bg-base-100 shadow-sm">
                <div className="card-body">

                    {selecteds.length === 0 ?
                        (<div className='mx-auto  text-center py-20'>
                            <h2 className='font-bold text-2xl'>No Player Selected </h2>
                            <p className='font-semibold text-xl'>  Add To Ouer Packege   </p>
                        </div>)
                        : (
                            <>
                                <h2 className="text-2xl font-bold">Your Cart</h2>

                                {selecteds.map((toolscard, index) => (
                                    <div
                                        key={index}
                                        className="flex justify-between bg-[#e8e8eb] p-4 rounded-xl items-center mt-2"
                                    >
                                        <div className="flex gap-4">
                                            <div className="rounded-full bg-white p-2">
                                                <img
                                                    src="/src/assets/products/design-tool.png"
                                                    alt=""
                                                />
                                            </div>

                                            <div>
                                                <h3 className="font-semibold">
                                                    {toolscard.title}
                                                </h3>

                                                <h4 className="text-[#627382] font-semibold">
                                                    {toolscard.price}
                                                </h4>
                                            </div>
                                        </div>

                                        <button
                                            className="cursor-pointer"
                                            onClick={() =>
                                                cartHendelerdelete(toolscard)
                                            }
                                        >
                                            Remove
                                        </button>
                                    </div>
                                ))}

                                <div className="flex justify-between mt-2 px-3">
                                    <div className="font-bold text-lg"> Total </div>
                                    <div className="font-bold text-xl">{totalPrice}</div>
                                </div>
                                <div className="mt-2">
                                    <button className="btn btn-primary btn-block rounded-full" onClick={handleCheckout}> Proceed to Checkout</button>
                                </div>

                            </>

                        )
                    }

                </div>
            </div>
        </div >
    );
};

export default Cartlist;