import React from "react";
import { Link } from "react-router-dom";

import "./Nav.css";
import countries from '../../assets/svg/countries.svg'
import flag from '../../assets/svg/flag.svg'

export default class Nav extends React.Component {
  render() {
    return (
      <div className="nav-container">
        <nav>
          <div className="logo-container toRight">
            <div className="logo">
              <Link to="/">
                <img className='logo-img move' src={ countries } alt='logo'/>
                <span>Countr</span>
                <img className='logo-img text-img' src={ flag } alt='logo'/>
                <span className="text-position">es</span>
              </Link>
            </div>
          </div>
          <ul className="toLeft">
            <li className="options"><Link to="/countries/page/1">Home</Link></li>
            <li className="options"><Link to="/add-activity">Add Activity</Link></li>
{/*             <li className="options"><Link to="/about">About</Link></li> */}
          </ul>
        </nav>
      </div>
    );
  }
}