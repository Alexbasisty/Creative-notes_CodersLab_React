import React, { Component } from "react";


class Navigation extends Component {

  render() {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="logo"><a href="http://localhost:3000/notes">Logo</a></div>
          <div className="menu">Menu</div>
        </nav>
    );
  }
}
export default Navigation;