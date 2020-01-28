import React, { Component } from "react";
import {
  Card,
  Button,
  CardText,
  FormGroup,
  Label,
  Col,
  Input,
  Row
} from "reactstrap";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      discription: "",
      items: []
    };
  }

  onChange = event => {
    this.setState({ title: event.target.value });
    this.setState({ discription: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();
    this.setState({
      title: "",
      discription: "",
      items: [
        ...this.state.items,
        this.state.title,
        this.state.items,
        this.state.discription
      ]
    });
  };

  render() {
    return (
      <div className="App container">
        <header className="App-header">
          <h1 className="header">Idea Board</h1>
          <spam className="header_dicription">
            its not an idea untill its written down
          </spam>
        </header>
        <div>
          <div className="container">
            <Row>
              <Col xs="6" sm="4">
                <Card inverse>
                  <CardText>
                    <ul items={this.state.items}>
                      {(title, index) => <li key={index}>{title}</li>}
                      {(discription, index) => (
                        <li key={index}>{discription}</li>
                      )}
                    </ul>
                  </CardText>
                </Card>
              </Col>
            </Row>
          </div>
          <div className="m-5">
            <CardText>
              <FormGroup row onSubmit={this.onSubmit}>
                <Label for="textInput" sm={2}>
                  Title
                </Label>
                <Col sm={10}>
                  <Input
                    value={this.state.term}
                    onChange={this.onChange}
                    type="text"
                    name="text"
                    id="textInput"
                    placeholder="title"
                  />
                </Col>
                <p></p>
                <Label for="discription" sm={2}>
                  Text Area
                </Label>
                <Col sm={10}>
                  <Input
                    value={this.state.term}
                    onChange={this.onChange}
                    type="textarea"
                    name="text"
                    id="discription"
                  />
                </Col>
              </FormGroup>
              <Button color="primary" size="lg" active>
                save
              </Button>
            </CardText>
          </div>
        </div>
      </div>
    );
  }
}
