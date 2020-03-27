import React from "react";
import "./Nav.scss";
import { Link } from 'react-router-dom';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Home from '../login/Home';

const logo = <FontAwesomeIcon icon={faHome}/>

function Nav() {

  const navStyle = {
    color: 'white'
  }

    return (

        <nav>
            <ul className="nav-links">
              <Link style={navStyle} to='/home'>
                <i class="fas fa-house-user">{logo}</i>

              </Link>
              <Link style={navStyle} to='/profile'>
                <li>Profile</li>
              </Link>
              <Link style={navStyle}>
                <li>SignOut</li>
              </Link>
            </ul>
      </nav>
    );
  }


export default Nav;
