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
} from "reactstrap";
import {
  VesselContainer,
  LeftAreaContainer,
  RightAreaContainer,
  MiddleAreaContainer,
} from "./styles";
import vessel from "../../assets/img/vessel.jpg";

const vessels = [
  {
    id: Math.random().toFixed * 2,
    img: vessel,
    name: "MSC Rossvelt",
    tipo: "Graneleiro",
    comprimento: "300 mt",
    carga: "180 tn",
    sla: "2 dias",
  },
  {
    id: Math.random().toFixed * 2,
    img:
      "https://1.bp.blogspot.com/-fjdi0Z_yoSQ/UrikMP05WeI/AAAAAAAA8YE/mBr6FgYO8tA/s1600/Navio-Vale-Brasil.jpg",
    name: "Vale Brasil",
    tipo: "Graneleiro",
    comprimento: "400 mt",
    carga: "500tn",
    sla: "4 dias",
  },
  {
    id: Math.random().toFixed * 2,
    img:
      "https://1.bp.blogspot.com/-hD1lwqXhvTw/UpE4QihAJxI/AAAAAAAA7hk/N7v0gbnLLfc/s1600/Maersk-McKinney-Moller.jpg",
    name: "Triple E",
    tipo: "Cargueiro",
    comprimento: "400 mt",
    carga: "320tn",
    sla: "8 dias",
  },
];

const NavbarComponent = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Ajustar SLA</ModalHeader>
        <ModalBody>
          {vessels.map((vessel) => (
            <div key={vessel.id}>
              <VesselContainer>
                <LeftAreaContainer>
                  <img src={vessel.img} height="100%" width="100%" />
                </LeftAreaContainer>
                <MiddleAreaContainer>
                  <span style={{ fontWeight: "bold" }}>{vessel.name}</span>{" "}
                  <br />
                  <span>Tipo: {vessel.tipo}</span>
                  <br />
                  <span>Carga: {vessel.carga}</span>
                </MiddleAreaContainer>
                <RightAreaContainer>
                  <Form>
                    <FormGroup>
                      <Label for="exampleEmail" style={{ fontWeight: "bold" }}>
                        SLA Atracação
                      </Label>
                      <Input
                        plaintext
                        value={vessel.sla}
                        style={{ textAlign: "right", fontWeight: "bold" }}
                      />
                    </FormGroup>
                  </Form>
                </RightAreaContainer>
              </VesselContainer>
              <Button color="info" size="sm" style={{ float: "right" }}>
                Editar
              </Button>{" "}
              <br />
              <br />
            </div>
          ))}
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
