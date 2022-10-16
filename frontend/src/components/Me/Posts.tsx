import { PostType } from "../../types/PostTypes";
import { useEffect } from "react";
import { Row } from "react-bootstrap";
import Post from "./Post";

const Posts = ({ posts }: { posts: PostType[] }) => {
  let isDesktop: Boolean = false;

  useEffect(() => {
    const { innerWidth: width, innerHeight: height } = window;

    // width > 992 -> lg
    // width > 1200 -> xl
    // width > 1400 -> xxl
    if (width >= 992 && width <= 1999.95) isDesktop = false;
    else if (width >= 1200) isDesktop = true;
  }, []);

  const handleRenderPosts = () => {
    let renderedPosts: JSX.Element[] | JSX.Element = [];
    let lenIteration: number = isDesktop ? 4 : 3;

    for (let i = 0; i < posts.length; i += lenIteration) {
      let iterPosts: JSX.Element[] | JSX.Element = [];
      for (let j = 0; j < lenIteration; j++) {
        if (i + j > posts.length - 1) break;
        iterPosts.push(
          <Post
            post={posts[i + j]}
            xs={isDesktop ? 3 : 4}
            key={`post_col_${i + j}`}
            postId = {`post_col_${i + j}`}
          />
        );
      }
      renderedPosts.push(
        <Row style={{ marginBottom: 35 }} key={`post_row_${i}`}>
          {iterPosts}
        </Row>
      );
    }

    return renderedPosts;
  };

  return <>{handleRenderPosts()}</>;
};

export default Posts;
