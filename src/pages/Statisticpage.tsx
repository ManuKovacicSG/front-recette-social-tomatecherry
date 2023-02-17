import React from "react";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
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
          <Row>
            <Col width="fit-content">
              <Image src={favoritechart} className="align-items-center" />
            </Col>
            <Col fluid>
              <h2>Recetas más votadas</h2>
              <p>
                Sigue nuestra sencilla receta para preparar esta rica paella,
                ¡incluso si nunca habías preparado una!
              </p>
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
              <p>
                Sigue nuestra sencilla receta para preparar esta rica paella,
                ¡incluso si nunca habías preparado una!
              </p>
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
              <p className="text-justify">
                Sigue nuestra sencilla receta para preparar esta rica paella,
                ¡incluso si nunca habías preparado una!
              </p>
            </Col>
          </Row>
        </div>
<Container>
        <Card style={{ color: "white", backgroundColor: "#171E2B" }}>
          <Row>
            <Col>
              <Card.Img src={trendup} className='' />
            </Col>
            <Col>
              <Card.Body>
                <Card.Title>Recetas mas votadas</Card.Title>
                <Card.Text>
                  Sigue nuestra sencilla receta para preparar esta rica paella,
                  ¡incluso si nunca habías preparado una!
                </Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Card></Container>
      </Container>
    </>
  );
};

export default Statisticpage;
