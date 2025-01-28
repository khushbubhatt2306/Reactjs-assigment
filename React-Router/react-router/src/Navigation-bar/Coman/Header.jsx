import React from "react";
import { Link, NavLink } from "react-router";

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            Website
          </NavLink>
          <Link className="nav-link" aria-current="page" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/about">
            About
          </Link>
          <Link className="nav-link" to="/contact">
            Contact us
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Header;
