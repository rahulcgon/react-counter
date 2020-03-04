/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";

//stateless functional Component
const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Total itmes ={" "}
        <span className="badge-pill badge-info">{totalCounters}</span>
      </a>
    </nav>
  );
};

export default NavBar;
