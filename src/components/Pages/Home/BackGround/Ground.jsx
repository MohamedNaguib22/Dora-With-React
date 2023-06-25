import "./Ground.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import Hardy from "../../../../assatis/img/img106.png";
const Ground = () => {
  return (
    <div className="HardySection">
      <Container>
        <Row>
          <Col md="6" sm="12">
            <div className="Content">
              <p className="ContentHi">Hi, I'm</p>
              <h1 className="ContentHardy">Mary Hardy</h1>
              <h5 className="ContentDigital">Digital Marketing Expert</h5>
              <p className="ContentShot">
                Shot what able cold new the see hold. Friendly as an betrayed
                formerly he. Morning because as to society behaved moments
              </p>
              <div className="container-fluid">
                <Row>
                  <Col md="5" sm="6">
                    <div>
                      <Button className="BtnOne">
                        <a href="/#">Download CV</a>
                      </Button>
                    </div>
                  </Col>
                  <Col md="5" sm="6">
                    <div>
                      <Button className="BtnTwo">
                        <a href="/#">Contact</a>
                      </Button>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
          <Col md="6" sm="12" className="HardyImg">
            <div>
              <img src={Hardy} alt="Hardy" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Ground;
