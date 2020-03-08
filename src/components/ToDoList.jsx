import React, { Component } from "react";

class ToDoList extends Component {
  state = {
    toDo: [],
    visible: false
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

  changeSize = (task) => {

    this.setState({
      visible: true
    })
  };

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
                onClick={() => this.changeSize(task)}
            >
              <article className="tile is-child notification is-warning" style={{position: 'relative'}}>
                <p className="title">{task.title}</p>
                <div>
                  {!this.state.visible ? '' : (
                      <>
                        <a
                            className="delete is-medium"
                            style={{position: 'absolute', top: 0, right: 0}}
                            onClick={() => this.deleteData(task.id)}
                        />
                        <p className="is-family-monospace">{task.message}</p>
                        <button
                            onClick={() => this.changeStatus(task.id, task.title, task.message)}
                            className="button is-danger is-light"
                            style={{marginTop: '10px'}}>Done!</button>
                      </>
                  )}
                </div>
              </article>
            </div>
        ))
    );
  }
}

export default ToDoList;