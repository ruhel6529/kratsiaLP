import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Pricing.css";

function Pricing() {
  return (
    <section className="pricingSection">
      <Container>
        <Row>
          <Col className="col-12">
            <div className="sectionHeading">
              <h1 className="sectionTitle">Affordable pricing</h1>
              <h5 className="subTitle">
                Bill me <span>monthly</span> • yearly
              </h5>
            </div>
          </Col>
        </Row>

        <Row className="pricingRow">
          <Col className="col-12 col-lg-4">
            <div className="priceCard">
              <div className="cardHeading">
                <h5 className="priceTitle">Intermediate</h5>
                <p className="text">Best!</p>
              </div>
              <div className="price">
                <h5>$24</h5>
                <p className="priceText">/monthly</p>
              </div>
              <div className="priceList">
                <ul className="list">
                  <li>
                    <img src="./image/price1.png" className="img-fluid" />
                    <span>100 credits</span>
                  </li>
                  <li>
                    <img src="./image/price1.png" className="img-fluid" />
                    <span>?</span>
                  </li>
                  <li>
                    <img src="./image/price1.png" className="img-fluid" />
                    <span>?</span>
                  </li>
                  <li>
                    <img src="./image/price2.png" className="img-fluid" />
                    <span>?</span>
                  </li>
                </ul>
              </div>
              <div className="priceBtn">
                <a href="#link" className="cta">
                  try for free
                </a>
              </div>
            </div>
          </Col>
          <Col className="col-12 col-lg-4">
            <div className="priceCard">
              <div className="cardHeading">
                <h5 className="priceTitle">EXPERT</h5>
              </div>
              <div className="price">
                <h5>$39</h5>
                <p className="priceText">/monthly</p>
              </div>
              <div className="priceList">
                <ul className="list">
                  <li>
                    <img src="./image/price1.png" className="img-fluid" />
                    <span>400 credits</span>
                  </li>
                  <li>
                    <img src="./image/price1.png" className="img-fluid" />
                    <span>?</span>
                  </li>
                  <li>
                    <img src="./image/price2.png" className="img-fluid" />
                    <span>?</span>
                  </li>
                  <li>
                    <img src="./image/price2.png" className="img-fluid" />
                    <span>?</span>
                  </li>
                </ul>
              </div>
              <div className="priceBtn">
                <a href="#link" className="cta">
                  try for free
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Pricing;
