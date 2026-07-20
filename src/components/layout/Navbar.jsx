import React from 'react';
import { CiShoppingCart } from 'react-icons/ci';

const Navbar = ({ selecteds }) => {
    return (
        <div>
            <div className="navbar bg-base-100 drop-shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a href="#">Products</a></li>
                            <li><a href="#">Features</a></li>
                            <li><a href="#">Pricing</a></li>
                            <li><a href="#">Testimonials</a></li>
                            <li><a href="#">FAQ</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost font-bold text-2xl text-blue-600"> DigiTools </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-bold">
                        <li><a href="#">Products</a></li>
                        <li><a href="#">Features</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Testimonials</a></li>
                        <li><a href="#">FAQ</a></li>
                    </ul>
                </div>
                <div className="navbar-end gap-2">
                    <span className='flex items-center gap-2 font-bold text-xl'>
                        <button className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <CiShoppingCart className='text-2xl' />
                                <span className="badge badge-xs badge-primary indicator-item">{selecteds.length}</span>
                            </div>
                        </button>
                        <h4>Login</h4>
                    </span>
                    <button className='btn btn-primary rounded-full'>Get Started </button>

                </div>
            </div>
        </div>
    );
};

export default Navbar;