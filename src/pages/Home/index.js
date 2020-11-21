import React from 'react';
import { Button } from 'reactstrap';
import {Container} from './styles'
import NavbarComponent from '../../components/Navbar'


export default function Home() {
    return (
        <>
          <NavbarComponent />
          <Container>
            <h1>
              Home
              <Button color="danger">Danger!</Button>
            </h1>
          </Container>
        </>
    )
}