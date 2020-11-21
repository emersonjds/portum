import React from 'react';
import {Button} from 'reactstrap';
import {Container} from './styles'
import NavbarComponent from '../../components/Navbar'
import Chart from "../../components/Chart";


export default function Home() {
  return (
    <>
      <NavbarComponent/>
      <Container>
        <Chart/>
      </Container>
    </>
  )
}