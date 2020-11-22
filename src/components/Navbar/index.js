import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

const NavbarComponent = () => {
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">
          Portum - Eficiencia em Berços Portuarios
        </NavbarBrand>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="#">Configurações</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Sair</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
