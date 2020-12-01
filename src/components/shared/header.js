import React, { useContext, useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand,
    Nav, NavItem, NavLink} from 'reactstrap';
import { ReactComponent as Logo} from '../icons/crwn-logo.svg'
import { CartContext } from '../../contexts/CartContext';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const { itemCount } = useContext(CartContext);
    
    return (
        <Navbar color="light" light expand="md">
        <NavbarBrand className="ml-3" href="/"><Logo /></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto mr-3" navbar>
                <NavItem>
                    <NavLink href="/">Store</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/about">About</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/cart"><svg width={'22px'} color={'#57a7e9'} fill="currentColor" viewBox="0 0 20 20"><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path></svg> [{itemCount}]</NavLink>
                </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
}

export default Header;