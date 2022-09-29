import Col from "react-bootstrap/Col";
import FeedStoryItem from './FeedStoryItem';
import "../../assets/sass/components/story.scss";

function FeedStories() {
  return (
    <Col id="feed_stories" className='d-flex p-0' xs={12}>
      <FeedStoryItem isFirst={true}/>
      <FeedStoryItem />
      <FeedStoryItem />
      <FeedStoryItem />
      <FeedStoryItem />
      <FeedStoryItem />
      <FeedStoryItem />
      <FeedStoryItem />
      <FeedStoryItem />
    </Col>
  );
}

export default FeedStories;