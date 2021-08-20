import React, { Component } from "react";

export default class GuestGreeting extends Component {
  componentDidMount() {
    console.log("Guest Greeting Mounted");
  }
  componentWillUnmount() {
    console.log("Guest Greeting Unmounted");
  }

  render() {
    return <div className="text-center h1 bg-secondary text-light py-5">Please Login !</div>;
  }
}
