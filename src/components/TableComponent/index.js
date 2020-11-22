import React, { Fragment, useState, useEffect } from "react";
import { Table, Badge } from "reactstrap";
import icon from "../../assets/img/icon.png";
import moment from "moment";

const API_URL = "https://brazik-hack-export.uc.r.appspot.com";

console.log("moment", moment);
moment.locale("pt-br");

// var before = moment('2017.02.12 09:00','YYYY.MM.DD HH:mm');
// var now = moment();

// console.log(
//   moment(now - before)
//   .format('D[ day(s)] H[ hour(s)] m[ minute(s)] s[ second(s) ago.]')
// );

const getClimaTempoTabuaMares = async (cod, mes, ano) => {
  const url = `${API_URL}/tabua_mares/${cod}/${mes}/${ano}`;

  const response = await fetch(url);
  console.log(response);
  const data = await response.json();
  return data;
};

function diffDays(init, finish) {
  let dateInit = init;
  var temp = dateInit.split(" ");
  dateInit = temp[0].split("/").reverse().join("-") + " " + temp[1];

  let dateFinish = finish;
  var temp = dateFinish.split(" ");
  dateFinish = temp[0].split("/").reverse().join("-") + " " + temp[1];

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

  return diffDays + 1;
}


function diffHours(init, finish) {
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

  var diffDays = finish.diff(init, "hours");

  return diffDays;
}

