import React from "react"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import profile from "../../../assets/images/draft/profile.svg";

function Suggestions() {
  return (
    <Row>
      <h3>Suggestions for you</h3>
      <Col className="d-flex">
        <img src={profile} width="32" height="32" alt="suggestion 1" />
        <label>Andreas Petsas</label>
        <label>California, US</label>
      </Col>
      <Col className="d-flex">
        <img src={profile} width="32" height="32" alt="suggestion 2" />
        <label>Andreas Petsas</label>
        <label>California, US</label>
      </Col>
      <Col className="d-flex">
        <img src={profile} width="32" height="32" alt="suggestion 3" />
        <label>Andreas Petsas</label>
        <label>California, US</label>
      </Col>
    </Row>
  );
}

export default Suggestions;