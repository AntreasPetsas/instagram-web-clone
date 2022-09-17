import React from 'react';

type FeedProps = {
  name: string;
  id: number;
};

function Feed(props: FeedProps) {
  return <section id="feed-page">
    <p>{props.id}</p>
    <p>{props.name}</p>
  </section>;
}

export default Feed;
