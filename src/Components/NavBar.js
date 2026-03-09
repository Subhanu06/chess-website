import React from "react";
import "./navbar.css";
import Logo from "../assets/LOGO.png"
import {Link, useLocation} from 'react-router-dom'
function NavBar() {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path ? 'nav-link active' : 'nav-link';
  };

  const isDropdownActive = (paths) => {
    return paths.includes(location.pathname) ? 'nav-link dropdown-toggle active' : 'nav-link dropdown-toggle';
  };

  return (
    <div className="custom_navButtom">
      <nav className="mb-4 navbar navbar-expand-lg navbar-dark fixed-top cyan">
        <Link className="navbar-brand font-bold" to="/">
          <img className="logo" src={Logo} alt="logo"/>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent-4"
          aria-controls="navbarSupportedContent-4"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent-4">
          <ul className="navbar-nav custom_margin">
            <li className="nav-item">
              <Link className={isActive('/')} to="/">
                <i className="fa fa-home" aria-hidden="true"></i> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className={isActive('/faculty')} to="/faculty">
                <i className="fa fa-user-plus" aria-hidden="true"></i> Faculty
              </Link>
            </li>

            <li className="nav-item">
              <Link className={isActive('/alumni')} to="/alumni">
                <i className="fa fa-graduation-cap" aria-hidden="true"></i> Alumni
              </Link>
            </li>

            <li className="nav-item">
              <Link className={isActive('/member')} to="/member">
                <i className="fa fa-users" aria-hidden="true"></i> Member
              </Link>
            </li>

            <li className="nav-item dropdown">
              <button
                className={isDropdownActive(['/chemeinsider', '/achatwithchess'])}
                id="navbarDropdownMenuLink-4"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style={{background: 'none', border: 'none', color: 'inherit', cursor: 'pointer'}}
              >
                Preview
              </button>
              <div
                className="dropdown-menu dropdown-menu-right dropdown-cyan"
                aria-labelledby="navbarDropdownMenuLink-4"
              >
                <Link className="dropdown-item" to="/chemeinsider">
                Chem-E-Insider
                </Link>
                <Link className="dropdown-item" to="/achatwithchess">
                A Chat With ChESS
                </Link>
              </div>
            </li>

            <li className="nav-item dropdown">
              <button
                className={isDropdownActive(['/chemKriti2021', '/chemKriti2022', '/chemKriti2025', '/more'])}
                id="navbarDropdownMenuLink-4"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style={{background: 'none', border: 'none', color: 'inherit', cursor: 'pointer'}}
              >
                Events
              </button>
              <div
                className="dropdown-menu dropdown-menu-right dropdown-cyan"
                aria-labelledby="navbarDropdownMenuLink-4"
              >
                <Link className="dropdown-item" to="/chemKriti2021">
                ChemKriti 2021
                </Link>
                <Link className="dropdown-item" to="/chemKriti2022">
                ChemKriti 2022
                </Link>
                <Link className="dropdown-item" to="/chemKriti2025">
                ChemKriti 2025
                </Link>
                <Link className="dropdown-item" to="/more">
                More Events
                </Link>
              </div>
            </li>

            <li className="nav-item">
              <Link className={isActive('/blogs')} to="/blogs">
                <i className="fa fa-blog"></i> Blogs
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
