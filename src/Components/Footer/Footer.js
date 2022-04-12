import React from 'react';
import "./Footer.css";
import logo from '../images/footerLogo.png';
class Footer extends React.Component {
    render() {
        return (
             <footer className ="ExploreSection">
            <div className="container">
            <div className="row align-center">
            <div className="col-3">
            <a href='#'> <img src={logo} width="176" height="46"/> </a>  
        <p> © 2021 Company Name <br/>
             All rights reserved 
             </p> 
           </div>
             <div className="col-9">
            <ul className="FooterNav">
            <li> <a href="#"> Explore </a> </li>
            <li> <a href="#"> About Us </a> </li>
            <li> <a href="#"> Cities </a> </li> 
            <li> <a href="#"> Call </a> </li> </ul> </div>
            </div> 
            </div>
            </footer>
        );
    }
}
export default Footer;