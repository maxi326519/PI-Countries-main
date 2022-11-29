import React from "react";
import { Link } from "react-router-dom";

import "./Nav.css";

export default class Nav extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <h1 className="logo">Countries App</h1>
          <ul>
            <li className="options"><Link to="/countries">Home</Link></li>
            <li className="options"><Link to="/activities">Add Activity</Link></li>
            <li className="options"><Link to="/countries">About</Link></li>
          </ul>
        </nav>
      </div>
    );
  }
}