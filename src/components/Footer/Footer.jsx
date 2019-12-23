
import React from "react";

// reactstrap components
import { Container, Nav, NavItem, NavLink } from "reactstrap";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <Container fluid>
          <Nav>
            {/* <NavItem>
              <NavLink href="#">Creative Tim</NavLink>
            </NavItem> */}
            <NavItem>
              <NavLink href="#"><img alt="unicef" height="50" width="50" src={require("../../assets/img/unicef.png")} /></NavLink>
            </NavItem>
            {/* <NavItem>
              <NavLink href="#">Blog</NavLink>
            </NavItem> */}
          </Nav>
          <div className="copyright">
            © {new Date().getFullYear()} made by{" "}
            <a
              href="#"
              rel="noopener noreferrer"
              target="_blank"
            >
              GDTrH Sớ GD&ĐT TP.HCM
            </a>{" "}
           
          </div>
        </Container>
      </footer>
    );
  }
}

export default Footer;
