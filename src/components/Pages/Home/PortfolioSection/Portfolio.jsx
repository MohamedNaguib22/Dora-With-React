import { useState } from "react";
import HeaderContent from "../../../design-system/HeaderContent/HeaderContent";
import HeaderH2 from "../../../design-system/HeaderContent/HeaderH2";
import HeaderP from "../../../design-system/HeaderContent/HeaderP";
import "./Portfolio.css";
import { Col, Container, Row } from "react-bootstrap";
import {
  tab1,
  tab2,
  tab3,
  tab4,
  tab5,
  tabAll,
} from "../../../design-system/DesignFive/DataTab";
import Grid from "../../../design-system/DesignFive/Grid";

const Portfolio = () => {
  const [tab, SetTab] = useState("tabAll");
  function switchTab(tab) {
    SetTab(tab)
  }
  return (
    <div className="PortfolioSection">
      <HeaderContent>
        <HeaderP>Portfolio</HeaderP>
        <HeaderH2>My Amazing Works</HeaderH2>
      </HeaderContent>
      <Container>
        <div>
          <ul>
            <li
              className={`button ${tab === "tabAll" ? "active" : ""}`}
              onClick={() => switchTab("tabAll")}>
              All
            </li>
            <li
              className={`button ${tab === "tab1" ? "active" : ""}`}
              onClick={() => switchTab("tab1")}>
              Youtube
            </li>
            <li
              className={`button ${tab === "tab2" ? "active" : ""}`}
              onClick={() => switchTab("tab2")}>
              Vimeo
            </li>
            <li
              className={`button ${tab === "tab3" ? "active" : ""}`}
              onClick={() => switchTab("tab3")}>
              Details
            </li>
            <li
              className={`button ${tab === "tab4" ? "active" : ""}`}
              onClick={() => switchTab("tab4")}>
              Popup
            </li>
            <li
              className={`button ${tab === "tab5" ? "active" : ""}`}
              onClick= {() => switchTab("tab5")}>
              Sound cloud
            </li>
          </ul>
        </div>
        <div className="AmazingSection">
          <Container>
            <Row>
              {tab === "tab5"
                ? tab5.map((item) => {
                    return (
                      <Col lg="4" md="6" sm="12" key={item.id}>
                        <Grid
                          className={item.className}
                          img={item.img}
                          alt={item.alt}
                          delay={item.delay}
                        />
                      </Col>
                    );
                  })
                : tab === "tab1"
                ? tab1.map((item) => {
                    return (
                      <Col lg="4" md="6" sm="12" key={item.id}>
                        <Grid
                          className={item.className}
                          img={item.img}
                          alt={item.alt}
                          delay={item.delay}
                        />
                      </Col>
                    );
                  })
                : tab === "tab2"
                ? tab2.map((item) => {
                    return (
                      <Col lg="4" md="6" sm="12" key={item.id}>
                        <Grid
                          className={item.className}
                          img={item.img}
                          alt={item.alt}
                          delay={item.delay}
                        />
                      </Col>
                    );
                  })
                : tab === "tab3"
                ? tab3.map((item) => {
                    return (
                      <Col lg="4" md="6" sm="12" key={item.id}>
                        <Grid
                          className={item.className}
                          img={item.img}
                          alt={item.alt}
                          delay={item.delay}
                        />
                      </Col>
                    );
                  })
                : tab === "tab4"
                ? tab4.map((item) => {
                    return (
                      <Col lg="4" md="6" sm="12" key={item.id}>
                        <Grid
                          className={item.className}
                          img={item.img}
                          alt={item.alt}
                          delay={item.delay}
                        />
                      </Col>
                    );
                  })
                : tabAll.map((item) => {
                    return (
                      <Col lg="4" md="6" sm="12" key={item.id}>
                        <Grid
                          className={item.className}
                          img={item.img}
                          alt={item.alt}
                          delay={item.delay}
                        />
                      </Col>
                    );
                  })}
            </Row>
          </Container>
        </div>
      </Container>
    </div>
  );
};

export default Portfolio;
