import React, { Component } from "react";
import "./App.css";
import { Animated } from "react-animated-css";

export default class App extends Component {
  render() {
    return (
        <Animated
          animationIn="bounceInLeft"
          animationOut="fadeOut"
          isVisible={true}
        >

          <div>lunch?</div>

        </Animated>
    );
  }
}
