import React, { Component } from "react";

class Banner extends Component {

  render() {
    const { user } = this.props;
    return (
        <section className="hero is-light is-bold is-large">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                Plan your life, {user}
              </h1>
              <h2 className="subtitle">
                Large subtitle
              </h2>
            </div>
          </div>
        </section>
    );
  }
}

export default Banner;