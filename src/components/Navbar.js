

import React, { useState } from 'react';
import { Link } from 'react-router-dom'

import { ReactComponent as Logo} from '../images/crwn-logo.svg';
// import { ReactComponent as Cart} from '../images/cart-logo.svg';
import { FaBars } from 'react-icons/fa';
import { AiOutlineShopping } from 'react-icons/ai';
import { useGlobalContext } from '../context/context';

const Navbar = ({fixed}) => {
    const { amount } = useGlobalContext()

    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <>
            <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-gray-400 shadow mb-3">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between md:w-auto md:static md:block md:justify-start">
                        <Link to='/'
                        className="text-sm font-bold leading-relaxed inline-block mr-4 whitespace-no-wrap uppercase text-gray-800 text-5xl"
                        >
                            <Logo />
                        </Link>
                        <button
                        className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block md:hidden outline-none focus:outline-none text-gray-800"
                        type="button"
                        onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                        <FaBars />
                        </button>
                    </div>
                    <div
                    className={
                    "md:flex flex-grow items-center" +
                    (navbarOpen ? " flex" : " hidden")
                    }
                    id="example-navbar-danger"
                >
                    <ul className="flex flex-col md:flex-row list-none md:ml-auto">
                    <li className="nav-item px-3 py-2 flex items-center text-s uppercase font-bold text-gray-700 hover:opacity-75">
                        <Link to='/'
                        // className=""
                        >
                            Shop
                        </Link>
                    </li>
                    <li className="nav-item px-3 py-2 flex items-center text-s uppercase font-bold text-gray-700 hover:opacity-75">
                        <Link to='/contact'
                        // className=""
                        >
                            Contact
                        </Link>
                    </li>
                    <li className="nav-item px-3 py-2 flex items-center text-s uppercase font-bold text-gray-700 hover:opacity-75">
                        <Link to='/signin'
                        // className=" "
                        >
                            sign in
                        </Link>
                    </li>
                    <li className="nav-item relative block px-3 py-1 flex items-center text-s uppercase font-bold text-gray-700 cursor-pointer hover:opacity-75 text-4xl">
                        <Link to='/cart'>
                            <AiOutlineShopping />
                        </Link>
                        <p className='total-amount absolute font-bold text-gray-900'>{amount}</p>
                    </li>
                    
                    </ul>
                </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;