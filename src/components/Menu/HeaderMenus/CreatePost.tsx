import React from 'react';
import Button from 'react-bootstrap/Button';
import addIcon from "../../../assets/images/icons/add.png";

function CreatePost() {
  return (
    <div>
      <Button className="m-0 p-0">
        <div id="createpost">
          <img src={addIcon} width="24" height="24" alt="add icon" />
          <label>Create Post</label>
        </div>
      </Button>
    </div>
  );
}

export default CreatePost;