// src/components/NavBar.js

import React from "react";
import { useAuth0 } from "../react-auth0-spa";
import { Link } from "react-router-dom";

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
      <div style={{
        display: "flex",
        justifyContent: 'space-between'
      }}>
        {!isAuthenticated && loginWithRedirect()}
        {isAuthenticated && (
            <span>
          <Link to="/">Home</Link>&nbsp;
              <Link to="/profile">Profile</Link>
        </span>
        )}
        {isAuthenticated && <button onClick={() => logout()}>Log out</button>}

      </div>
  );
};

export default NavBar;