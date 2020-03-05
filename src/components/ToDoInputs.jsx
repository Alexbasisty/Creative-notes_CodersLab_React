import React, { Component } from "react";

class ToDoInputs extends Component {

  render() {
    return (
        <div className="field">
          <form>
            <label className="label">Name</label>
            <div className="control">
              <input className="input" type="text" placeholder="Text input" />
            </div>
          </form>
        </div>
    );
  }
}

export default ToDoInputs;