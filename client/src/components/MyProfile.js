import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";

const MyProfile = () => {
  return (
    <div>
      <Nav tabs style={{ position: "absolute", top: 0 }}>
        <NavItem>
          <NavLink href="/movies">Best Movies</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/mymovies">My Movies</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/myreviews">My Reviews</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/myprofile" active>
            My Profile
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/settings">Settings</NavLink>
        </NavItem>
      </Nav>
      <h1>My Profile</h1>
    </div>
  );
};

export default MyProfile;
