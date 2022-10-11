import profile from "../../assets/images/draft/profile.svg";
import add from "../../assets/images/icons/add_story.png";

function FeedStoryItem({isFirst=false}:{isFirst?: Boolean}) {
  return (
    <div className={`feed_story-item ${isFirst? 'add_story':'user_story'}`}>
      <figure>
        {!isFirst && <img src={profile} width="76" height="76" alt="Andreas story" />}
        {isFirst && <img src={add} width="76" height="76" alt="Add story" />}
      </figure>
      {!isFirst &&<label>Andreas</label>}
      {isFirst &&<label>Add Story</label>}
    </div>
  );
}

export default FeedStoryItem;
