import React, { Component } from "react";
import { Link } from "react-router-dom";

import Navigation from "../components/Navigation";

class Hello extends Component {

  render() {
    return (
        <>
          <Navigation />
          <h1>Hello</h1>
          <Link to="/">Back to start</Link>
        </>
    )
  }
}

export default Hello;