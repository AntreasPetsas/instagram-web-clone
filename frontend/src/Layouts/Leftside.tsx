import LeftSideMenuItems from '../components/Sidebars/Left/LeftSideMenuItems';
import ProfileDetails from '../components/Sidebars/Left/ProfileDetails';
import Logo from '../components/Sidebars/Left/Logo';

import '../assets/sass/sidebars/leftsidebar.scss';

function Leftside() {
  return (
    <section id="leftside-layout">
      <Logo />
      <ProfileDetails />
      <LeftSideMenuItems />
    </section>
  );
}

export default Leftside;
