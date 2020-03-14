import React, { Component } from "react";
import ShowMore from "./ShowMore";

class ToDoList extends Component {

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