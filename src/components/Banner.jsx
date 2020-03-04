import React, { Component } from "react";
import { Link } from "react-router-dom";

class Banner extends Component {

  render() {
    const { user } = this.props;
    return (
        <section className="hero is-light is-bold is-large" style={{height: '90vh'}}>
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                Leave your note, {user}
              </h1>
              <h2 className="subtitle">Here You can create Your To Do list ;-)</h2>
            </div>
          </div>
          <div style={{
            padding: '30px'
          }}>
            <Link to="/notepart"><button className="button is-success is-light">Start to plan</button></Link>
          </div>
        </section>
    );
  }
}

export default Banner;