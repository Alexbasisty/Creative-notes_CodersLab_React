import React, { Component } from "react";

class Footer extends Component {

  render() {
    return (
        <footer className="footer">
          <div className="has-text-centered">
            <p>
              <strong>Crazy notes</strong> by <a target="_blank" rel="noopener noreferrer" href="https://github.com/Alexbasisty">Alex Basysty</a>. This page is <strong>open source</strong>.
              Noticed a typo? Or something unclear? <a target="_blank" rel="noopener noreferrer" href="https://github.com/Alexbasisty/Creative-notes_CodersLab_React">Improve this page on GitHub</a>.
            </p>
          </div>
        </footer>
    );
  }
}

export default Footer;