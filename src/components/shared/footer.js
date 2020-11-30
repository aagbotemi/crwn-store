import React from 'react';
// import styles from './footer.module.scss';

const Footer = () => {
    const footer = {
        textAlign: 'center',
        width: '100%',
        padding: '10px',
    }


    return (
        <footer
            style={footer}
            className='mt-5 p-3'
        >
            2020 &copy; React Store 
        </footer>
    );
}

export default Footer;