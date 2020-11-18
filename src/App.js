import React from 'react'
// import { BrowserRouter as Route, Router, Switch } from "react-router";
import Navbar from "./components/Navbar";
import NotFound from "./page/404";
import './assets/css/style.css'
import Home from './page/Home';


function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <NotFound />
    </div>
  
  );
}

export default App;
