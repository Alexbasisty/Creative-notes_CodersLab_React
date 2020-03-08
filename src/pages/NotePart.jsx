import React, { Component } from "react";
import ToDoInputs from "../components/ToDoInputs";
import ToDoList from "../components/ToDoList";
import DoneList from "../components/DoneList";

class NotePart extends Component {
  deleteData = (id) => {
    const url = "http://localhost:3004/todo/";
    fetch(url + id, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
        .then(response => response.json())
        .then(data => {
          console.log('Success: ', data);
        })
        .catch(error => {
          console.log('Error: ', error);
        })
  };

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
              <h1 className="title is-2 has-text-primary">Tasks in progress</h1>
              <ToDoList deleteTasks={this.deleteData} />
            </div>
            <div className="column">
              <h1 className="title is-2 has-text-warning">Done tasks</h1>
              <DoneList deleteTasks={this.deleteData} />
            </div>
          </div>
        </section>
    );
  }
}

export default NotePart;