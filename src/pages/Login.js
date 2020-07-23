import React from "react";

export const Login = () => {
  return (
    <div className="login-page">
      <div className="login-content">
        <h2>Booking Movie</h2>
        <div className="login-form">
          <div className="input-field">
            <span>Username</span>
            <input name="userName" type="text" placeholder="example@xyz.com" />
          </div>
          <div className="input-field">
            <span>Password</span>
            <input name="password" type="password" placeholder="*******" />
          </div>
          <button className="btn-login">Login</button>
        </div>
      </div>
    </div>
  );
};
