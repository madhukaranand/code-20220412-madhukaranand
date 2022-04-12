import React from 'react';
import image from '../images/headerImage.png';
import bigArrow from '../images/bigArrow.png';

import searchIcon from '../images/search.png';
import "./header.css";

class Header extends React.Component{
render() {
 return( 
 <header style={{
   backgroundImage: 'url('+image+')',
   backgroundSize: "cover",
   height: "700px",
   color: "#f5f5f5",
   position: "relative", 
  }}>
 <div className="container contentHeader"> 
<div className="headerConten">
<h1> Rethink your <br/> living & renting </h1>
<p> Make your stay painless with us </p>
</div>

<ul className="SerchSection">  
 <li> <span> CITY</span> <input type="text" placeholder ="Select your city"/>  </li>
 <li> <span> DATES</span>  <input type="text" name="name"  placeholder ="Select your dates"/> </li>
 <li> <span> GUESTS</span> <input type="text" name="name" placeholder ="Add guests"/>  </li> 
 <li> <button type="button">  <img src={searchIcon} width="20" height="20" /> Search </button> 
 </li></ul> </div>
 <a href="#" className='buttomArrow'> <img src={bigArrow} width="35" height="25"/> </a>
 </header>
);
};
};
export default Header;