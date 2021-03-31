import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import "./Navigation.scss";

function Navigation() {
  return (
    <Nav tabs style={{ position: "absolute", top: 0 }}>
      <NavItem>
        <NavLink href="/movies" active>
          Best Movies
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/mymovies">My Movies</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/myreviews">My Reviews</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/myprofile">My Profile</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/settings">Settings</NavLink>
      </NavItem>
    </Nav>
  );
}

export default Navigation;
