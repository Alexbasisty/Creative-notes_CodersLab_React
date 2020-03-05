import React, { Component } from "react";
import ToDoInputs from "../components/ToDoInputs";

class NotePart extends Component {

  render() {
    return (
        <section className="hero is-light is-fullheight-with-navbar" style={{padding: '20px'}}>
          <div className="columns">
            <div className="column is-one-quarter">
              <ToDoInputs />
            </div>
            <div className="column is-1">
              {/*to split inputs and lists*/}
            </div>
            <div className="column">
              To Do
            </div>
            <div className="column">
              Done
            </div>
          </div>
        </section>
    );
  }
}

export default NotePart;