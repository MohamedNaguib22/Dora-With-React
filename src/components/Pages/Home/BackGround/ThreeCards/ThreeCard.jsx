import "./ThreeCards.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import DataTwo from "../../../../design-system/DesignTwo/DataTwo";
import Job from "../../../../design-system/DesignTwo/Job";
const ThreeCard = () => {
  return (
    <>
      <Container>
        <div className="ThreeCard1">
        <Row>
          {DataTwo.map((card) => {
            return (
              <Col md="6" lg="4" sm="12" key={card.id}>
                <Job iconTwo={card.iconTwo} titleOne={card.titleOne} job={card.job} />
              </Col>
            ); 
          })}
        </Row>
        </div>
      </Container>
    </>
  );
};

export default ThreeCard;
