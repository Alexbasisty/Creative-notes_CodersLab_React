import React, { Component } from "react";

class ToDoList extends Component {
  state = {
    toDo: []
  };

  componentDidMount() {
    fetch(' http://localhost:3004/todo')
        .then(resp => resp.json())
        .then(data => {
          this.setState({
            toDo: data
          })
        })
  }

  render() {
    const { toDo } = this.state;
    return (
        toDo.map((task, index) => (<h3 key={index}>{task.title}</h3>))
    );
  }
}

export default ToDoList;