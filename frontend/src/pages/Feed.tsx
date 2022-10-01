import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";
import Container from 'react-bootstrap/Container'
import FeedStories from '../components/Story/FeedStories';
import Feeds from '../components/Feed/Feeds';

type FeedProps = {
  name: string;
  id: number;
};

function Feed(props: FeedProps) {
  return (
    <Container id="feed-page" style={{width: 800}}>
      <Row>
        <Col xs={6}>
          <h3>Stories</h3>
        </Col>
        <Col xs={6}>
          <p>Watch All</p>
        </Col>
        <FeedStories />
      </Row>
      <Feeds />
    </Container>)
}

export default Feed;
