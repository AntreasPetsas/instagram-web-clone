import { useMemo, useState } from "react";
import { Col, Row, Carousel} from "react-bootstrap";
import { PostType } from "../../types/PostTypes";
import Comment from "../Feed/Comment";
import like from "../../assets/images/icons/like.png";
import comment from "../../assets/images/icons/comment.png";
import share from "../../assets/images/icons/share.png";
import bookmark from "../../assets/images/icons/bookmark.png";
import profile from "../../assets/images/draft/profile.svg";

const SlideShow = ({ images }: { images: Array<PostType> }) => {
  const [index, setIndex] = useState<number>(0);
  const [indicatorDisabledClass, setIndicatorDisabledClass] =
    useState<string>("disable-left");
  const imagesLen = useMemo(() => {
    return images.length;
  }, [images]);

  const handleSelect = (selectedIndex: number) => {
    if (selectedIndex === imagesLen - 1)
      setIndicatorDisabledClass("disable-right");
    else if (selectedIndex === 0) setIndicatorDisabledClass("disable-left");
    else setIndicatorDisabledClass("disable-none");
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      className={indicatorDisabledClass}
    >
      {images.map((image, mapIndex) => {
        return (
          <Carousel.Item key={mapIndex} interval={120000}>
            <Col xs={7}>
              <img
                style={{
                  objectFit: "contain",
                  objectPosition: "center",
                }}
                src={image.media_url}
                width="100%"
                height="100%"
                alt="image"
              />
            </Col>
            <Col xs={5}>
              <Carousel.Caption>
                {/* Post Caption */}
                <Row className="g-0">
                  <Col>
                    <p>{image.caption}</p>
                  </Col>
                </Row>
                {/* Post Actions */}
                <Row className="g-0 slideshow-actions">
                  <Col xs={3} className="slideshow-actionslikes">
                    <label>28.5k</label>
                    <img src={like} width="16" height="16" alt="like icon" />
                  </Col>
                  <Col xs={3} className="slideshow-actionsComments">
                    <label>33</label>
                    <img src={comment} width="16" height="16" alt="like icon" />
                  </Col>
                  <Col xs={3} className="slideshow-actionsShares">
                    <label>134</label>
                    <img src={share} width="16" height="16" alt="like icon" />
                  </Col>
                  <Col xs={3} className="slideshow-actionsSaved">
                    <label>16</label>
                    <img
                      src={bookmark}
                      width="16"
                      height="16"
                      alt="like icon"
                    />
                  </Col>
                </Row>
                {/* Post Comments */}
                <Row className="g-0 slideshow-comments">
                  <Col xs={12} className="d-flex">
                    <Comment
                      isExists={true}
                      commentText={"awesome picture"}
                      image={profile}
                      image_col={3}
                      input_col={9}
                      profile_size={32}
                    />
                  </Col>
                  <Col xs={12} className="d-flex">
                    <Comment 
                      isExists={false} 
                      commentText="" 
                      image={profile} 
                      image_col={3}
                      input_col={9}
                      profile_size={32}
                    />
                  </Col>
                </Row>
              </Carousel.Caption>
            </Col>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default SlideShow;
