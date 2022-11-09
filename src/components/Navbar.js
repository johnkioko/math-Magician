import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

const Navbar = () => (
  <nav className="nav">
    <Link to="/" className="site-title">
      Math Magicians
    </Link>
    <ul>
      <Link to="/">home</Link>
      <span>|</span>
      <Link to="/Calculator">Calculator</Link>
      <span>|</span>
      <Link to="/Quote">Quote</Link>
    </ul>
  </nav>
);

export default Navbar;
