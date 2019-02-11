import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Maps from "./components/Maps";
import { Container } from "reactstrap";
require('dotenv').config()


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      appName: "TrafficApp"
    };
  }

  render() {
    return (
      <div className="App">
        <Header appName={this.state.appName} />
        <Container>
          <Maps />
        </Container>
      </div>
    );
  }
}

export default App;
