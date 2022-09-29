import { Col, Row } from "react-bootstrap";
import profileImage from "../../../assets/images/draft/profile.svg";

function ProfileDetails() {
  return (
    <section id="profile-details" className="d-flex flex-column">
      <Row className="profile-details__image flex-column m-0">
        <Col>
          <img src={profileImage} width="64" height="64" alt="profile" />
        </Col>
        <Col>
          <p className="m-0">Andreas Petsas</p>
        </Col>
        <Col>
          <p className="m-0">Personal Blog</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>147 Posts</p>
        </Col>
        <Col>
          <p>14.7K Followers</p>
        </Col>
        <Col>
          <p>850 Following</p>
        </Col>
      </Row>
    </section>
  );
}

export default ProfileDetails;
