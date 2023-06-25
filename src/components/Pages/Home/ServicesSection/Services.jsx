import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Services.css";
import CardIcon from "../../../design-system/DesignOne/CardIcon";
import OneCards from "../../../design-system/DesignOne/Data";

const Services = () => {
  const settings = {
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    speed: 500,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
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
    ],
  };

  return (
    <>
      <Container className="ServicesSection overflow-hidden">
        <Row>
          <Col lg={3} md={12} sm={12} className="ServicesClass">
            <div>
              <p className="ServicesCont1">Services</p>
              <h2 className="ServicesCont2">
                I Provide Wide Range Of Digital Services
              </h2>
            </div>
          </Col>
          <Col lg={9} md={12} sm={12}>
            <Slider {...settings}>
              {OneCards.map((item) => (
                <CardIcon
                  key={item.id}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                  className={item.className}
                />
              ))}
            </Slider>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Services;
