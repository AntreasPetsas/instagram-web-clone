import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import profile from "../../assets/images/draft/profile.svg";
import feed from "../../assets/images/draft/feed.svg";
import like from "../../assets/images/icons/like.png";
import comment from "../../assets/images/icons/comment.png";
import share from "../../assets/images/icons/share.png";
import bookmark from "../../assets/images/icons/bookmark.png";
import Comment from "./Comment";
import "../../assets/styles/components/feedCard.scss";

function FeedCard() {
  return (
    <section className="feed_card">
      <Row className="g-0 feed_card-header">
        <Col xs={1} className="feed_card-profile">
          <img src={profile} width="90%" height="90%" alt="feed card profile" />
        </Col>
        <Col xs={3}>
          <label>Andreas Petsas</label>
          <label>Nicosia, Cyprus</label>
        </Col>
        <Col xs={8} className="text-end">
          {"..."}
        </Col>
      </Row>
      <Row className="g-0 feed_card-content">
        <img
          className="feed_card-img"
          src={feed}
          width="200"
          height="350"
          alt="feed card brief description"
        />
      </Row>
      <Row className="g-0 feed_card-actions">
        <Col xs={3} className="feed_card-actionslikes">
          <img src={like} width="16" height="16" alt="like icon" />
          <label>28.5k Likes</label>
        </Col>
        <Col xs={3} className="feed_card-actionsComments">
          <img src={comment} width="16" height="16" alt="like icon" />
          <label>33 Comments</label>
        </Col>
        <Col xs={3} className="feed_card-actionsShares">
          <img src={share} width="16" height="16" alt="like icon" />
          <label>134 Shares</label>
        </Col>
        <Col xs={3} className="feed_card-actionsSaved">
          <img src={bookmark} width="16" height="16" alt="like icon" />
          <label>16 Saved</label>
        </Col>
      </Row>
      <Row className="g-0 feed_card-info">
        <p>
          “Look deep into nature, and then you will understand everything
          better.” ~ Albert Einstein. “We don't own the planet Earth, we belong
          to it. ...
        </p>
      </Row>
      <Row className="g-0 feed_card-comments">
        <Col xs={12} className="d-flex">
          <Comment
            isExists={true}
            commentText={"awesome picture"}
            image={profile}
            profile_size={64}
          />
        </Col>
        <Col xs={12} className="d-flex">
          <Comment 
            isExists={false} 
            commentText="" 
            image={profile}
            profile_size={64}
            />
        </Col>
      </Row>
    </section>
  );
}

export default FeedCard;
