import React from "react";
import "../styles/App.css";
import { Form, Button } from "react-bootstrap";

const App = () => {
  const formSubmitHandler = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div id="main" className="main-container">
      <Form onSubmit={formSubmitHandler} className="form" id="form">
        <Form.Group className="mb-3" controlId="noOfRows">
          <Form.Label>Rows</Form.Label>
        </Form.Group>

        <Form.Group className="mb-3" controlId="no0fColumns">
          <Form.Label>Columns</Form.Label>
        </Form.Group>
        <Button variant="primary" type="submit" id="button">
          Submit
        </Button>
      </Form>
      <div className="outer-grid" id="outer-grid">
      </div>
    </div>
  );
};

export default App;
