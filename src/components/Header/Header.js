import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="">
          <NavLink to="/" className="logo">
            Booking Movie
          </NavLink>
        </div>
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
        <div>
          <NavLink className="nav-items" to="/login">
            Log in
          </NavLink>
        </div>
      </div>
    );
  }
}

// import React from "react";
// import { NavLink } from "react-router-dom";

// const Header = () => {
//   return (
//     <div className="header">
//       <NavLink to="/" className="logo">
//         Booking Movie
//       </NavLink>
//       <div className="nav-content with-indicator">
//         <NavLink className="nav-items" to="/">
//           Link
//         </NavLink>
//         <NavLink className="nav-items" to="/">
//           Link
//         </NavLink>
//         <NavLink className="nav-items" to="/">
//           Link
//         </NavLink>
//       </div>
//       <div>Sign In</div>
//     </div>
//   );
// };

// export default Header;
