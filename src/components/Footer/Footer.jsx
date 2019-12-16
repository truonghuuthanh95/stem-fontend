
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
              <NavLink href="#">About Us</NavLink>
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
              Trương Hữu Thành
            </a>{" "}
           
          </div>
        </Container>
      </footer>
    );
  }
}

export default Footer;
