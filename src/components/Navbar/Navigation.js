import React from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import {
    NavLink as RRNavLink
} from 'react-router-dom'

function Navigation() {
    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">Redux Saga Demo</NavbarBrand>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink to="/users" tag={RRNavLink}>Users</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/" tag={RRNavLink}>Posts</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    );
}

export default Navigation;