import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

import LoginModal from "./login-modal";
import { NavbarWrapper } from "../styled-components/navbar";

import { auth } from "../config/firebase";
import { CATEGORIES } from "../data";

const Header = ({ currentUser }) => {
  const [categories, setCategories] = useState(CATEGORIES);
  const [isOpen, setIsOpen] = useState(false);

  // useEffect(() => {
  //   console.log(currentUser)
  // }, [currentUser])

  const toggleNavbar = () => setIsOpen(!isOpen);

  return (
    <header className="bg-white">
      <Container className="px-0 px-lg-3">
        <NavbarWrapper>
          <Navbar
            color="white"
            light
            expand="lg"
            fixed="top"
            className="py-3 px-4 px-sm-5"
          >
            <NavbarBrand tag={Link} to="/">
              <span className="font-weight-bold text-uppercase text-dark">
                Kimystore
              </span>
            </NavbarBrand>

            <NavbarToggler type="button" onClick={toggleNavbar}></NavbarToggler>
            <Collapse isOpen={isOpen} navbar>
              <Nav navbar className="mr-auto">
                <NavItem>
                  <NavLink tag={Link} to="/">
                    Home
                  </NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Shop
                  </DropdownToggle>
                  <DropdownMenu>
                    {categories.map(({ id, routeName, title }) => (
                      <DropdownItem tag={Link} to={`/${routeName}`} key={id}>
                        {title}
                      </DropdownItem>
                    ))}
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
              <Nav navbar className="ml-auto">
                <NavItem>
                  <NavLink tag={Link} to="#">
                    <i className="fas fa-dolly-flatbed mr-1 text-gray"></i>
                    Cart
                    <small className="text-gray ml-1">(2)</small>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="#">
                    <i className="far fa-heart mr-1"></i>
                    <small className="text-gray">(0)</small>
                  </NavLink>
                </NavItem>
                {currentUser ? (
                  <NavItem>
                    <NavLink
                      style={{ cursor: "pointer" }}
                      onClick={ () => auth.signOut() }
                    >
                      <i className="fas fa-user-alt mr-1 text-gray"></i>
                      Logout
                    </NavLink>
                  </NavItem>
                ) : (
                  <LoginModal />
                )}
              </Nav>
            </Collapse>
          </Navbar>
        </NavbarWrapper>
      </Container>
    </header>
  );
};

export default Header;
