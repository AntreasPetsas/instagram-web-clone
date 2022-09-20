import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import beach from "../../../assets/images/draft/beach.svg";
import traveling from "../../../assets/images/draft/traveling.svg";
import cooking from "../../../assets/images/draft/cooking.svg";
import summer from "../../../assets/images/draft/summer.svg";

function TrendingFeeds() {
  return (
    <>
      <h3>Trending Feeds</h3>
      <Row>
        <Col xs={6}>
          <img src={beach} width="100" height="100" alt="beach time" />
        </Col>
        <Col xs={6}>
          <img src={traveling} width="100" height="100" alt="traveling time" />
        </Col>
        <Col xs={6}>
          <img src={cooking} width="100" height="100" alt="cooking time" />
        </Col>
        <Col xs={6}>
          <img src={summer} width="100" height="100" alt="summer time" />
        </Col>
      </Row>
    </>
  );
}

export default TrendingFeeds;