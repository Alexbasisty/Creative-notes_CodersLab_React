import React, { Component } from "react";
import { Link } from "react-router-dom";

import Navigation from "../components/Navigation";
import Banner from "../components/Banner";

class Hello extends Component {

  render() {
    return (
        <>
          <Link to="/">Back to start</Link>
          <Navigation />
          <Banner />
        </>
    )
  }
}

export default Hello;