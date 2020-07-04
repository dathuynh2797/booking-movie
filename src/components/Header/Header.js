import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div>Logo</div>
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
