import React, { useState } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
} from "reactstrap";
import classnames from "classnames";
import CardComponent from "../Card";
import TableComponent from "../TableComponent";

export default function TabComponent() {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "1" })}
            onClick={() => {
              toggle("1");
            }}
          >
            <span style={{ fontWeight: "bold", color: "black" }}>Hoje</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "2" })}
            onClick={() => {
              toggle("2");
            }}
          >
            <span style={{ fontWeight: "bold", color: "black" }}>
              {" "}
              Ultimos 7 dias
            </span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "3" })}
            onClick={() => {
              toggle("3");
            }}
          >
            <span style={{ fontWeight: "bold", color: "black" }}>
              Embarcações
            </span>
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row style={{ marginTop: "30px" }}>
            <Col md={2}>
              <CardComponent
                title={"Sla Planejado"}
                contentCard={"17h : 30m"}
              ></CardComponent>
            </Col>
            <Col md={2}>
              <CardComponent
                title={"Sla Executado"}
                contentCard={"13h : 48m"}
              ></CardComponent>
            </Col>
            <Col md={2}>
              <CardComponent
                title={"Navios Esperados"}
                contentCard={"63"}
              ></CardComponent>
            </Col>
            <Col md={3}>
              <CardComponent
                title={" Atracados Agora"}
                contentCard={"18"}
              ></CardComponent>
            </Col>
            <Col md={3}>
              <CardComponent title={"Eficiencia do Berço"} bkgColor="#fcd33f">
                <h5>76%</h5>
              </CardComponent>
            </Col>
          </Row>

          <hr style={{ marginTop: "2em", backgroundColor: "#cecece" }} />

          <Row>
            <Col md={8}>
              <TableComponent />
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="6">
              <Card body>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>
                  With supporting text below as a natural lead-in to additional
                  content.
                </CardText>
                <Button>Go somewhere</Button>
              </Card>
            </Col>
            <Col sm="6">
              <Card body>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>
                  With supporting text below as a natural lead-in to additional
                  content.
                </CardText>
                <Button>Go somewhere</Button>
              </Card>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
}
