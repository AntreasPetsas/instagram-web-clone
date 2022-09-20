import React from 'react';
import { Link } from 'react-router-dom';
import { leftsideMenuItems } from "../../../constants/routes";

function LeftSideMenuItems() {
  console.log(leftsideMenuItems)

  return (
    <section id="leftside_menu-items">
      {leftsideMenuItems.map((item, index) =>
        <Link to={item.path} key={index} className="leftside_menu-item" >
          {<>
              <img
                src={Object.values(item.icon)[0]}
                height="24"
                width="24"
                alt={`${item.name}`}
              />
              <p>
                {item.name}
              </p>
            </>}
        </Link>
      )}
    </section>
  );
}

export default LeftSideMenuItems;