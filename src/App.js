import React from 'react';
import Routes from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';

import { HelmetProvider } from 'react-helmet-async';
import ProductsContextProvider from './contexts/ProductsContext';
import CartContextProvider from './contexts/CartContext';

function App() {
  return (
    <HelmetProvider>
      <ProductsContextProvider>
        <CartContextProvider>
          <Routes />
        </CartContextProvider>
      </ProductsContextProvider>
    </HelmetProvider>
  );
}

export default App;
