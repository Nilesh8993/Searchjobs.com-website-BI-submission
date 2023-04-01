import React from "react";

import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>SearchJobs.com</h1>
      <NavLink to="/" exact={true}>
        Dashboard
      </NavLink>
      {/* <NavLink to="/contact" exact={true}>
        Contact page
      </NavLink> */}
    </header>
  );
};

export default Header;
