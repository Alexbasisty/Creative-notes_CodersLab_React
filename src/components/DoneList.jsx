import React, { Component } from "react";
import ShowMore from "./ShowMore";

class DoneList extends Component {



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


  render() {
    const { list } = this.props;
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
                            onClick={() => this.props.onDelete(task.id)}
                        />
                        <p className="is-family-monospace">{task.message}</p>
                        <button
                            className="button is-danger is-light"
                            style={{marginTop: '10px'}}
                            onClick={() => this.props.onChangeStatus(task.id, task.title, task.message, 'inprogress')}>Back in progress</button>
                      </ShowMore>
                </div>
              </article>
            </div>
        ))
    );
  }
}

export default  DoneList