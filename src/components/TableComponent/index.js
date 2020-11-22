import React, { Fragment } from "react";
import { Table, Badge } from "reactstrap";
import icon from "../../assets/img/icon.png";

import moment from "moment";
console.log("moment", moment);
moment.locale("pt-br");

// var before = moment('2017.02.12 09:00','YYYY.MM.DD HH:mm');
// var now = moment();

// console.log(
//   moment(now - before)
//   .format('D[ day(s)] H[ hour(s)] m[ minute(s)] s[ second(s) ago.]')
// );


function diffDays(init, finish) {
  let dateInit = init
  var temp = dateInit.split(" ");
  dateInit = temp[0].split("/").reverse().join("-") + " " + temp[1];

  let dateFinish = finish;
  var temp = dateFinish.split(" ");
  dateFinish =
    temp[0].split("/").reverse().join("-") + " " + temp[1];

  // console.log(
  //   estadia["Atracação Prevista"],
  //   estadia["Desatracação Prevista"]
  // );
  console.log(dateInit, dateFinish);

  dateFinish = new Date(dateFinish);
  dateInit = new Date(dateInit);

  var init = moment(dateInit, "DD-MM-YYYY HH:mm");
  var finish = moment(dateFinish, "DD-MM-YYYY HH:mm");

  var diffDays = finish.diff(init, "days");
  // console.log(diffDays);
  // console.log("============");

  return diffDays + 1
}

export default function TableComponent(props) {
  const { estadias } = props;

  console.log("TableComponent", estadias);

  return (

    <Fragment>
      <h3>Atracações da Semana</h3>
      <Table size="sm">
        <thead>
          <tr>
            {/* <th>Data</th> */}
            <th>Bandeira Embarcação</th>
            <th>Status</th>
            <th>Ent. Prevista</th>
            <th>Ent. Executada</th>
            <th>Sai. Prevista</th>
            <th>Sai. Executada</th>
            <th>SLA Previsto</th>
            <th>SLA Efetivo</th>
            <th>SLA Diff</th>
            <th>SLA Limit Prev</th>
            <th>SLA Limit Efet</th>
          </tr>
        </thead>
        <tbody>
          {estadias.splice(-30, 20).map((estadia, index) => {
            console.log(estadia);

            const diffDaysPrev = diffDays(
              estadia["Atracação Prevista"],
              estadia["Desatracação Prevista"]
            );
            console.log(diffDaysPrev);
            console.log("============");

            const diffDaysEfet = diffDays(
              estadia["Atracação Efetiva"],
              estadia["Desatracação Efetiva"]
            );
            console.log(diffDaysEfet);
            console.log("============");

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

            return (
              <tr>
                {/* <th>{estadia["Número do DUV"].slice(0, 10) + "..."}</th> */}
                <th>{estadia["Bandeira da Embarcação"]}</th>
                <th>Status</th>
                <th>{estadia["Atracação Prevista"]}</th>
                <th>{estadia["Atracação Efetiva"]}</th>
                <th>{estadia["Desatracação Efetiva"]}</th>
                <th>{estadia["Desatracação Prevista"]}</th>
                <th>{diffDaysPrev} Dias</th>
                <th>{diffDaysEfet} Dias</th>
                <th>{(diffDaysEfet-diffDaysPrev)}</th>
                <th>{estadia["SLA Atracação Limit"]}</th>
                <th>{estadia["SLA Desatracação Limit"]}</th>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Fragment>
  );
}
