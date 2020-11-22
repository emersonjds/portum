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
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap";
import {
  VesselContainer,
  LeftAreaContainer,
  RightAreaContainer,
  MiddleAreaContainer,
} from "./styles";

import vessel from "../../assets/img/vessel.jpg";

const NavbarComponent = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Ajustar SLA</ModalHeader>
        <ModalBody>
          <div>
            <VesselContainer>
              <LeftAreaContainer>
                <img src={vessel} height="100%" width="100%" />
              </LeftAreaContainer>
              <MiddleAreaContainer>
                <span style={{ fontWeight: "bold" }}>MSC Rossvelt</span> <br />
                <span>Tipo: graneleiro</span>
                <br />
                <span>Carga: 180 tn</span>
              </MiddleAreaContainer>
              <RightAreaContainer>
                <Form>
                  <FormGroup>
                    <Label for="exampleEmail" style={{ fontWeight: "bold" }}>
                      SLA Atracação
                    </Label>
                    <Input
                      plaintext
                      value="2 dias"
                      style={{ textAlign: "right", fontWeight: "bold" }}
                    />
                  </FormGroup>
                </Form>
              </RightAreaContainer>
            </VesselContainer>
            <Button color="info" size="sm" style={{ float: "right" }}>
              Editar
            </Button>{" "}
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={toggle}>
            Fechar
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
