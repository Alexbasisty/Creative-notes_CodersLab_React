import React, { Component } from "react";

class ToDoInputs extends Component {
  state = {
    title: '',
    message: ''
  };

  handleSubmit = e => {
    e.preventDefault();

    const { title, message } = this.state;
    const task = {
      ...this.state,
      status: 'inprogress'
    };

    if(title.length > 0 && message.length > 0) {
      fetch('http://localhost:3004/todo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
      })
          .then(resp => resp.json())
          .then(task => {
            this.props.onCreateNewTask(task);
            this.setState({
              title: '',
              message: ''
            })
          })
          .catch(error => {
            console.log('Error: ', error);
          })
    }
  };

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  render() {
    const { title, message } = this.state;

    return (
        <div className="field">
          <form>
            <label className="label">New task title</label>
            <div className="control">
              <input className="input" name="title" type="text" onChange={this.handleInput} placeholder="task title" value={title}/>
            </div>
            <div className="field">
              <label className="label">Message</label>
              <div className="control">
                <textarea className="textarea" name="message" onChange={this.handleInput} placeholder="Textarea" value={message} rows="10"/>
              </div>
            </div>
            <div className="field is-grouped">
              <div className="control">
                <button className="button is-link" type="submit" onClick={this.handleSubmit}>Add</button>
              </div>
              <div className="control">
                <button className="button is-link is-light" onClick={e => {
                      e.preventDefault();
                      this.setState({
                        title: '',
                        message: ''
                  })}}>Cancel</button>
              </div>
            </div>
          </form>
        </div>
    );
  }
}

export default ToDoInputs;