import React, { Component } from "react";

class DoneList extends Component {
  state = {
    done: []
  };

  componentDidMount() {
    fetch(' http://localhost:3004/done')
        .then(resp => resp.json())
        .then(data => {
          this.setState({
            done: data
          })
        })
  }

  render() {
    const { done } = this.state;
    return (
        done.map((task, index) => (<h3 key={index}>{task.title}</h3>))
    );
  }
}

export default DoneList;