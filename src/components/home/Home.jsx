import React from 'react';
import Slider from './Slider';
import Userbord from './Userbord';
import Started from './Started';
import Product from '../product/Product';
import Pricing from '../product/Pricing';
import Workflow from './Workflow';


const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Userbord></Userbord>
            <Product></Product>
            <Started></Started>
            <Pricing></Pricing>
            <Workflow></Workflow>
        </div>
    );
};

export default Home;