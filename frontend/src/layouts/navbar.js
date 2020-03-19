import React, { useState } from 'react';
import {Navbar, Nav, NavbarBrand, NavbarToggler, Collapse, NavItem, NavLink } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const NavMenu = (props) => {
    const [collapsed, setCollapsed] = useState(true);
    
    const toggleNavbar = () => setCollapsed(!collapsed);

    return(
        <div>
        </div>
    );
}

export default NavMenu;