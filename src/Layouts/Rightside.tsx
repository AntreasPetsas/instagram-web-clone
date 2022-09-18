import React from 'react';
import TrendingFeeds from '../components/Sidebars/Right/TrendingFeeds';
import Suggestions from '../components/Sidebars/Right/Suggestions';
import ProfileActivity from '../components/Sidebars/Right/ProfileActivity';

function Rightside() {
  return (
    <section id="rightside-layout">
      <TrendingFeeds />
      <Suggestions />
      <ProfileActivity />
    </section>
  );
}

export default Rightside;
