// src/components/NavBar.js

import React, {useState} from "react";
import { useAuth0 } from "../react-auth0-spa";
import { Link } from "react-router-dom";

const NavBar = () => {
  const { isAuthenticated, logout, user } = useAuth0();
  const [ isActive, setActive ] = useState('');

  return (
      <div>
        <nav className="navbar is-primary is-spaced" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a className="navbar-item has-text-black is-size-3 is-family-monospace" href="http://localhost:3000/">Crazy Notes</a>

            <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false"
            onClick={() => {
              if(isActive === '') {
                setActive('is-active')
              }else {
                setActive('');
              }
            }}>
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </div>

          <div className={`navbar-menu ${isActive}`}>
            <div className="navbar-start">
               {isAuthenticated && (
   <div className="navbar-item">
            <Link  to="/">Home</Link>&nbsp;
           </div>
)}
              {isAuthenticated && (
                  <div className="navbar-item">
                    <Link to="/profile">Profile</Link>
                  </div>
              )}

              <div className="navbar-item has-dropdown is-hoverable">
                <a href="/" className="navbar-link">
                  More
                </a>

                <div className="navbar-dropdown">
                  <a href="/" className="navbar-item">
                    About
                  </a>
                  <a href="/" className="navbar-item">
                    Jobs
                  </a>
                  <a href="/" className="navbar-item">
                    Contact
                  </a>
                  <hr className="navbar-divider" />
                    <a href="/" className="navbar-item">
                      Report an issue
                    </a>
                </div>
              </div>
            </div>

            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  {isAuthenticated && <button className="button is-warning" onClick={() => logout()}>
                    <strong>Logout</strong>
                  </button>}
                  {isAuthenticated && <Link to="/profile"><img src={user.picture} alt="avatar" style={{
                    maxHeight: '3rem',
                    borderRadius: '30%'
                  }}/></Link>}
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
  );
};

export default NavBar;
