import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from 'react-router-dom';
import feather from 'feather-icons';
import $ from 'jquery';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  useEffect(() => {
    feather.replace(); // this will replace all data-feather with SVGs
  }, []);

  const handleNav = () => {
    setNav(!nav);
    $('body').toggleClass('sidebar-collapse');
  };

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  const toggleUserMenu = () => {
    setShowUserMenu(!showUserMenu);
  };

  return (
    <header className="main-header">
      <div className="d-flex align-items-center logo-box justify-content-start">
        <Link to="/" className="logo">
          <div className="logo-mini w-50">
            <span className="light-logo"><img src="../images/logo-letter.png" alt="logo" /></span>
            <span className="dark-logo"><img src="../images/logo-letter.png" alt="logo" /></span>
          </div>
          <div className="logo-lg">
            <span className="light-logo"><img src="../images/logo-light-text.png" alt="logo" /></span>
            <span className="dark-logo"><img src="../images/logo-light-text.png" alt="logo" /></span>
          </div>
        </Link>
      </div>

      <nav className="navbar navbar-static-top">
        <div className="app-menu">
          <ul className="header-megamenu nav">
            <li className="btn-group nav-item">
              <Link onClick={handleNav} className="waves-effect waves-light nav-link push-btn btn-primary-light">
                <i data-feather="align-left"></i>
              </Link>
            </li>
            <li className="btn-group d-lg-inline-flex d-none">
              <div className="app-menu">
                <div className="search-bx mx-5">
                  <form>
                    <div className="input-group">
                      <input type="search" className="form-control" placeholder="Search" aria-label="Search" aria-describedby="button-addon3" />
                      <div className="input-group-append">
                        <button className="btn" type="submit" id="button-addon3"><i data-feather="search"></i></button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div className="navbar-custom-menu r-side">
          <ul className="nav navbar-nav">
          
        
           

            <li className="dropdown user user-menu">
              <Link onClick={toggleUserMenu} to="/user/profile" className="waves-effect waves-light dropdown-toggle w-auto l-h-12 bg-transparent py-0 no-shadow flex items-center justify-center" title="User">
                <img src={require("../Assets/images/avatar/avatar-1.png")} className="avatar rounded-10 bg-primary-light h-40 w-40" alt="" />
              </Link>
              {/* {showUserMenu && (
                <ul className="dropdown-menu animated flipInX">
                  <li className="user-body">
                    <Link className="dropdown-item" to="/profile"><i className="ti-user text-muted me-2 flex items-center"></i> Profile</Link>
                    <Link className="dropdown-item" to="/mailbox"><i className="ti-settings text-muted me-2 flex items-center"></i> Email</Link>
                    <div className="dropdown-divider"></div>
                    <Link className="dropdown-item" to="/login"><i className="ti-lock text-muted me-2 flex items-center"></i> Logout</Link>
                  </li>
                </ul>
              )} */}
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
