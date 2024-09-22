import React from 'react';

const Header: React.FC = () => {
    return (
	    <section id="header" className="wrapper">

<div id="logo">
  <h1><a href="#"></a></h1>
  <p>Believe on the Lord Jesus Christ, and thou shalt be saved, and thy house.</p>
</div>

<nav id="nav">
  <ul>
    <li className="current"><a href="#">Home</a></li>
    <li><a href="left-sidebar.html">Watch</a></li>
    <li><a href="right-sidebar.html">Prayer Request</a></li>
    <li><a href="no-sidebar.html">Give</a></li>
  </ul>
</nav>

</section>
    );
};

export default Header;