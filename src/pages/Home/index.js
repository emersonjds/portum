import React, { Fragment, useState, useEffect } from "react";

import NavbarComponent from "../../components/Navbar";
import Chart from "../../components/Chart";
import { Row, Col, Button, Table, Badge } from "reactstrap";
import CardComponent from "../../components/Card";

import { Container } from "./styles";
import TableComponent from "../../components/TableComponent";
import icon from "../../assets/img/icon.png";
import Weather from "../../components/Weather";
import TabComponent from "../../components/TabComponent";

import moment from "moment";
console.log("moment", moment);
moment.locale("pt-br");

const API_URL = "https://brazik-hack-export.uc.r.appspot.com";
const CLIMA_TEMPO_URL = "https://www.climatempo.com.br";

const OPEN_WEATHER_API_KEY = "c32ff90826e60c1b8eb4770926b0a0ee";

const getEstadiaByLote = async (loteType) => {
  const url = `${API_URL}/estadias/${loteType}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const getClimaTempoTabuaMares = async (cod, mes, ano) => {
  const url = `${API_URL}/tabua_mares/50225/12/19`;

  const response = await fetch(url);
  console.log(response);
  const data = await response.json();
  return data;
};

const getOpenWeaterClimate = async () => {};

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function diffDays(init, finish) {
  let dateInit = init;
  var temp = dateInit.split(" ");
  dateInit = temp[0].split("/").reverse().join("-") + " " + temp[1];

  let dateFinish = finish;
  var temp = dateFinish.split(" ");
  dateFinish = temp[0].split("/").reverse().join("-") + " " + temp[1];

  // console.log(dateInit, dateFinish);

  dateFinish = new Date(dateFinish);
  dateInit = new Date(dateInit);

  var init = moment(dateInit, "DD-MM-YYYY HH:mm");
  var finish = moment(dateFinish, "DD-MM-YYYY HH:mm");

  var diffDays = finish.diff(init, "days");

  return diffDays + 1;
}

function diffHours(init, finish) {
  let dateInit = init;
  var temp = dateInit.split(" ");
  dateInit = temp[0].split("/").reverse().join("-") + " " + temp[1];

  let dateFinish = finish;
  var temp = dateFinish.split(" ");
  dateFinish = temp[0].split("/").reverse().join("-") + " " + temp[1];

  dateFinish = new Date(dateFinish);
  dateInit = new Date(dateInit);

  var init = moment(dateInit, "DD-MM-YYYY HH:mm");
  var finish = moment(dateFinish, "DD-MM-YYYY HH:mm");

  var diffDays = finish.diff(init, "hours");

  return diffDays;
}

export default function Home() {
  const [estadias, setEstadias] = useState([]);
  const [tabuaMares, setTabuaMares] = useState([]);

  useEffect(() => {
    getEstadiaByLote("Granel Sólido").then((estadiasData) => {
      // getClimaTempoTabuaMares(50225, 11, 19).then((tabuaMaresData) => {
      //   console.log("getClimaTempoTabuaMares RESPONSE", tabuaMaresData);
      //   setTabuaMares(tabuaMaresData);

      const _estadiasData = estadiasData.map((estadiaItem) => {
        //slaAtracacaoPrevLimit
        let slaAtracacaoPrevLimit = estadiaItem["Atracação Prevista"];
        var temp = slaAtracacaoPrevLimit.split(" ");
        slaAtracacaoPrevLimit =
          temp[0].split("/").reverse().join("-") + " " + temp[1];
        slaAtracacaoPrevLimit = new Date(slaAtracacaoPrevLimit);
        slaAtracacaoPrevLimit = slaAtracacaoPrevLimit.getHours() + 2;

        //slaAtracacaoEfetLimit
        let slaAtracacaoEfetLimit = estadiaItem["Atracação Efetiva"];
        var temp = slaAtracacaoEfetLimit.split(" ");
        slaAtracacaoEfetLimit =
          temp[0].split("/").reverse().join("-") + " " + temp[1];
        slaAtracacaoEfetLimit = new Date(slaAtracacaoEfetLimit);
        slaAtracacaoEfetLimit = slaAtracacaoEfetLimit.getHours() + 3;

        //difDaysAtracacao
        const difDaysAtracacao = diffDays(
          estadiaItem["Atracação Prevista"],
          estadiaItem["Atracação Efetiva"]
        );

        //difDaysAtracacao
        const difDaysDesatracacao = diffDays(
          estadiaItem["Desatracação Prevista"],
          estadiaItem["Desatracação Efetiva"]
        );

        //diffDaysPrev
        const diffDaysPrev = diffDays(
          estadiaItem["Atracação Prevista"],
          estadiaItem["Desatracação Prevista"]
        );

        //diffDaysEfet
        const diffDaysEfet = diffDays(
          estadiaItem["Atracação Efetiva"],
          estadiaItem["Desatracação Efetiva"]
        );

        // Define RADOM para preenchimento
        let statusEmbarcacao = "";

        const randomDesatracado = getRandomInt(0, 4);

        if (randomDesatracado == 0) {
          estadiaItem["Atracação Prevista"] = "";
          estadiaItem["Atracação Efetiva"] = "";
          estadiaItem["Desatracação Prevista"] = "";
          estadiaItem["Desatracação Efetiva"] = "";

          statusEmbarcacao = "Aguardando Autorizacao";
        } else if (randomDesatracado == 1) {
          estadiaItem["Atracação Efetiva"] = "";
          estadiaItem["Desatracação Efetiva"] = "";

          statusEmbarcacao = "A Atracar";
        } else if (randomDesatracado == 2) {
          estadiaItem["Desatracação Efetiva"] = "";

          statusEmbarcacao = "Atracado";
        } else if (randomDesatracado == 3) {
          statusEmbarcacao = "Desatracado";
        }

        estadiaItem["Status"] = statusEmbarcacao;

        return {
          ...estadiaItem,
          "Dif Dias Atracação": difDaysAtracacao,
          "Dif Dias Desatracação": difDaysDesatracacao,
          "SLA Previsto": diffDaysPrev == 0 ? 1 : diffDaysPrev,
          "SLA Efetivo": diffDaysEfet,
          "SLA Atracação Limit": slaAtracacaoPrevLimit,
          "SLA Desatracação Limit": slaAtracacaoEfetLimit,
        };
      });

      setEstadias(_estadiasData);
    });

    getClimaTempoTabuaMares(50225, 11, 19).then((climateData) => {
      console.log("getClimaTempoTabuaMares RESPONSE", climateData);
      setTabuaMares(climateData);
    });
  }, []);

  return (
    <Fragment>
      <NavbarComponent />
      <Container>
        <Row>
          <Col md={2}>
            <Weather />
          </Col>
          <Col md={10}>
            <TabComponent dataSource={estadias} />
            <hr />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}
