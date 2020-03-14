import React, { Component } from "react";
import ShowMore from "./ShowMore";

class ToDoList extends Component {

  // refresh = (id) => {
  //   const { list } = this.state;
  //   let index = list.map(x => {
  //     return x.id;
  //   }).indexOf(id);
  //   list.splice(index, 1);
  //   console.log(list);
  //   this.setState({
  //     list: list
  //   })
  // };



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
          // this.refresh(id);
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
              <article className="tile is-child notification is-warning" style={{position: 'relative'}}>
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
                            onClick={() => this.props.onChangeStatus(task.id, task.title, task.message, 'done')}
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