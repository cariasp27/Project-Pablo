import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg">
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/cariasp27">Paul "Pablo" Carias</a>
      <Link to="/" className="btn btn-link">
                    <span className="text-secondary">Home</span>
                </Link>
    </nav>
  );
}

export default Nav;
