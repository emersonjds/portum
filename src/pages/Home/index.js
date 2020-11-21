import React, {Fragment} from "react";

import NavbarComponent from "../../components/Navbar";
import Chart from "../../components/Chart";
import { Row, Col} from "reactstrap";
import CardComponent from "../../components/Card";

import {Container} from './styles'
import TableComponent from "../../components/TableComponent";


export default function Home() {
  return (
    <Fragment>

      <NavbarComponent/>


      <Container>
        {/*first row*/}
        <Row styles={{marginBottom: '10px'}}>
          <Col md={2}>
            <CardComponent>
              <p>Sla previsto</p>
              <p>17:32</p>
            </CardComponent>
          </Col>
          <Col md={2}>
            <CardComponent>
              <p>Sla previsto</p>
              <p>17:32</p>
            </CardComponent>
          </Col>

          <Col md={2}>
            <CardComponent>
              <p>Sla previsto</p>
              <p>17:32</p>
            </CardComponent>
          </Col>
          <Col md={2}>
            <CardComponent>
              <p>Sla previsto</p>
              <p>17:32</p>
            </CardComponent>
          </Col> <Col md={4}>
            <CardComponent>
              <p>Eficiencia do Berço</p>
              <h4>76%</h4>
            </CardComponent>
          </Col>
        </Row>

        <hr/>
        <Row>
          <Col md={6}>

            <Row>
              <Col md={6}>
                <CardComponent>
                  <p>Eficiencia do Berço</p>
                  <h4>76%</h4>
                </CardComponent>
              </Col>
              <Col md={6}>
                <CardComponent>
                  <p>Eficiencia do Berço</p>
                  <h4>76%</h4>
                </CardComponent>
              </Col>
            </Row>

            <br/>
            <Row>
              <Col md={12}>
                <TableComponent />
              </Col>
            </Row>


          </Col>
        </Row>


      </Container>

    </Fragment>
  );
}
