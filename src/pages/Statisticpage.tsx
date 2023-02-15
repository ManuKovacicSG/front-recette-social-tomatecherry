import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import favoritechart from "../Assets/favoritechart.png";
import vector from "../Assets/Vector.png";
import trendup from "../Assets/trendup.png";

type Props = {};

const Statisticpage = (props: Props) => {
  return (
    <>
      <style type="text/css">
        {`
        .boxes {
          background-color: #171E2B;
          margin-bottom: 36px;
          padding: 1rem;
          color: white;
          border-radius: 19px;
          width: 347px;
          height: 164px;
          font-size: 12px;
        }
        :root {
          background-color: black;
        }
        .container {
          background-color: black;
        }
        `}
      </style>
        <Container>
          <div className="boxes">
      <Row className="justify-content-md-center">
        <Col>
          <Image src={favoritechart} />
        </Col>
        <Col>
          {" "}
          <h2>Recetas más votadas</h2>
          <p>Sigue nuestra sencilla receta para preparar esta rica paella, ¡incluso si nunca habías preparado una!</p>
        </Col>
      </Row>
      </div>

        <div className="boxes">
      <Row>
        <Col>
          <Image src={vector} />
        </Col>
        <Col>
          {" "}
          <h2>Chefs en tendencia</h2>
          <p>Sigue nuestra sencilla receta para preparar esta rica paella, ¡incluso si nunca habías preparado una!</p>
        </Col>
      </Row>
      </div>

      <div className="boxes">
      <Row>
        <Col>
          <Image src={trendup} />
        </Col>
        <Col>
          {" "}
          <h2>Tus estadísticas</h2>
          <p>Sigue nuestra sencilla receta para preparar esta rica paella, ¡incluso si nunca habías preparado una!</p>
        </Col>
      </Row>
      </div>

      </Container>
    </>
  );
};

export default Statisticpage;
