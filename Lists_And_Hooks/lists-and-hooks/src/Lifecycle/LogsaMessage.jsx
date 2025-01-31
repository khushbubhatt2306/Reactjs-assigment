import React, { Component } from "react";

export class LogsaMessage extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    console.log("Component is mounting!");
  }

  componentDidUpdate() {
    console.log("Component updated!");
  }

  componentWillUnmount() {
    console.log("Component is unmounting!");
  }
  render() {
    return (
      <div>
        <h1>count : {this.state.count}</h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
      </div>
    );
  }
}

export default LogsaMessage;
