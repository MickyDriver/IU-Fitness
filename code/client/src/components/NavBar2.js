import { useState } from "react";
import { Link } from "react-router-dom";
import doc2 from "../assets/img/iulogo2.png";
import '../assets/css/Nav.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  Button,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import Booking from "./Booking";

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="color-nav" light expand="md" fixed="top">
      <img src={doc2} alt="iulogo" width="2%" height="auto" />
        <NavbarBrand href="/">IU Fitness</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <Link to="/listAll">
              <Button className="custom-button" color="danger">
                List All events
              </Button>
            </Link>
            <Booking className="BookApp" />
                  <UncontrolledDropdown nav inNavbar>
                <DropdownToggle className="custom-nav" nav caret>
                  Account
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                  <NavLink href="/signIn">Edit Account</NavLink>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                  <NavLink href="/payment">Make Payment</NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
