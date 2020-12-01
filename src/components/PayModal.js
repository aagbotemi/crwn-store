// import React, { useContext } from 'react';
// import { ReactComponent as Logo} from './icons/crwn-logo.svg'
// import { FaTimes } from 'react-icons/fa';
// import { CartContext } from '../contexts/CartContext';
// import { formatNumber } from '../helpers/utils';


// const Modal = () => {
//     const { total, isModalOpen, closeModal } = useContext(CartContext);
    
//     return (
//         <div className={`${isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay' }`}>
//         <div className="modal-container">
//             <form className="text-center">
//                 <Logo className="modal-logo" />
//                 <h5 className="mb-0">CRWN Clothline Ltd.</h5>
//                 <p className="mb-0">Your total is {formatNumber(total)}</p>
//                 <hr/>

//                 <div>
//                     {/* <label className="mt-0 text-right">Email</label> */}
//                     <input 
//                         type="email"
//                         placeholder="you@example.com"
//                     />
//                 </div>
//                 <div className="mt-1">
//                     {/* <label className="mt-0 text-right">Email</label> */}
//                     <div>
//                         <input 
//                             type="number"
//                             placeholder="Card Number"
//                         />
//                     </div>
//                     <div>
//                         <input 
//                             type="number" 
//                             placeholder="Expiry Date MM/YYYY"
//                             className="w-10"
//                         />

//                         <input 
//                             type="password" 
//                             placeholder="CVV"
//                             className="w-10"
//                         />
//                     </div>
//                 </div>

//                 <button className="mt-3 outline-0 shadow border-0 rounded btn-primary p-1">
//                     Pay Now USD {total}
//                 </button>

//             </form>
//             <button className="close-modal-btn" onClick={closeModal}>
//             <FaTimes />
//             </button>
//         </div>
//         </div>
//     );
// };

// export default Modal;
