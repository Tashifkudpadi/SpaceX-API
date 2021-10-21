import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./navbar.module.css";

function Navbar() {
  return (
    <div className={classes.nav}>
      <div className={classes.left}>
        <h3>SpaceX</h3>
      </div>
      <div className={classes.right}>
        <li>
          <NavLink to="/upcoming" activeClassName="active">
            Upcoming Launches
          </NavLink>
        </li>
        <li>
          <NavLink to="/past" activeClassName="active">
            Past Launches
          </NavLink>
        </li>
        <li>
          <NavLink to="/latest" activeClassName="active">
            Latest Launches
          </NavLink>
        </li>
        <div className={classes.icon}>
          <i class="fas fa-satellite"></i>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
