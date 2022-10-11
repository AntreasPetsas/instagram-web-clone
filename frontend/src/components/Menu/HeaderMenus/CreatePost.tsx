import React from "react";
import Button from "react-bootstrap/Button";
import addIcon from "../../../assets/images/icons/add_story.png";

function CreatePost() {
  return (
    <Button className="m-0 p-0 create_post-btn">
      <div id="createpost">
        <img src={addIcon} width="16" height="16" alt="add icon" />
        <label style={{width: 'inherit', marginLeft: 10}}>Create Post</label>
      </div>
    </Button>
  );
}

export default CreatePost;
