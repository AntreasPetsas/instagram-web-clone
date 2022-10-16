import { PostType } from "../../types/PostTypes";
import Col from "react-bootstrap/Col";

const Posts = ({posts} : {posts: PostType[]}) => {
  return (
    <>
      {posts.map((post, index) => {
        return (
          <Col key={index}>
            <img
              style={{
                objectFit: "cover",
                objectPosition: "center",
                borderRadius: 18,
              }}
              src={post.media_url}
              width="250"
              height="250"
              alt={post.caption.substring(1, 20)}
            />
          </Col>
        );
      })}
    </>
  );
};

export default Posts;
