// Libraries
import React from "react";
import { Link } from "react-router-dom";

// Styled Components
import { Nav, NavLink, Register, Login } from "./Styles/HeaderStyled";

const Header = ({ hidden }) => {
  return (
    <Nav>
      <Link to="/" className="logo-div">
        <img src="/images/login-logo.svg" alt="" />
      </Link>

      <NavLink>
        {!hidden && (
          <>
            <Link to="/aboutus" className="icon-div">
              <i className="fa-solid fa-info"></i>
              <span>About</span>
            </Link>

            <Link to="/login" className="icon-div">
              <i className="fa-solid fa-bullhorn"></i>
              <span>Announcements</span>
            </Link>

            <Link to="/login" className="icon-div">
              <i className="fa-solid fa-chalkboard-user"></i>
              <span>Explore</span>
            </Link>

           
            <Link to="/contact" className="icon-div">
              <i className="fa-solid fa-user-group"></i>
              <span>Contact</span>
            </Link>
            <div className="divider" />
          </>
        )}

        {/* Login/Register Button */}
        <Register className="register" to="/join-now">
          Join now
        </Register>
        <Login to="/login">Sign in</Login>
      </NavLink>
    </Nav>
  );
};

export default Header;
