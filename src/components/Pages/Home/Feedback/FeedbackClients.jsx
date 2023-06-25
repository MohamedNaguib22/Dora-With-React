import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DataThree from "../../../design-system/DesignThree/DataThree";
import { Clients } from "../../../design-system/DesignThree";
import { Col, Container, Row } from "react-bootstrap";
import "./Feedback.css"
const FeedbackClients = () => {
  const carousel = {
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 2,
    responsive: [
      {
        breakpoint: 1399,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="Feedback">
      <Container>
        <Row>
          <Col lg="12" sm="12">
              <div className="FeedbackContent">
                <h2>Clients Are Satisfied For Our Work, View Feedback</h2>
            </div>
          </Col>
          <Col lg="12" sm="12">
            <Slider {...carousel}>
              {DataThree.map((item) => (
                <Clients
                  key={item.id}
                  imgOne={item.imgOne}
                  Awesome={item.Awesome}
                  imgTwo={item.imgTwo}
                  Clients={item.Clients}
                  Cooper={item.Cooper}
                  Designer={item.Designer}
                  className={item.className}
                />
              ))}
            </Slider>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FeedbackClients;
