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
                  <Card.Title>Good Afternoon, Mark</Card.Title>
                </Card.Body>
              </Card>
            </Animated>
          </Col>
        </Row>

        <Row>
          <Col>
            {/* card */}
            <Animated
              animationIn="bounceInLeft"
              animationOut="fadeOut"
              animationInDelay={3000}
              isVisible={true}
            >
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Should we get lunch today?</Card.Title>
                </Card.Body>
              </Card>
            </Animated>
          </Col>
        </Row>

        <Row>
          <Col>
            {/* card */}
            <Animated
              animationIn="rotateInUpLeft
              "
              animationOut="fadeOut"
              animationInDelay={5000}
              isVisible={true}
            >
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Subtitle className="mb-2 text-muted">
                    Welcome to the super lunch picker app!
                  </Card.Subtitle>
                </Card.Body>
              </Card>
            </Animated>
          </Col>
        </Row>

        <Row>
          <Col>
            {/* card */}
            <Animated
              animationIn="zoomInRight"
              animationOut="fadeOut"
              animationInDelay={8000}
              isVisible={true}
            >
              <Card style={{ width: "18rem" }}>
                <Card.Body>

                  <Card.Text>This app will help us choose where to go for lunch</Card.Text>

                </Card.Body>
              </Card>
            </Animated>
          </Col>
        </Row>

        <Row>
          <Col>
            {/* card */}
            <Animated
              animationIn="rotateIn"
              animationOut="fadeOut"
              animationInDelay={10000}
              isVisible={true}
            >
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>1st option</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Deconstructed burger?
                  </Card.Subtitle>
                  <Card.Link href="https://www.yelp.com/biz/mendocino-farms-irvine">
                    Yes!
                  </Card.Link>
                  <Card.Link href="https://www.yelp.com/biz/mendocino-farms-irvine">
                    No, choose a different place
                  </Card.Link>
                </Card.Body>
              </Card>
            </Animated>
          </Col>
        </Row>

      </Container>
    );
  }
}
