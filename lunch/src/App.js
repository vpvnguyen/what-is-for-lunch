import React, { Component } from "react";
import "./App.css";
import { Animated } from "react-animated-css";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Button, Icon } from "@material-ui/core";

export default class App extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            {/* intro */}
            <Animated
              animationIn="fadeIn"
              animationOut="fadeOut"
              isVisible={true}
              animationInDelay={2000}
            >
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Im ready</Card.Title>
                </Card.Body>
              </Card>
            </Animated>
          </Col>
        </Row>


      </Container>
    );
  }
}
