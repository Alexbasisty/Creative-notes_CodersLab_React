import React, { Component } from "react";


class Navigation extends Component {

  render() {
    return (
        <header className="page-header">
          <div className="container">

            <a href="/" className="page-logo">
              Creative Notes
            </a>

            <nav className="page-nav">
              <ul className="page-nav-list">
                <li><a href="/">Strona główna</a></li>
                <li><a href="/">Informacje</a></li>
                <li><a href="/">O akcji</a></li>
                <li><a href="/">Kontakt</a></li>
              </ul>
            </nav>
          </div>
        </header>
    );
  }
}
export default Navigation;