import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";
import FeedStoryItem from './FeedStoryItem';

function FeedStories() {
  return (
    <Col id="feed_stories" className='d-flex p-0' xs={12}>
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