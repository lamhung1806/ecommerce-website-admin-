import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="sidenav navbar navbar-vertical  fixed-left  navbar-expand-xs navbar-light bg-white"
      id="sidenav-main"
    >
      <div className="scrollbar-inner">
        {/* Brand */}
        <div className="sidenav-header  align-items-center">
          <Link to="#" className="navbar-brand">
            <img
              src="/assets/img/brand/blue.png"
              className="navbar-brand-img"
              alt="..."
            />
          </Link>
        </div>
        <div className="navbar-inner">
          {/* Collapse */}
          <div className="collapse navbar-collapse" id="sidenav-collapse-main">
            {/* Nav items */}
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" href="examples/dashboard.html">
                  <i className="bi bi-chevron-double-right"></i>
                  <span className="nav-link-text">Dashboard</span>
                </a>
              </li>
              <li className="nav-item">
                <div className="nav-link" href="examples/icons.html">
                  <i className="ni ni-planet text-orange" />
                  <Link to="/ProductManagement" className="nav-link-text">
                    Product Management
                  </Link>
                </div>
              </li>
              <li className="nav-item">
                <div className="nav-link" href="examples/map.html">
                  <i className="ni ni-pin-3 text-primary" />
                  <Link to="/categoryManagement" className="nav-link-text">
                    Category Management
                  </Link>
                </div>
              </li>
              <li className="nav-item">
                <div className="nav-link" href="examples/map.html">
                  <i className="ni ni-pin-3 text-primary" />
                  <Link to="/oderManagement" className="nav-link-text">
                    Oder Management
                  </Link>
                </div>
              </li>
              <li className="nav-item">
                <Link
                  to="userManagement"
                  className="nav-link"
                  href="examples/tables.html"
                >
                  <i className="ni ni-bullet-list-67 text-default" />
                  <span className="nav-link-text">User Management</span>
                </Link>
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
