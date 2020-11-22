import React from "react";
import { Container, CardImg } from "reactstrap";
import nuvem from "../../assets/img/nuvem.png";

export default function Weather() {
  return (
    <>
      <Container>
        <CardImg top width="100%" src={nuvem} alt="cloud"></CardImg>

        <h2 style={{ textAlign: "center" }}>12 C</h2>
        <h4 style={{ textAlign: "center" }}>
          <strong>Saturday</strong>
        </h4>

        <hr />

        <h5 style={{ textAlign: "center" }}>TÁBUA DE MARÉS</h5>
        <div style={{ textAlign: "center", color: "red" }}>
          Aviso de Ressacas Maritimas
        </div>

        <hr />

        <h5 style={{ textAlign: "center" }}>Previsão de Onda</h5>
        <div style={{ textAlign: "center" }}>Fraca - 13Z</div>
      </Container>
    </>
  );
}
