import React from 'react';
import "./Explore.css";
import imgone from '../images/explore1.png';
import imgtwo from '../images/explore2.png'; 
class Explore extends React.Component {
render() {
 return(
<section className="exploreSection">
<div className="container"> 
<div className="row">
<div className="col-12">
 <div className="headingBlock"> <h2> Explore</h2>  <p> From one-guest rooms to <br/> penthouses with pools and gardens</p></div>  </div> 
</div>

<div className="row"> 
<div className="col-6"> 
 <div className="roomBlock">   <img src={imgone} width="auto" height="auto" alt=""/>
 <div className="titalRoom"> <p>Room with one king-size bed </p>
 <ul className="listofButton"> <li> <button>35$ </button></li> 
 <li><button>28м² </button> </li>
 <li><button>Book! </button> </li>
   </ul>   </div> </div> </div>  
   <div className="col-6"> 
 <div className="roomBlock">  <div className="roomBlock">  <img src={imgtwo} width="auto" height="auto" alt=""/>
 <div className="titalRoom"> <p>Room with one king-size bed </p>
 <ul className="listofButton"> <li> <button>35$ </button></li> 
 <li><button>28м² </button> </li>
 <li><button>Book! </button> </li>
   </ul>   </div> </div> </div></div></div>
 </div>

 </section>
);
}
}
export default Explore;