export default function TableComponent(props) {

  const [slicedEstadias, setSlicedEstadias] = useState([])
  const [tabuaMares, setTabuaMares] = useState([])

  const { estadias } = props;

  console.log("TableComponent", estadias);

  useEffect(() => {
    getClimaTempoTabuaMares(50225, 12, 19).then((tabuaMaresData) => {
      console.log("getClimaTempoTabuaMares RESPONSE", tabuaMaresData);
      setTabuaMares(tabuaMaresData);

    })
  }, [])

  useEffect(() => {
    const items = props.estadias.splice(-30, 20).map((estadia, index) => {
      console.log("SLIDED ESTADIA ITEM", estadia);

      // Realiza chegagem na tabua de marés
      let dataAtracacaoPrev = estadia["Atracação Prevista"];
      var temp = dataAtracacaoPrev.split(" ");
      dataAtracacaoPrev =
        temp[0].split("/").reverse().join("-") + " " + temp[1];
      // dataAtracacaoPrev = new Date(dataAtracacaoPrev);

      // console.log('HAHAH', dataAtracacaoPrev)
      const tabuaMareItemMatch = tabuaMares.filter((tabuaMareItem) => {
        let dataTabuaMare =
          "2019/" + tabuaMareItem.data + " " + tabuaMareItem.item1.horario;
        var temp = dataTabuaMare.split(" ");
        dataTabuaMare = temp[0].split("/").reverse().join("-") + " " + temp[1];
        //  dataTabuaMare = new Date(dataTabuaMare);

        if (dataAtracacaoPrev != undefined && dataTabuaMare != undefined) {
          console.log("dataAtracacaoPrev", dataAtracacaoPrev);
          console.log("dataTabuaMare", dataTabuaMare);
          const _diffHours = diffHours(dataAtracacaoPrev, dataTabuaMare);
          if (Math.abs(_diffHours) < 10) {
            return {
              dataAtracacaoPrev,
              dataTabuaMare,
              diffHours,
            };
          }
        }
      });

      console.log("tabuaMareItemMatch", tabuaMareItemMatch);

      estadia.tabuaMareItemMatch = tabuaMareItemMatch;

      return estadia;
    });

    setSlicedEstadias(items)

  }, [tabuaMares]);

  return (
    <Fragment>
      <h3>Atracações da Semana</h3>
      <Table size="sm">
        <thead>
          <tr>
            {/* <th>Data</th> */}
            <th>Situação Maré</th>
            <th>Bandeira Embarcação</th>
            <th>Status</th>
            <th>Atracação Prev</th>
            <th>Atracação Exec</th>
            <th>Dif Dias Atracação</th>
            <th>Desatracação Prev</th>
            <th>Desatracação Exec</th>
            <th>Dif Dias Desatracação</th>
            <th>SLA Previsto</th>
            <th>SLA Efetivo</th>
            <th>SLA Diff</th>
            <th>SLA Diff %</th>
            <th>SLA Limit Prev</th>
            <th>SLA Limit Efet</th>
          </tr>
        </thead>
        <tbody>
          {slicedEstadias.map((estadia, index) => {
            // console.log(estadia);

            // Atracação Efetiva: "03/01/2017 09:00"
            // Atracação Prevista: "24/12/2016 07:30"
            // Bandeira da Embarcação: "Filipinas"
            // Desatracação Efetiva: "06/01/2017 17:20"
            // Desatracação Prevista: "06/01/2017 18:00"
            // Especialidade da Carga Predominante: "Granel Sólido"
            // Estadia Off-Shore: H"Não"
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

            let slaDiff = estadia["SLA Previsto"] - estadia["SLA Efetivo"];

            let slaDiffPerc = slaDiff / estadia["SLA Previsto"];
            slaDiffPerc = Math.ceil(slaDiffPerc);

            let statusColorAtracacaoAtrasada = "";
            if (slaDiff > 0) {
              statusColorAtracacaoAtrasada = {
                color: "red",
                fontWeight: "bold",
              };
            } else {
              statusColorAtracacaoAtrasada = {
                color: "black",
              };
            }

            let statusColorDesatracacaoAtrasada = "";
            if (slaDiff > 0) {
              statusColorDesatracacaoAtrasada = {
                color: "red",
                fontWeight: "bold",
              };
            } else {
              statusColorDesatracacaoAtrasada = {
                color: "black",
              };
            }

            let statusColorBackgroundRow = "";
            if (slaDiff > 0) {
              statusColorBackgroundRow = {
                background: "#ff00001a",
              };
            } else {
              statusColorBackgroundRow = {
                background: "white",
              };
            }

          // data: "23/12"
          // item1: {horario: "00:30", metros: "1.2"}
          // item2: {horario: "06:23", metros: "0.5"}
          // item3: {horario: "13:47", metros: "1.2"}
          // item4: {horario: "18:58", metros: "0.2"}
          // item5: {horario: "", metros: null}
          // item6: {horario: null, metros: null}

            let mare = ''
            if(estadia["tabuaMareItemMatch"].length == 0){
              mare = 'Sem Info'
            }
            else{
              estadia["tabuaMareItemMatch"].forEach(element => {
                // console.log(element)
                if(element.item1.horario != "" && element.item1.horario != null){
                  mare += element.item1.horario + ' hs - ' + element.item1.metros + ' m \n'
                }
                if (element.item2.horario != "" && element.item2.horario != null) {
                  mare += element.item2.horario + " hs - " + element.item2.metros + " m \n";
                }
                if (element.item3.horario != "" && element.item3.horario != null) {
                  mare += element.item3.horario + " hs - " + element.item3.metros + " m \n";
                }
                if (element.item4.horario != "" && element.item4.horario != null) {
                  mare += element.item4.horario + " hs - " + element.item4.metros + " m \n";
                }
                if (element.item4.horario != "" && element.item4.horario != null) {
                  mare += element.item4.horario + " hs - " + element.item4.metros + " m \n";
                }
              });
            }

            return (
              <tr style={statusColorBackgroundRow}>
                <td
                  style={{
                    fontSize:12,
                  }}
                >{mare}</td>
                <td>{estadia["Bandeira da Embarcação"]}</td>
                <td>{estadia["Status"]}</td>
                <td>{estadia["Atracação Prevista"]}</td>
                <td style={statusColorAtracacaoAtrasada}>
                  {estadia["Atracação Efetiva"]}
                </td>
                <td>{estadia["Dif Dias Atracação"]}</td>
                <td>{estadia["Desatracação Prevista"]}</td>
                <td style={statusColorDesatracacaoAtrasada}>
                  {estadia["Desatracação Efetiva"]}
                </td>
                <td>{estadia["Dif Dias Desatracação"]}</td>
                <td>{estadia["SLA Previsto"]}</td>
                <td>{estadia["SLA Efetivo"]}</td>
                <td>{slaDiff}</td>
                <td>{slaDiffPerc}%</td>
                <td>{estadia["SLA Atracação Limit"]}</td>
                <td>{estadia["SLA Desatracação Limit"]}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Fragment>
  );
}
