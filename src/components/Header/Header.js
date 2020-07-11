import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <NavLink to="/" className="logo">
        Booking Movie
      </NavLink>
      <div className="nav-content with-indicator">
        <NavLink className="nav-items" to="/">
          Link
        </NavLink>
        <NavLink className="nav-items" to="/">
          Link
        </NavLink>
        <NavLink className="nav-items" to="/">
          Link
        </NavLink>
      </div>
      <div>Sign In</div>
    </div>
  );
};

export default Header;
