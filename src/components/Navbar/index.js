import React, { useState, useEffect } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "reactstrap";

const NavbarComponent = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Ajustar SLA</ModalHeader>
        <ModalBody>
          <h1>Emerson</h1>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Do Something
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">
          Portum - Eficiencia em Berços Portuarios
        </NavbarBrand>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="#" onClick={toggle}>
              Configurações
            </NavLink>
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
