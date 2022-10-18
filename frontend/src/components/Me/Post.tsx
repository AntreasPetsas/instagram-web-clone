import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import { PostType } from "../../types/PostTypes";
import { faArrowRight, faArrowLeft, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import Slideshow from "./Slideshow";

const Post = ({
  post,
  xs,
}: {
  post: PostType;
  xs: number;
}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // const handleNextImage = () => {
  //   return <FontAwesomeIcon icon={faArrowLeft} className="arrow" style={{ left: 0 }} />;
  // };

  // const handlePreviousImage = () => {
  //   return <FontAwesomeIcon icon={faArrowRight} className="arrow" style={{ right: 0 }} />;
  // };

  const extractPosts = (): Array<PostType> => {
    var imagesArray: Array<PostType> = new Array<PostType>();
    imagesArray.push(post)
    if(post.childrens != null){
      post.childrens.forEach((p: PostType) => {
        imagesArray.push(p)
      });
    }
    return imagesArray;
  }

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
      <Modal show={show} onHide={handleClose} className="me_modal_post">
        <Modal.Body >
          {/* <Row> */}
            {/* <Col xs={7} style={{position: "relative"}}>
              <> */}
                <Slideshow 
                  images={extractPosts()}
                />
              {/* </>
            </Col> */}
          {/* </Row> */}
          <Button variant="transparent" onClick={handleClose} style={{position: "absolute", top: 0, right: 0}}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Post;
