import React from 'react';

type FeedProps = {
  name: string;
  id: number;
};

function Feed(props: FeedProps) {
  return <div id="feed-page">
    {props.id}
    {props.name}
  </div>;
}

export default Feed;
