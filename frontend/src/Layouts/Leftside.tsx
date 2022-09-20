import React from 'react';
import LeftSideMenuItems from '../components/Sidebars/Left/LeftSideMenuItems';
import ProfileDetails from '../components/Sidebars/Left/ProfileDetails';

function Leftside() {
  return (
    <section id="leftside-layout">
      <ProfileDetails />
      <LeftSideMenuItems />
    </section>
  );
}

export default Leftside;
