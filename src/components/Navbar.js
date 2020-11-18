import React from 'react';
// import logo from '../images/logo.svg';
import { FaBars, FaCrown } from 'react-icons/fa';
import { AiOutlineShopping } from 'react-icons/ai';
// import { useGlobalContext } from '../context/context';

const Navbar = ({fixed}) => {
//   const { openSidebar } = useGlobalContext()

    const [navbarOpen, setNavbarOpen] = React.useState(false);

    return (
        <>
            <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-gray-500 shadow mb-3">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between md:w-auto md:static md:block md:justify-start">
                        <a
                        className="text-sm font-bold leading-relaxed inline-block mr-4 whitespace-no-wrap uppercase text-gray-800 text-5xl"
                        href="#pablo"
                        >
                            <FaCrown />
                        </a>
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
                    <li className="nav-item">
                        <a
                        className="px-3 py-2 flex items-center text-s uppercase font-bold text-gray-700 hover:opacity-75"
                        href="#pablo"
                        >
                            Shop
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                        className="px-3 py-2 flex items-center text-s uppercase font-bold text-gray-700 hover:opacity-75"
                        href="#pablo"
                        >
                            Contact
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                        className="px-3 py-2 flex items-center text-s uppercase font-bold text-gray-700 hover:opacity-75"
                        href="#pablo"
                        >
                            sign in
                        </a>
                    </li>
                    <li className="nav-item relative">
                        <a
                        className="block px-3 py-1 flex items-center text-s uppercase font-bold text-gray-700 hover:opacity-75 text-4xl"
                        href="#pablo"
                        >
                            <AiOutlineShopping />
                        </a>
                        <p className='total-amount absolute font-bold text-gray-900'>34</p>
                    </li>
                    
                    </ul>
                </div>
                </div>
            
            </nav>

        </>
    );
};

export default Navbar;

    // <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-pink-500 mb-3">
    //             <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
    //             <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
    //                 <a
    //                 className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white"
    //                 href="#pablo"
    //                 >
    //                 crown
    //                 </a>
    //                 <button
    //                 className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
    //                 type="button"
    //                 onClick={() => setNavbarOpen(!navbarOpen)}
    //                 >
    //                 <i className="fas fa-bars"></i>
    //                 </button>
    //             </div>
    //             <div
    //                 className={
    //                 "lg:flex flex-grow items-center" +
    //                 (navbarOpen ? " flex" : " hidden")
    //                 }
    //                 id="example-navbar-danger"
    //             >
    //                 <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
    //                 <li className="nav-item">
    //                     <a
    //                     className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
    //                     href="#pablo"
    //                     >
    //                     <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Share</span>
    //                     </a>
    //                 </li>
    //                 <li className="nav-item">
    //                     <a
    //                     className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
    //                     href="#pablo"
    //                     >
    //                     <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Tweet</span>
    //                     </a>
    //                 </li>
    //                 <li className="nav-item">
    //                     <a
    //                     className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
    //                     href="#pablo"
    //                     >
    //                     <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Pin</span>
    //                     </a>
    //                 </li>
    //                 </ul>
    //             </div>
    //             </div>
    //         </nav>





// <nav className='nav'>
//       <div className="nav-center">
//         <div className="nav-header">
//           <img src={logo} alt="crown" className='nav-logo' />
//           <button className="btn toggle-btn" onClick={openSidebar}>
//             <FaBars />
//           </button>
//         </div>
//         <ul className="nav-links">
//           <li>
//             Home
//           </li>
//           <li>
//             About
//           </li>
//           <li>
//             Contact
//           </li>
//         </ul>
//         <button className="btn signin-btn">
//         Sign in
//         </button>
//       </div>
//     </nav>


  