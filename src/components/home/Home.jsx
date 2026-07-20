
import Slider from './Slider';
import Userbord from './Userbord';
import Started from './Started';
import Product from '../product/Product';
import Pricing from '../product/Pricing';
import Workflow from './Workflow';
import Navbar from '../layout/Navbar'
import { Suspense, useState } from 'react';

const digitalTools = async () => {
    const res = await fetch("/data.json");
    return res.json();
}

const Home = () => {
    const dataDigital = digitalTools();
    const [selecteds, setselecteds] = useState([]);
    return (
        <div>
            <Navbar selecteds={selecteds}></Navbar>
            <Slider></Slider>
            <Userbord></Userbord>
            <Suspense fallback={<span className="loading loading-infinity loading-xl"></span>}>
                <Product dataDigital={dataDigital} selecteds={selecteds} setselecteds={setselecteds} ></Product>
            </Suspense>
            <Started></Started>
            <Pricing></Pricing>
            <Workflow></Workflow>

        </div>
    );
};

export default Home;