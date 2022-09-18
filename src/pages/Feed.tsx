import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";
import Container from 'react-bootstrap/Container'
import FeedStories from '../components/Story/FeedStories';
import FeedCard from '../components/Feed/FeedCard';

type FeedProps = {
  name: string;
  id: number;
};

function Feed(props: FeedProps) {
  return (
    <Container id="feed-page">
      <Row>
        <Col xs={6}>
          <h3>Stories</h3>
        </Col>
        <Col xs={6}>
          <p>Watch All</p>
        </Col>
        <FeedStories />
      </Row>
      <Row>
        <Col xs={6}>
          <h2>Feeds</h2>
        </Col>
        <Col xs={3}>
          <label>Label</label>
        </Col>
        <Col xs={3}>
          <label>Popular</label>
        </Col>
        <Row id="feeds">
          <FeedCard />
          <FeedCard />
        </Row>
      </Row>
    </Container>)
}

export default Feed;
