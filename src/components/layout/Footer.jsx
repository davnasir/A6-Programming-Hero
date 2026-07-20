import React from 'react';
import { FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div>
            <footer className=" bg-black text-white p-10 grid grid-cols-5">
                <nav>
                    <a className="font-bold text-2xl text-white "> DigiTools </a>
                    <p className='mt-2'>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools. </p>
                </nav>
                <nav>
                    <h6 className="font-bold text-xl mb-2">Product</h6>
                    <ul>
                        <li><a className="link link-hover">Features</a></li>
                        <li> <a className="link link-hover">Pricing</a></li>
                        <li><a className="link link-hover">Templates</a></li>
                        <li><a className="link link-hover"> Integrations </a></li>
                    </ul>
                </nav>
                <nav>
                    <h6 className="font-bold text-xl mb-2">Company</h6>
                    <ul>
                        <li><a className="link link-hover">About us</a></li>
                        <li> <a className="link link-hover">Blog</a></li>
                        <li><a className="link link-hover">Careers</a></li>
                        <li><a className="link link-hover"> Press</a></li>
                    </ul>
                </nav>
                <nav>
                    <h6 className="font-bold text-xl mb-2">Resources</h6>
                    <ul>
                        <li><a className="link link-hover"> Documentation </a></li>
                        <li> <a className="link link-hover">Help Center</a></li>
                        <li><a className="link link-hover">Community</a></li>
                        <li><a className="link link-hover"> Contact </a></li>
                    </ul>
                </nav>
                <nav>
                    <h6 className="font-bold text-xl">Social Links</h6>
                    <ul className='flex gap-4 text-xl mt-2'>
                        <li className='p-2 bg-amber-50 text-black  rounded-full'><a href="#"> <FaFacebookSquare /> </a></li>
                        <li className='p-2 bg-amber-50 text-black  rounded-full'><a href="#"> <FaInstagramSquare /> </a></li>
                        <li className='p-2 bg-amber-50 text-black  rounded-full'><a href="#"> <FaXTwitter /> </a></li>
                    </ul>
                </nav>

            </footer>
            <div className='border-t-2 border-white bg-black px-10 pb-10 pt-5'>
                
                <div className='text-[#fafafa] flex justify-between'>
                    <div>
                        <p>© 2026 Digitools. All rights reserved.</p>
                    </div>
                    <div>
                        <ul className='flex gap-8'>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms of Service</a></li>
                            <li><a href="#">Cookies</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;