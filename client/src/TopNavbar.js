import React from "react";
import PropTypes from "prop-types";
import { Navbar, Nav, NavItem, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const TopNavbar = (props) => {
  let navItems = "";
  if(props.showNavItems) {
    navItems=(
      <div>
      <Link to="/secret" ><Navbar.Text id="list" style={{fontSize: "17", color: "#9A3014"}}>User Info</Navbar.Text></Link>
      {/*<Link to="/SecuredClass1"><Navbar.Text id="list" style={{fontSize: "17", color: "#9A3014"}}>1</Navbar.Text></Link>*/}
      {/*<Link to="/SecuredClass2"><Navbar.Text id="list" style={{fontSize: "17", color: "#9A3014"}}>2</Navbar.Text></Link>*/}
      {/*<Link to="/SecuredClass3"><Navbar.Text id="list" style={{fontSize: "17", color: "#9A3014"}}>3</Navbar.Text></Link>*/}
      <a  id="list" style={{float: "right", fontSize: "17", marginTop: "1.5%"}} onClick={props.onSignOut} bsSize="xsmall">Log Out</a>
      </div>
    );
  }
  return (
    <Navbar style={{borderBottomColor: "#9A3014", backgroundColor: "#C6CBCC"}} collapseOnSelect>
      <Navbar.Collapse>
        <Nav pullRight>
          <NavItem id="list">

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
