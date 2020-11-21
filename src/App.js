import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from "./components/Navbar";
import NotFound from "./page/404";
import './assets/css/style.css'
import Shop from './page/Shop';
import Contact from './page/Contact';
import Cart from './page/Cart';
import SignIn from './page/SignIn';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Shop} />
        <Route path="/contact" component={Contact}/>
        <Route path="/signin" component={SignIn} />
        <Route path="/cart" component={Cart} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
