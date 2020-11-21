import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

const NavbarComponent = () => {
  return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Portum</NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="#">Link</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
  );
}

export default NavbarComponent;