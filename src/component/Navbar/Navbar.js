import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./style.css";

function Navbar() {
  return (
    <nav
      className="sidenav navbar navbar-vertical  fixed-left  navbar-expand-xs navbar-light bg-white"
      id="sidenav-main"
    >
      <div className="scrollbar-inner">
        {/* Brand */}
        <div className="sidenav-header  align-items-center">
          <Link to="/" className="navbar-brand">
            {/* <img
              src="/assets/img/brand/blue.png"
              className="navbar-brand-img"
              alt="..."
            /> */}
          </Link>
        </div>
        <div className="navbar-inner">
          {/* Collapse */}
          <div className="collapse navbar-collapse" id="sidenav-collapse-main">
            {/* Nav items */}
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  activeClassName="active_Nav"
                  to="/statistical"
                  className="nav-link-text nav-link "
                >
                  Statistical
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="active_Nav"
                  to="/productManagement"
                  className="nav-link-text nav-link "
                >
                  Product Management
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/categoryManagement"
                  className="nav-link"
                  activeClassName="active_Nav"
                >
                  Category Management
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/oderManagement"
                  className="nav-link"
                  activeClassName="active_Nav"
                >
                  Oder Management
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/userManagement"
                  className="nav-link"
                  activeClassName="active_Nav"
                >
                  User Management
                </NavLink>
              </li>
            </ul>
            {/* Divider */}
            <hr className="my-3" />
            {/* Heading */}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
