import "./Blog.css";
import { Col, Container, Row } from "react-bootstrap";
import HeaderContent from "../../../design-system/HeaderContent/HeaderContent";
import HeaderP from "../../../design-system/HeaderContent/HeaderP";
import DataBlog from "../../../design-system/DesignFour/DataBlog";
import OurBlog from "../../../design-system/DesignFour/OurBlog";

const Blog = () => {
  return (
    <div className="BlogSection">
      <Container>
        <div className="HeaderBlog">
        <HeaderContent>
          <HeaderP>From My Blog</HeaderP>
          <h2 className="ContBlog">
            Our Recent Updates, Blog, Tips, Tricks & More
          </h2>
        </HeaderContent>
        </div>
        <Row className="ImagBloog">
          {DataBlog.map((item) => {
            return (
              <Col key={item.id} lg="4" md="6" sm="12">
                <OurBlog
                  imgBlog={item.imgBlog}
                  April={item.April}
                  jobTwo={item.jobTwo}
                  blog={item.blog}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Blog;
