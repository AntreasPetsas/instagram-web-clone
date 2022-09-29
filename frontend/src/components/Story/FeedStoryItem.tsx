import profile from "../../assets/images/draft/profile.svg";
import add from "../../assets/images/icons/add.png";

function FeedStoryItem({isFirst=false}:{isFirst?: Boolean}) {
  return (
    <div className="feed_story-item">
      <figure>
        {!isFirst && <img src={profile} width="86" height="86" alt="Andreas story" />}
        {isFirst && <img src={add} width="86" height="86" alt="Add story" />}
      </figure>
      {!isFirst &&<label>Andreas</label>}
      {isFirst &&<label>Add Story</label>}
    </div>
  );
}

export default FeedStoryItem;
