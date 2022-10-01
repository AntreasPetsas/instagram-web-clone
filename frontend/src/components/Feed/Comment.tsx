import { Col, Form, Button } from "react-bootstrap";
import attachment from "../../assets/images/icons/attachment.png";
import gallery from "../../assets/images/icons/gallery.png";
import emoji from "../../assets/images/icons/smile.png";
import send from "../../assets/images/icons/send.png";

type CommentProps = {
  image: string;
  isExists: boolean;
  commentText: string;
};

const Comment = (props: CommentProps) => {
  return (
    <>
      <Col xs={1}>
        <img
          src={props.image}
          width="64"
          height="64"
          alt="comment profile icon"
        />
      </Col>
      <Col xs={11} className="feed_card-comment">
        <Form>
          {props.isExists && (
            <Form.Group className="comment-disabled" controlId="comment">
              <Form.Control
                type="text"
                placeholder={props.commentText}
                disabled
              />
            </Form.Group>
          )}
          {!props.isExists && (
            <>
              <Form.Group className="comment-enabled" controlId="comment">
                <Form.Control type="text" placeholder="Write your comment" />
              </Form.Group>

              <Form.Group className="d-flex align-items-center">
                <span>
                  <img src={attachment} width="16" height="16" alt="attachment icon" />
                </span>
                <span>
                  <img src={emoji} width="16" height="16" alt="emojis icon" />
                </span>
                <span>
                  <img src={gallery} width="16" height="16" alt="images icon" />
                </span>
              </Form.Group>

              <Button variant="primary-outline" type="submit">
                <span>
                  <img src={send} width="16" height="16" alt="images icon" />
                </span>
              </Button>
            </>
          )}
        </Form>
      </Col>
    </>
  );
};
export default Comment;
