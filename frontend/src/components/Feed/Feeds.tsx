import { Row, Col } from "react-bootstrap";
import FeedCard from "./FeedCard";

function Feeds() {
  return (
    <section id="feeds">
      <Row>
        <Col xs={6}>
          <h2>Feeds</h2>
        </Col>
        <Col xs={3}>
          <label>Latest</label>
        </Col>
        <Col xs={3}>
          <label>Popular</label>
        </Col>
      </Row>
      <Row>
        <FeedCard />
        <FeedCard />
      </Row>
    </section>
  );
}

export default Feeds;
