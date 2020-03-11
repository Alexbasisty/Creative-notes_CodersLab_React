import React, { Component } from "react";
import ShowMore from "./ShowMore";

class DoneList extends Component {
  state = {
    list: [],
  };

  componentDidMount() {
    fetch('http://localhost:3004/todo?status=done')
        .then(resp => resp.json())
        .then(data => {
          this.setState({
            list: data
          })
        })
  }

  refresh = id => {
    const { list } = this.state;
    let index = list.map(task => {
      return task.id;
    }).indexOf(id);
    list.splice(index, 1);

    this.setState({
      list: list
    })

  };

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
          this.refresh(id);

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
      status: 'inprogress'
    };
    fetch(url + id, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify(status)
    })
        .then(response => response.json())
        .then(task => {
          this.props.onCreateNewTask(task);
          this.refresh(id);
        })
        .catch(error => {
          console.log('Error: ', error);
        })
  };

  render() {
    const { list } = this.state;
    return (
        list.map(task => (
            <div
                key={task.id}
                className="tile is-vertical"
                style={{marginBottom: '15px'}}
                >
              <article className="tile is-child notification is-primary" style={{position: 'relative'}}>
                <p className="title">{task.title}</p>
                <div>
                      <ShowMore>
                        <button
                            className="delete is-medium"
                            style={{position: 'absolute', top: 0, right: 0}}
                            onClick={() => this.deleteData(task.id)}
                        />
                        <p className="is-family-monospace">{task.message}</p>
                        <button
                            className="button is-danger is-light"
                            style={{marginTop: '10px'}}
                            onClick={() => this.changeStatus(task.id, task.title, task.message)}>Back in progress</button>

                      </ShowMore>

                </div>
              </article>
            </div>
        ))
    );
  }
}

export default  DoneList