import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import profile from "../../../assets/images/draft/profile.svg";

function Suggestions() {
  return (
    <Row id="suggestions">
      <h3>Suggestions for you</h3>
      <Col xs={12} className="d-flex">
        <img src={profile} width="48" height="48" alt="suggestion 1" />
        <div className="labels d-flex flex-column">
          <label className="labes_name">Andreas Petsas</label>
          <label className="labes_place">California, US</label>
        </div>
      </Col>
      <Col xs={12} className="d-flex">
        <img src={profile} width="48" height="48" alt="suggestion 2" />
        <div className="labels d-flex flex-column">
          <label className="labes_name">Andreas Petsas</label>
          <label className="labes_place">California, US</label>
        </div>
      </Col>
      <Col xs={12} className="d-flex">
        <img src={profile} width="48" height="48" alt="suggestion 3" />
        <div className="labels d-flex flex-column">
          <label className="labes_name">Andreas Petsas</label>
          <label className="labes_place">California, US</label>
        </div>
      </Col>
    </Row>
  );
}

export default Suggestions;
