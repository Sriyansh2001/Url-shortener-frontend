import React from "react";
import { Outlet } from "react-router";
import "./navLayout.css";

export default function NavLayout() {
  return (
    <div className="nav-layout-container">
      <div className="navbar-container">
        <div className="navbar-logo-container">
          <img
            className="navbar-logo-image"
            src="zinnia-high-resolution-logo.png"
            alt="logo"
          />
        </div>
      </div>
      <div className="nav-layout-body">
        <Outlet />
      </div>
    </div>
  );
}
