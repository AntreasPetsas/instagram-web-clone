import React from 'react';
import Col from "react-bootstrap/Col";
import profile from "../../assets/images/draft/profile.svg";

function FeedStoryItem() {
  return (
    <Col className="feed_story-item" xs={2}>
      <img src={profile} width="64" height="64" alt="Andreas story" />
      <label>
        Andreas
      </label>
    </Col>
  );
}

export default FeedStoryItem;
