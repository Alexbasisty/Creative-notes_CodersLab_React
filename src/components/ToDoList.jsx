import React, { Component } from "react";
import ShowMore from "./ShowMore";

class ToDoList extends Component {
  state = {
    toDo: [],
  };

  componentDidMount() {
    fetch(' http://localhost:3004/todo?status=inprogress')
        .then(resp => resp.json())
        .then(data => {
          this.setState({
            toDo: data
          })
        })
  }

  changeStatus = (id, title, message) => {
    const url = "http://localhost:3004/todo/";
    const status = {
      title: title,
      message: message,
      status: 'done'
    };
    fetch(url + id, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify(status)
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
    const { toDo } = this.state;
    return (
        toDo.map(task => (
            <div
                key={task.id}
                className="tile is-vertical"
                style={{marginBottom: '15px'}}
            >
              <article className="tile is-child notification is-warning" style={{position: 'relative'}}>
                <p className="title">{task.title}</p>
                <div>
                      <ShowMore>
                        <button
                            className="delete is-medium"
                            style={{position: 'absolute', top: 0, right: 0}}
                            onClick={() => this.props.deleteTasks(task.id)}
                        />
                        <p className="is-family-monospace">{task.message}</p>
                        <button
                            onClick={() => this.changeStatus(task.id, task.title, task.message)}
                            className="button is-danger is-light"
                            style={{marginTop: '10px'}}>Done!</button>
                      </ShowMore>
                </div>
              </article>
            </div>
        ))
    );
  }
}

export default ToDoList;