import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <details>
      <summary></summary>
      <nav className="menu">
        <Link to="/">Home</Link>
        <Link to="about">About</Link>
        <Link to="library">Library</Link>
        <Link to="/">Logout</Link>
      </nav>
    </details>
  );
}

export default NavBar;
