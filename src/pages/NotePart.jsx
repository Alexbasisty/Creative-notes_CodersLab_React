import React, { Component } from "react";
import ToDoInputs from "../components/ToDoInputs";
import ToDoList from "../components/ToDoList";
import DoneList from "../components/DoneList";

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
              <h1>To Do</h1>
              <ToDoList />
            </div>
            <div className="column">
              Done
              <DoneList />
            </div>
          </div>
        </section>
    );
  }
}

export default NotePart;