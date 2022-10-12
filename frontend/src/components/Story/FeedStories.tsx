import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import FeedStoryItem from "./FeedStoryItem";
import "../../assets/styles/components/story.scss";

function FeedStories() {
  return (
    <Row id="feed_stories">
      <Col xs={6}>
        <h3>Stories</h3>
      </Col>
      <Col xs={6}>
        <p>Watch All</p>
      </Col>
      <Col className="d-flex p-0" xs={12}>
        <FeedStoryItem isFirst={true} />
        <FeedStoryItem />
        <FeedStoryItem />
        <FeedStoryItem />
        <FeedStoryItem />
        <FeedStoryItem />
        <FeedStoryItem />
        <FeedStoryItem />
        <FeedStoryItem />
      </Col>
    </Row>
  );
}

export default FeedStories;
