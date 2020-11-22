import React, { Fragment } from "react";

import NavbarComponent from "../../components/Navbar";
import Chart from "../../components/Chart";
import { Row, Col, Button } from "reactstrap";
import CardComponent from "../../components/Card";

import { Container } from "./styles";
import TableComponent from "../../components/TableComponent";
import icon from "../../assets/img/icon.png";
import Weather from "../../components/Weather";
import TabComponent from "../../components/TabComponent";

export default function Home() {
  return (
    <Fragment>
      <NavbarComponent />
      <Container>
        <Row>
          <Col md={2}>
            <Weather />
          </Col>
          <Col md={10}>
            <TabComponent />
            <hr />
          </Col>
        </Row>
      </Container>

      {/* <Container>
        
        <h2>Analise de 16/11 à 21/11</h2>
        <Row styles={{ marginBottom: "10px" }}>
          <Col md={2}>
            <CardComponent
              title={"Sla Executado"}
              contentCard={"17:32"}
            ></CardComponent>
          </Col>
          <Col md={2}>
            <CardComponent
              title={"Sla Executado"}
              contentCard={"17:32"}
            ></CardComponent>
          </Col>
          <Col md={2}>
            <CardComponent title={"Clima"} contentCard={"31 C"}></CardComponent>
          </Col>
          <Col md={2}>
            <CardComponent
              title={"Maré para 21/11/20"}
              contentCard={"Aviso de Ressacas Maritimas"}
            ></CardComponent>
          </Col>{" "}
          <Col md={4}>
            <CardComponent
              title={"Eficiencia do Berço"}
              contentCard={"76%"}
            ></CardComponent>
          </Col>
        </Row>

        <hr />
        <Row>
          <Col md={6}>
            <Row>
              <Col md={4}>
                <CardComponent>
                  <div>
                    <p>
                      <img src={icon} alt="" />
                      Navios Esperados
                    </p>
                    <h4 style={{ textAlign: "center" }}>101</h4>
                  </div>
                </CardComponent>
              </Col>
              <Col md={4}>
                <CardComponent>
                  <p>Navios Atracados Agora</p>
                  <h4>26</h4>
                </CardComponent>
              </Col>
            </Row>

            <br />

            <Row>
              <Col md={12}>
                <TableComponent />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container> */}
    </Fragment>
  );
}
