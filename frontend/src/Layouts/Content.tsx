import React from 'react';

function Content({children}: {children: any}) {
  return (
    <section id="content-layout">
      <div className="inner-col-layout">
        {children}
      </div>
    </section>
  );
}

export default Content;
