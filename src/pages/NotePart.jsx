import React, { Component } from "react";
import ToDoInputs from "../components/ToDoInputs";
import ToDoList from "../components/ToDoList";
import DoneList from "../components/DoneList";
import Footer from "../components/Footer";

class NotePart extends Component {
  state = {
    list: []
  };

  fetchData = () => {
    fetch(' http://localhost:3004/todo')
        .then(resp => resp.json())
        .then(data => {
          this.setState({
            list: data
          })
        })
  };
  componentDidMount() {
    this.fetchData();
  }

  deleteData = (id) => {
    const url = "http://localhost:3004/todo/";

    return fetch(url + id, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
        .then(response => response.json())
        .then(data => {
          this.fetchData();
          console.log('Success: ', data);
        })
        .catch(error => {
          console.log('Error: ', error);
        })
  };

  appendNewTask = (task) => {
    this.setState({
      list: [
        ...this.state.list,
        task,
      ],
    });
  };

  render() {
    const inProgressTasks = this.state.list.filter((task) => {
      return task.status === 'inprogress'
    });
    const doneTasks = this.state.list.filter((task) => {
      return task.status === 'done'
    });

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
              <ToDoList
                  onDelete={this.deleteData}
                  list={inProgressTasks} />
            </div>
            <div className="column">
              <h1 className="title is-2 has-text-warning">Done tasks</h1>
              <DoneList
                  onDelete={this.deleteData}
                  list={doneTasks}
                  onCreateNewTask={this.appendNewTask}/>
            </div>
          </div>
          <Footer />
        </section>
    );
  }
}

export default NotePart;