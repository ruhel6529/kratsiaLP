import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Creativity.css";

function Creativity() {
  return (
    <section className="createSection">
      <Container>
        <Row className="mainRow">
          <Col className="col-12 col-lg-10">
            <div className="content">
              <h1 className="sectionTitle">
                Let your creativity break free. <br /> No matter the industry.
              </h1>
            </div>
          </Col>
          <Col className="col-12 col-lg-2">
            <div className="sectionBtn">
              <a href="#link" className="cta">
                try now
              </a>
            </div>
          </Col>
        </Row>

        <Row className="galleryRow">
          <Col className="col-12 col-lg-4">
            <div className="galleryImage">
              <img src="./image/g1.png" alt="g1" className="img-fluid" />
            </div>
          </Col>
          <Col className="col-12 col-lg-4">
            <div className="galleryImage">
              <img src="./image/g2.png" alt="g2" className="img-fluid" />
            </div>
          </Col>
          <Col className="col-12 col-lg-4">
            <div className="galleryImage">
              <img src="./image/g3.png" alt="g3" className="img-fluid" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Creativity;
