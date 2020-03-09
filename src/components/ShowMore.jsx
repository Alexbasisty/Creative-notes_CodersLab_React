import React, { Component } from "react";

class ShowMore extends Component {
  state = {
    showMore: false,
  };
  handleShowMore = (e) => {
    e.preventDefault();
    this.setState({
      showMore: !this.state.showMore,
    })
  };
  render() {
    const {showMore} = this.state;
    if (showMore) {
      return (
          <>
            {this.props.children}
            <button
                className="button is-primary is-light"
                style={{marginTop: '10px', marginLeft: '10px'}}
                onClick={this.handleShowMore}>
              Close
            </button>
          </>
      )
    }
    return (
        <a href="#" onClick={this.handleShowMore}>Show more...</a>
    )
  }
}

export default ShowMore;
