import React from 'react';
import Header from './shared/header';
import Footer from './shared/footer';
import PayModal from './PayModal';
import { Helmet } from 'react-helmet-async';

const Layout = ({title, description, children}) => {
    return ( 
        <>
            <Helmet>
                <title>{ title ? title + " - Crown Clothline" : "Crown Clothline" }</title>
                <meta name="description" content={description || "Crown Clothline"} />
                <link rel="icon" href="./icons/crwn-logo.svg" type="image/x-icon"></link>
            </Helmet>
            <Header/>
            <main className="container">
                {children}
            </main>
            {/* <PayModal /> */}
            <Footer/>
        </>
    );
}

export default Layout;