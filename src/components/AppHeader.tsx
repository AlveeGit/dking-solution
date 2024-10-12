/* eslint-disable @typescript-eslint/no-explicit-any */
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/images/logo.png";

const AppHeader = ({
  viewToAboutUs,
  viewToContact,
  viewToHome,
  viewToClients,
  viewToService,
}: any) => {
  return (
    <Navbar
      fixed="top"
      expand="lg"
      className="bg-black py-2 align-items-start"
    >
      <Container>
        <div className="d-flex justify-content-between">
          <div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Brand className="color-white" href="/">
              <img src={logo} className="w-200px img-fluid" alt="" />
            </Navbar.Brand>
          </div>
        </div>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="p-3">
            <Nav.Link onClick={viewToHome}>Home</Nav.Link>
            <Nav.Link onClick={viewToAboutUs}>About Us</Nav.Link>
            <Nav.Link onClick={viewToService}>Services</Nav.Link>
            <Nav.Link onClick={viewToClients}>Clients</Nav.Link>
            <Nav.Link onClick={viewToContact}>Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <button className="fs-12 rounded-pill discover-btn">Discover</button>
      </Container>
    </Navbar>
  );
};
export default AppHeader;
