import FeedStories from '../components/Story/FeedStories';
import Feeds from '../components/Feed/Feeds';
import '../assets/styles/layouts/feed.scss'
type FeedProps = {
  name: string;
  id: number;
};

function Feed(props: FeedProps) {
  return (
    <div id="feed-content">
      <FeedStories />
      <Feeds />
    </div>)
}

export default Feed;
