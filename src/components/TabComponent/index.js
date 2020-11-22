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
import boatIcon from "../../assets/img/carg_2.png";

export default function TabComponent(props) {
  const [activeTab, setActiveTab] = useState("1");
  const { dataSource } = props;

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
            <span style={{ color: "black" }}> Ultimos 7 dias</span>
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row style={{ marginTop: "30px" }}>
            <Col md={2}>
              <CardComponent title={"Sla Planejado"}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <svg
                    width="1.5em"
                    height="1.5em"
                    viewBox="0 0 16 16"
                    class="bi bi-clock-history"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z"
                    />
                    <path
                      fillRule="evenodd"
                      d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z"
                    />
                    <path
                      fillRule="evenodd"
                      d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z"
                    />
                  </svg>
                  <span style={{ marginLeft: 15, fontWeight: "bold" }}>
                    17:33
                  </span>
                </div>
              </CardComponent>
            </Col>
            <Col md={2}>
              <CardComponent title={"Sla Executado"}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <svg
                    width="1.5em"
                    height="1.5em"
                    viewBox="0 0 16 16"
                    class="bi bi-clock"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm8-7A8 8 0 1 1 0 8a8 8 0 0 1 16 0z"
                    />
                    <path
                      fillRule="evenodd"
                      d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z"
                    />
                  </svg>
                  <span style={{ marginLeft: 15, fontWeight: "bold" }}>
                    19:22
                  </span>
                </div>
              </CardComponent>
            </Col>
            <Col md={2}>
              <CardComponent title={" Atracados Agora"}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img src={boatIcon} height="30" />
                  <span style={{ marginLeft: 15, fontWeight: "bold" }}>18</span>
                </div>
              </CardComponent>
            </Col>
            <Col md={3}>
              <CardComponent title={"Navios Esperados"}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img src={boatIcon} height="30" />
                  <span
                    style={{
                      marginLeft: 15,
                      fontWeight: "bold",
                    }}
                  >
                    63
                  </span>
                </div>
              </CardComponent>
            </Col>

            <Col md={3}>
              <CardComponent title={"Eficiencia do Berço"} bkgColor="#fcd33f">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <svg
                    width="1.5em"
                    height="1.5em"
                    viewBox="0 0 16 16"
                    class="bi bi-check2-circle"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M15.354 2.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L8 9.293l6.646-6.647a.5.5 0 0 1 .708 0z"
                    />
                    <path
                      fillRule="evenodd"
                      d="M8 2.5A5.5 5.5 0 1 0 13.5 8a.5.5 0 0 1 1 0 6.5 6.5 0 1 1-3.25-5.63.5.5 0 1 1-.5.865A5.472 5.472 0 0 0 8 2.5z"
                    />
                  </svg>
                  <span
                    style={{
                      marginLeft: 15,
                      fontWeight: "bold",
                      fontSize: "20px",
                    }}
                  >
                    63 %
                  </span>
                </div>
              </CardComponent>
            </Col>
          </Row>

          <hr style={{ marginTop: "2em", backgroundColor: "#cecece" }} />

          <Row>
            <Col md={12}>
              <TableComponent estadias={dataSource} />
            </Col>
          </Row>
        </TabPane>

        {/* PARTE 2 */}
        <TabPane tabId="2">
          <Row style={{ marginTop: "30px" }}>
            <Col md={2}>
              <CardComponent title={"Sla Planejado"}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <svg
                    width="1.5em"
                    height="1.5em"
                    viewBox="0 0 16 16"
                    class="bi bi-clock-history"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z"
                    />
                    <path
                      fillRule="evenodd"
                      d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z"
                    />
                    <path
                      fillRule="evenodd"
                      d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z"
                    />
                  </svg>
                  <span style={{ marginLeft: 15, fontWeight: "bold" }}>
                    23:12
                  </span>
                </div>
              </CardComponent>
            </Col>
            <Col md={2}>
              <CardComponent title={"Sla Executado"}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <svg
                    width="1.5em"
                    height="1.5em"
                    viewBox="0 0 16 16"
                    class="bi bi-clock"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm8-7A8 8 0 1 1 0 8a8 8 0 0 1 16 0z"
                    />
                    <path
                      fillRule="evenodd"
                      d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z"
                    />
                  </svg>
                  <span style={{ marginLeft: 15, fontWeight: "bold" }}>
                    22:11
                  </span>
                </div>
              </CardComponent>
            </Col>
            <Col md={2}>
              <CardComponent title={"Atracados D - 7"}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img src={boatIcon} height="30" />
                  <span style={{ marginLeft: 15, fontWeight: "bold" }}>48</span>
                </div>
              </CardComponent>
            </Col>
            <Col md={3}>
              <CardComponent title={"Navios Esperados"}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img src={boatIcon} height="30" />
                  <span
                    style={{
                      marginLeft: 15,
                      fontWeight: "bold",
                    }}
                  >
                    78
                  </span>
                </div>
              </CardComponent>
            </Col>

            <Col md={3}>
              <CardComponent title={"Eficiencia do Berço"} bkgColor="#33cc99">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <svg
                    width="1.5em"
                    height="1.5em"
                    viewBox="0 0 16 16"
                    class="bi bi-check2-circle"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M15.354 2.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L8 9.293l6.646-6.647a.5.5 0 0 1 .708 0z"
                    />
                    <path
                      fillRule="evenodd"
                      d="M8 2.5A5.5 5.5 0 1 0 13.5 8a.5.5 0 0 1 1 0 6.5 6.5 0 1 1-3.25-5.63.5.5 0 1 1-.5.865A5.472 5.472 0 0 0 8 2.5z"
                    />
                  </svg>
                  <span
                    style={{
                      marginLeft: 15,
                      fontWeight: "bold",
                      fontSize: "20px",
                    }}
                  >
                    86 %
                  </span>
                </div>
              </CardComponent>
            </Col>
          </Row>

          <hr style={{ marginTop: "2em", backgroundColor: "#cecece" }} />

          <Row>
            <Col md={12}>
              <TableComponent estadias={dataSource} />
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
}
