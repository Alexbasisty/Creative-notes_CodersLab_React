// src/components/NavBar.js

import React from "react";
import { useAuth0 } from "../react-auth0-spa";
import { Link } from "react-router-dom";

const NavBar = () => {
  const { isAuthenticated, logout, user } = useAuth0();

  return (
      <div>
        <nav className="navbar is-primary is-spaced" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a className="navbar-item has-text-black is-size-3 is-family-monospace" href="http://localhost:3000/">Crazy Notes</a>

            <a href="#" role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false"
               data-target="navbarBasicExample">
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </div>

          <div id="navbarBasicExample" className="navbar-menu">
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
                  {isAuthenticated && <a href="/"><img src={user.picture} alt="avatar" style={{
                    maxHeight: '3rem',
                    borderRadius: '30%'
                  }}/></a>}
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
  );
};

export default NavBar;
