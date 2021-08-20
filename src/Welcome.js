import React, { Component } from "react";

export default class Welcome extends Component {
  componentDidMount() {
    console.log("Welcome Component is Mounted");
  }
  componentWillUnmount() {
    console.log("Welcome Component is Unmounted");
  }

  render() {
    return <div className="vh-100 bg-warning d-flex justify-content-center align-items-center h1 mb-0">Welcome</div>;
  }
}
