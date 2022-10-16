import { useState } from "react";
import { Col, Modal } from "react-bootstrap";
import { PostType } from "../../types/PostTypes";

const Post = ({ post, xs, postId }: { post: PostType; xs: number, postId: string }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Col xs={xs}>
        <img
          style={{
            objectFit: "cover",
            objectPosition: "center",
            borderRadius: 18,
            cursor: "pointer",
          }}
          src={post.media_url}
          width="250"
          height="250"
          alt={post.caption.substring(1, 20)}
          onClick={handleShow}
        />
      </Col>
      <Modal show={show} onHide={handleClose} className="modal_post">
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              style={{
                objectFit: "cover",
                objectPosition: "center",
                borderRadius: 18,
                cursor: "pointer",
              }}
              src={post.media_url}
              width="250"
              height="250"
              alt={post.caption.substring(1, 20)}
            />
            <p>{post.caption}</p>
          </Modal.Body>
          <Modal.Footer>
            {/* <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button> */}
          </Modal.Footer>
        </Modal>
    </>
  );
};

export default Post;
