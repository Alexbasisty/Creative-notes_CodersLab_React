import React, { Component } from "react";
import ShowMore from "./ShowMore";

class DoneList extends Component {
  state = {
    done: [],
  };

  componentDidMount() {
    fetch('http://localhost:3004/todo?status=done')
        .then(resp => resp.json())
        .then(data => {
          this.setState({
            done: data
          })
        })
  }

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
        .then(data => {
          console.log('Success: ', data);
        })
        .catch(error => {
          console.log('Error: ', error);
        })
  };

  render() {
    const { done } = this.state;
    return (
        done.map(task => (
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
                            onClick={() => this.props.deleteTasks(task.id)}
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