import React, { Component } from "react";

export default class Lifecycle extends Component {
  constructor() {
    super();
    console.log("Constructor");
  }
  componentDidMount() {
    console.log("component did Moount");
  }
  componentWillUnmount() {
    console.log("Component Will Unmount");
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("ShouldComponentUpdate", nextProps);
    return nextProps.text !== this.props.text;
  }
  render() {
    console.log("render");
    return (
      <div className="lifecycle">
        <h1>React Lifecycle</h1>
        <div>{this.props.text}</div>
      </div>
    );
  }
}
