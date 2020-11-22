import React, {Fragment} from 'react';
import {Table, Badge} from 'reactstrap';
import icon from '../../assets/img/icon.png'

export default function TableComponent(props) {

  return (
    <Fragment>
      <h3>Atracações da Semana</h3>
      <Table size="sm">
        <thead>
        <tr>
          <th>Data</th>
          <th>Vessel</th>
          <th>Status</th>
          <th>Ent. Prevista</th>
          <th>Ent. Executada</th>
          <th>Sai. Prevista</th>
          <th>Sai. Executada</th>
          <th>Eficiencia</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>01/01/2017</td>
          <td>
            Bertolini
          </td>
          <td>
            <Badge color="success" pill>
              In time
            </Badge>
          </td>
          <td>17:30</td>
          <td>19:40</td>
          <td>23:15</td>
          <td>07:20</td>
          <td>43%</td>
        </tr>

        <tr>
          <td>01/01/2017</td>
          <td>Bertolini</td>
          <td>
            <Badge color="warning" pill>
              Em Atraso
            </Badge>
          </td>
          <td>17:30</td>
          <td>19:40</td>
          <td>23:15</td>
          <td>07:20</td>
          <td>43%</td>
        </tr>

        <tr>
          <td>01/01/2017</td>
          <td>Bertolini</td>
          <td>
            <Badge color="danger" pill>
              Atrasada
            </Badge>
          </td>
          <td>17:30</td>
          <td>19:40</td>
          <td>23:15</td>
          <td>07:20</td>
          <td>43%</td>
        </tr>

        </tbody>
      </Table>
    </Fragment>

  );
}

