import React from "react";
import PropTypes from "prop-types";
import { Navbar, Nav, NavItem, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const TopNavbar = (props) => {
  let navItems = "";
  if(props.showNavItems) {
    navItems=(
      <div>
        <Link to="/secret" ><Navbar.Text style={{color: "#007BFF"}}>Secret</Navbar.Text></Link>
        <Link to="/SecuredClass1"><Navbar.Text style={{color: "#007BFF"}}>1</Navbar.Text></Link>
        <Link to="/SecuredClass2"><Navbar.Text style={{color: "#007BFF"}}>2</Navbar.Text></Link>
        <Link to="/SecuredClass3"><Navbar.Text style={{color: "#007BFF"}}>3</Navbar.Text></Link>
      </div>
    );
  }
  return (
    <Navbar  collapseOnSelect>
      <Navbar.Collapse >
        <Nav pullRight >
          <NavItem>
          <Button style={{color: "#007BFF"}} onClick={props.onSignOut} bsSize="xsmall">Log Out</Button>
          {/*<NavItem onClick={props.onSignOut}>Sign Out</NavItem>*/}
          </NavItem>
        </Nav>
        {navItems}
      </Navbar.Collapse>
    </Navbar>
  );
};

TopNavbar.propTypes = {
  onSignOut: PropTypes.func.isRequired,
  showNavItems: PropTypes.bool.isRequired
};

export default TopNavbar;
