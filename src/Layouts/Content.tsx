import React from 'react';

function Content({children}: {children: any}) {
  return (
    <section id="content-layout">
      {children}
    </section>
  );
}

export default Content;
