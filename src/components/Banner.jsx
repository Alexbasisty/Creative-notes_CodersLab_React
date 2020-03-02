import React, { Component } from "react";

class Banner extends Component {

  render() {

    return (
        <div className="banner">
          <h1 className="banner-title">
            Plan your <span>life</span>
          </h1>
          <p className="banner-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptatum?
          </p>
        </div>
    );
  }
}

export default Banner;