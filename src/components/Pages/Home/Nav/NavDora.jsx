import "./Nav.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../../../assatis/img/img105.png";
import { useEffect, useState } from "react";

const NavDora = () => {
  const [click, setClick] = useState("btn1");
  const handelClick = (click) => {
    setClick(click);
  };
  const [navbar, setNavbar] = useState(false)
  const scrollNavbar = () => { 
    const scrolled = window.scrollY;
    if (scrolled > 2) {
      setNavbar(true)
    }else {
      setNavbar(false)
    }
   }
   useEffect(() => {
    window.addEventListener('scroll', scrollNavbar);
    return () => {
      window.removeEventListener('scroll', scrollNavbar);
    };
  }, []);
  return (
    <>
      <Navbar expand="lg" className={`NavBar ${navbar ? "NavbarScroll" : "transparent" }`} fixed="top">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto Droop">
              <Nav.Link
                href="#home"
                className={`NavBarLinks ${click === "btn1" ? "Active" : " "}`}
                onClick={() => handelClick("btn1")}>
                Home
              </Nav.Link>
              <Nav.Link
                href="#link"
                className={`NavBarLinks ${click === 2 ? "Active" : " "}`}
                onClick={() => handelClick(2)}>
                Services
              </Nav.Link>
              <Nav.Link
                href="#link"
                className={`NavBarLinks ${click === 3 ? "Active" : " "}`}
                onClick={() => handelClick(3)}>
                Works
              </Nav.Link>
              <NavDropdown
                title="Blog"
                className={`NavBarLinks ${click === 4 ? "Active" : " "}`}
                onClick={() => handelClick(4)}
                id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link
                href="#link"
                className={`NavBarLinks ${click === 5 ? "Active" : " "}`}
                onClick={() => handelClick(5)}>
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavDora;
