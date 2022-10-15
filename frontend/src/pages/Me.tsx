import { Col, Row } from "react-bootstrap";

export type PostType = {
    id: string;
    caption: string;
    media_type: string;
    media_url: string;
    permalink: string;
    thumbnail_url: string;
    timestamp: Date;
    username: string;
}

type MeProps = {
    UserName: string;
    posts: PostType[] | null;
};

const Me = (props: MeProps) => {

    const renderedProps = props.posts?.forEach((post)=>{
        <Col>
            <img src={post.media_url} width="150" height="150" />
        </Col>
    })

    return (
        <div id="me-content">
            <Row>
                <Col xs={2}>
                    story circle
                </Col>
                <Col xs={6}>
                    <div className="d-flex">
                        {props.UserName}
                    </div>
                </Col>
                <Col xs={4}>
                    <Row>
                        <Col xs={4}>
                            234 Posts
                        </Col>
                        <Col xs={4}>
                            12.2M Followers
                        </Col>
                        <Col xs={4}>
                            3 Following
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row id="me-posts-layout">
                <div>{renderedProps}</div>
            </Row>
        </div>
    )
}

export default Me;