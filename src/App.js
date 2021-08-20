import React, { Component } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

import Welcome from "./Welcome";
import GuestGreeting from "./GuestGreeting";

import data from "./data.json"; 
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      isLogin: false,
      user: {
        email: "",
        password: "",
      },
      product: data.user.products
    };
  }
  componentDidMount() {
    console.log("App Component Mounted");
    console.log(this.state);
    localStorage.setItem('data', JSON.stringify(data));

  }
  componentDidUpdate() {
    console.log("App Component State Updated");
    localStorage.setItem('data', JSON.stringify(this.state.product))
  }
  handleOnSubmit = (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    this.setState({
      isLogin: true,
      user: {
        email,
        password,
      },
    });
    console.log(this.state);
    this.setState((prevState => ({
      ...prevState,
      product: [...prevState.product, {
        name: "boba 2",
        price: 2132,
        foto: "12312321.jpg"
      }]
    })))
    
  };

  render() {
    return (
      <>
        {this.state.isLogin ? (
          <Welcome />
        ) : (
          <>
            <GuestGreeting />
            <Container>
              <Row className="d-flex justify-content-center mt-5">
                <Col md="4">
                  <Form onSubmit={this.handleOnSubmit}>
                    <div className="text-center h5">Login</div>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control id="email" name="email" size="sm" type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control id="password" name="password" size="sm" type="password" placeholder="Password" />
                    </Form.Group>

                    <Button variant="primary" type="submit" size="sm">
                      Submit
                    </Button>
                  </Form>
                </Col>
              </Row>
            </Container>
          </>
        )}
      </>
    );
  }
}
