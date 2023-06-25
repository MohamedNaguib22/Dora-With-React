import "./Progress.css";
import { Col, Container, Row } from "react-bootstrap";
import ProgressBar from "react-bootstrap/ProgressBar";
import HeaderP from "../../../design-system/HeaderContent/HeaderP";
import HeaderH2 from "../../../design-system/HeaderContent/HeaderH2";
import HeaderContent from "../../../design-system/HeaderContent/HeaderContent";
const Progress = () => {
  const Web = 95;
  const Graphic = 80;
  const Search = 90;
  const Content = 67;
  const Youtube = 65;
  const Affiliate = 70;
  const Facebook = 80;
  return (
    <>
      <div className="ProgressSection">
        <HeaderContent>
          <HeaderP>Why Choose Me</HeaderP>
          <HeaderH2>My Experience Area</HeaderH2>
        </HeaderContent>
        <Container>
          <Row>
            <Col md={6} sm={12}>
              <label>Web Design</label>
              <ProgressBar now={Web} label={`${Web}%`} />
              <label>Web Ui Design</label>
              <ProgressBar now={Graphic} label={`${Graphic}%`} />
              <label>Affiliate Marketing</label>
              <ProgressBar now={Search} label={`${Search}%`} />
              <label>Web Ui Design</label>
              <ProgressBar now={Content} label={`${Content}%`} />
            </Col>
            <Col md={6} sm={12}>
              <label>Youtube Marketing</label>
              <ProgressBar now={Affiliate} label={`${Affiliate}%`} />
              <label>Content Writing</label>
              <ProgressBar now={Facebook} label={`${Facebook}%`} />
              <label>Search Engine Optimization</label>
              <ProgressBar now={Youtube} label={`${Youtube}%`} />
              <label>Facebook Marketing</label>
              <ProgressBar now={Affiliate} label={`${Affiliate}%`} />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Progress;
