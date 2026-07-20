
import Productspringcard from './Productspringcard';

const ProductCard = ({ productsTools, selecteds, setselecteds }) => {
    // console.log(selecteds, setselecteds);
    return (
        <div className='px-10 grid lg:grid-cols-3 md:grid-cols-2 gap-3 mx-auto'>
            {
                productsTools.map((producttools, index) => {
                    return <Productspringcard key={index} producttools={producttools} selecteds={selecteds } setselecteds={setselecteds}></Productspringcard>
                })
            }
        </div>
    );
};

export default ProductCard;