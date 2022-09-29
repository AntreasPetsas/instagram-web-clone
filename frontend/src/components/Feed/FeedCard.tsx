import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import profile from "../../assets/images/draft/profile.svg";
import feed from "../../assets/images/draft/feed.svg";
import like from "../../assets/images/icons/like.png";
import comment from "../../assets/images/icons/comment.png";
import share from "../../assets/images/icons/share.png";
import bookmark from "../../assets/images/icons/bookmark.png";
import "../../assets/sass/components/feedCard.scss"

function FeedCard() {
  return (
    <section className="feed_card">
      <Row>
        <Col xs={2}>
          <img src={profile} width="32" height="32" alt="feed card profile" />
        </Col>
        <Col xs={3}>
          <label>Andreas Petsas</label>
          <label>Nicosia, Cyprus</label>
        </Col>
        <Col xs={7} className="text-end">
          {"..."}
        </Col>
      </Row>
      <Row>
        <img className="feed_card-img" src={feed} width="200" height="200" alt="feed card brief description" />
      </Row>
      <Row>
        <Col xs={3}>
          <img src={like} width="16" height="16" alt="like icon" />
          <label>28.5k Likes</label>
          </Col>
        <Col xs={3}>
          <img src={comment} width="16" height="16" alt="like icon" />
          <label>33 Comments</label>
          </Col>
        <Col xs={3}>
          <img src={share} width="16" height="16" alt="like icon" />
          <label>134 Shares</label>
          </Col>
        <Col xs={3}>
          <img src={bookmark} width="16" height="16" alt="like icon" />
          <label>16 Saved</label>
          </Col>
      </Row>
      <Row></Row>
      <Row></Row>
    </section>
  );
}

export default FeedCard;