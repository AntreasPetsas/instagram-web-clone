import { Col, Row } from "react-bootstrap";
import "../assets/styles/pages/me.scss";
import Posts from "../components/Me/Posts";
import { PostType } from "../types/PostTypes";
import postImage1 from "../assets/images/posts/post1.jpg";
import postImage2 from "../assets/images/posts/post2.jpg";
import postImage3 from "../assets/images/posts/post3.jpg";
import postImage4 from "../assets/images/posts/post4.jpg";
import postImage5 from "../assets/images/posts/post5.jpg";
import postImage6 from "../assets/images/posts/post6.jpg";
import postImage1_1 from "../assets/images/posts/post1_1.jpg";
import postImage2_1 from "../assets/images/posts/post2_1.jpg";
import postImage2_2 from "../assets/images/posts/post2_2.jpg";


const Me = () => {
  const post1: PostType = {
    id : "post1",
    caption : "Looking At Moon",
    media_type : "image",
    media_url : postImage1,
    permalink : "asd",
    thumbnail_url : "asd",
    timestamp : new Date(),
    username : "asd",
    childrens: [{
      id : "post1_1",
      caption : "Hight above the clouds.",
      media_type : "image",
      media_url : postImage1_1,
      permalink : "asd",
      thumbnail_url : "asd",
      timestamp : new Date(),
      username : "asd",
      childrens: null
    }]
  }
  const post2: PostType = {
    id : "post2",
    caption : "Snow by day",
    media_type : "asd",
    media_url : postImage2,
    permalink : "asd",
    thumbnail_url : "asd",
    timestamp : new Date(),
    username : "asd",
    childrens: [{
      id : "post2_1",
      caption : "Hurrungane ",
      media_type : "image",
      media_url : postImage2_1,
      permalink : "asd",
      thumbnail_url : "asd",
      timestamp : new Date(),
      username : "asd",
      childrens: null
    },{
      id : "post2_2",
      caption : "Patagonia Sunrise",
      media_type : "image",
      media_url : postImage2_2,
      permalink : "asd",
      thumbnail_url : "asd",
      timestamp : new Date(),
      username : "asd",
      childrens: null
    }]
  }
  const post3: PostType = {
    id : "post3",
    caption : "Mountain view by lake",
    media_type : "asd",
    media_url : postImage3,
    permalink : "asd",
    thumbnail_url : "asd",
    timestamp : new Date(),
    username : "asd",
    childrens: null
  }
  const post4: PostType = {
    id : "post4",
    caption : "On the way to the Glacier",
    media_type : "asd",
    media_url : postImage4,
    permalink : "asd",
    thumbnail_url : "asd",
    timestamp : new Date(),
    username : "asd",
    childrens: null
  }
  const post5: PostType = {
    id : "post5",
    caption : "Ascend to first high camp",
    media_type : "asd",
    media_url : postImage5,
    permalink : "asd",
    thumbnail_url : "asd",
    timestamp : new Date(),
    username : "asd",
    childrens: null
  }
  const post6: PostType = {
    id : "post6",
    caption : "Manaslu base camp",
    media_type : "asd",
    media_url : postImage6,
    permalink : "asd",
    thumbnail_url : "asd",
    timestamp : new Date(),
    username : "asd",
    childrens: null
  }

  const posts: Array<PostType> = new Array<PostType>();
  posts.push(post1);
  posts.push(post2);
  posts.push(post3);
  posts.push(post4);
  posts.push(post5);
  posts.push(post6);
  
  const username = "Andreas Petsas";
  
  return (
    <div id="me-content">
      <Row>
        <Col xs={2}>story circle</Col>
        <Col xs={6}>
          <div className="d-flex">{username}</div>
        </Col>
        <Col xs={4}>
          <Row>
            <Col xs={4}>234 Posts</Col>
            <Col xs={4}>12.2M Followers</Col>
            <Col xs={4}>3 Following</Col>
          </Row>
        </Col>
      </Row>
      <div id="me-posts-layout">
        <Posts 
          posts={posts}
        />
      </div>
    </div>
  );
};

export default Me;
