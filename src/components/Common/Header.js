import React from 'react';

const Header = (props) => {
  return (
    <header className="header fixed-top">
    <div className="logo"> 
      <div id="sidebar_menu" className="sidebar__toggle"><span className="bar1"></span> 
      <span className="bar2"></span> <span className="bar3"></span> </div><a href="#">
        <img src="../images/logo.png" alt="Caesars Entertainment Logo"/></a>
    </div>
    <nav className="navbar navbar-expand-lg">
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-item nav-link active" href="https://www.caesars.com/myrewards/benefits-overview">BENEFITS<span className="sr-only">(current)</span></a>
          <a className="nav-item nav-link" href="https://www.caesars.com/myrewards/earn-and-redeem">EARN & REDEEM</a>
          <a className="nav-item nav-link" href="https://www.caesars.com/myrewards/promotions">PROMOTIONS</a>
          <a className="nav-item nav-link" href="https://www.caesars.com/myrewards/partners">PARTNERS</a>
          <a className="nav-item nav-link" href="https://www.caesars.com/book">BOOK NOW</a>
        </div>
      </div>
    </nav>
    <ul className="top-menu">
      <li className="user">
        <span className="userImage"></span>
        <span className="username">Hello, TRTEST</span>
      </li>
    </ul>
  </header>
  );
};

export default Header;
