import React, { Component } from "react";
import ToDoInputs from "../components/ToDoInputs";
import ToDoList from "../components/ToDoList";
import DoneList from "../components/DoneList";
import Footer from "../components/Footer";

class NotePart extends Component {
  state = {
    list: []
  };

  componentDidMount() {
    fetch(' http://localhost:3004/todo?status=inprogress')
        .then(resp => resp.json())
        .then(data => {
          this.setState({
            list: data
          })
        })
  }

  appendNewTask = (task) => {
    this.setState({
      list: [
        ...this.state.list,
        task,
      ],
    });
  };

  render() {
    return (
        <section className="hero is-light is-fullheight-with-navbar" style={{padding: '20px'}}>
          <div className="columns">
            <div className="column is-one-quarter">
              <ToDoInputs onCreateNewTask={this.appendNewTask} />
            </div>
            <div className="column is-1">
              {/*to split inputs and lists*/}
            </div>
            <div className="column">
              <h1 className="title is-2 has-text-primary">Tasks in progress</h1>
              <ToDoList list={this.state.list} />
            </div>
            <div className="column">
              <h1 className="title is-2 has-text-warning">Done tasks</h1>
              <DoneList onCreateNewTask={this.appendNewTask}/>
            </div>
          </div>
          <Footer />
        </section>
    );
  }
}

export default NotePart;