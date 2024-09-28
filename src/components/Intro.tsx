import React from 'react';

const Intro: React.FC = () => {
    return (
        <section id="intro" className="wrapper style1">
        <div className="title">You’re Welcome Here!</div>
        <div className="container">
          <p className="style1">So in case you were wondering what this is all about ...</p>
          <p className="style2"> Something something
            <br className="mobile-hide" />
          </p>
          <p className="style3"><strong>Oasis de fe</strong> is one church meeting in multiple locations, and we want to help you become the person God made you to be. No matter where you are in your journey, you’re invited to discover your purpose and live it out at 
          <strong> Oasis de fe</strong>.</p>
          <ul className="actions">
            <li><a href="#" className="button style3 large">Find a Location</a></li>
          </ul>
        </div>
      </section>
    );
};

export default Intro;