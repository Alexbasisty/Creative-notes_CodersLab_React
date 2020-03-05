import React, { Component } from "react";

class ToDoInputs extends Component {

  render() {
    return (
        <div className="field">
          <form>
            <label className="label">New task title</label>
            <div className="control">
              <input className="input" type="text" placeholder="task title" />
            </div>
            <div className="field">
              <label className="label">Message</label>
              <div className="control">
                <textarea className="textarea" placeholder="Textarea" rows="10"/>
              </div>
            </div>
            <div className="field is-grouped">
              <div className="control">
                <button className="button is-link">Add</button>
              </div>
              <div className="control">
                <button className="button is-link is-light">Cancel</button>
              </div>
            </div>
          </form>
        </div>
    );
  }
}

export default ToDoInputs;