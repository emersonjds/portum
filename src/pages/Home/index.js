import React, { Fragment, useState, useEffect } from "react";

import NavbarComponent from "../../components/Navbar";
import Chart from "../../components/Chart";
import { Row, Col, Button, Table, Badge } from "reactstrap";
import CardComponent from "../../components/Card";

import { Container } from "./styles";
import TableComponent from "../../components/TableComponent";
import icon from "../../assets/img/icon.png";

const API_URL = 'https://brazik-hack-export.uc.r.appspot.com/'
const CLIMA_TEMPO_URL = 'https://www.climatempo.com.br'


const getEstadiaByLote = async(loteType) => {
  const url = `${API_URL}/estadias/${loteType}`
  const response = await fetch(url)
  const data = await response.json()
  return data

}

const getClimaTempoTabuaMaré = async () => {
  const url = `${CLIMA_TEMPO_URL}/json/previsao-mare`
  const response = await fetch(url)
  const data = await response.json()
  return data
}




export default function Home() {


  const [estadias, setEstadias] = useState([])
  // const [tabuaMarés]

  useEffect(() => {
    getEstadiaByLote('Granel Sólido').then(data => {
      setEstadias(data)
    })
  }, [])

  return (
    <Fragment>
      <NavbarComponent />

      <Container>
        {/*first row*/}
        <h2>Analise de 16/11 à 21/11</h2>

          
          <Row>
              <Col md={12}>
              <Fragment>
                <h3>Atracações da Semana</h3>
                <Table size="sm">
                  <thead>
                  <tr>
                    <th>Data</th>
                    <th>Bandeira Embarcação</th>
                    <th>Status</th>
                    <th>Ent. Prevista</th>
                    <th>Ent. Executada</th>
                    <th>Sai. Prevista</th>
                    <th>Sai. Executada</th>
                    <th>Eficiencia</th>
                  </tr>
                  </thead>
                  <tbody>
                  {estadias.splice(-30,20).map((estadia, index) => {

                  console.log(estadia)

                  const atracacaoPrevista = new Date(estadia['Atracação Prevista'])
                  const destracacaoPrevista = new Date(estadia['Desatração Prevista'])

                  console.log(atracacaoPrevista)
                  console.log(destracacaoPrevista)

                  // Atracação Efetiva: "03/01/2017 09:00"
                  // Atracação Prevista: "24/12/2016 07:30"
                  // Bandeira da Embarcação: "Filipinas"
                  // Desatracação Efetiva: "06/01/2017 17:20"
                  // Desatracação Prevista: "06/01/2017 18:00"
                  // Especialidade da Carga Predominante: "Granel Sólido"
                  // Estadia Off-Shore: "Não"
                  // Finalidade da Embarcação: "Transporte de Granel Sólido e Carga Geral"
                  // Local(is) Atracação (área do porto > berço > cabeço): "CAIS COMERCIAL > B104 > 22-29"
                  // Local(is) e Data(s) Reatracação (área do porto > berço > ca: "(CAIS COMERCIAL > B104 > 22-29 = 06/01/2017 17:10)"
                  // Motivo de Atracação: "Descarga"
                  // Número do DUV: "c9b5640b45500aff8931d5a066cdf4be"
                  // Porto de estadia atual: "BRFOR - FORTALEZA (MUCURIPE)"
                  // Tipo de Embarcação: "Graneleiro"
                  // Tipo de Viagem Chegada: "NÃO INFORMADO"
                  // Tipo de Viagem Saída: "IMPORTAÇÃO/LONGO CURSO"
                  // Área de Navegação: "IMPORT/EXPORT/LONGO CURSO"

                    return <tr>
                    <th>Data</th>
                    <th>{estadia['Bandeira da Embarcação']}</th>
                    <th>Status</th>
                    <th>{estadia['Atracação Prevista']}</th>
                    <th>{estadia['Atracação Efetiva']}</th>
                    <th>{estadia['Desatracação Efetiva']}</th>
                    <th>{estadia['Desatracação Prevista']}</th>
                    <th>Eficiencia</th>
                  </tr>
                  })}

                    </tbody>
                </Table>
              </Fragment>
        
          
              </Col>
            </Row>
             
        

        {/* <Row styles={{ marginBottom: "10px" }}>
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
            <CardComponent>
              <p>Eficiencia do Berço</p>
              <h4>76%</h4>
            </CardComponent>
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
        </Row> */}
      </Container>
    </Fragment>
  );
}
