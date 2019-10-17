import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class App extends Component {

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(evt) {
    evt.preventDefault();

  }

  render() {
    return (
      <div className="App">
        <Container>
          <Form>
            <Form.Group as={Row} controlId="GithubAccount">
              <Col sm="2">
                <Form.Label>Github account</Form.Label>
              </Col>
              <Col sm="10">
                <Form.Control type="text" placeholder="" />
              </Col>
            </Form.Group>
            <Button variant="primary" type="submit" onClick={this.handleClick}>
              Get info
          </Button>
          </Form>
        </Container>
      </div>
    );
  }
}

export default App;
