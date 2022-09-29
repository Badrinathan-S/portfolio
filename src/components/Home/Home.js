import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Asset/homeLogo.svg"
import { ParticlesCom } from '../Particles';
import AutoType from '../AutoType';

const Home = () => {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <ParticlesCom />
        <Container className="home-content">
          <Row>
            <Col md={3} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> SOUMYAJIT BEHERA</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <AutoType />
              </div>
            </Col>

            <Col md={3} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  )
}

export default Home