import React from 'react';
import "./aboutus.css";

import chap1 from '../images/chap2.png';
import chap2 from '../images/chap1.png';
import chap3 from '../images/chap3.png';
import chap4 from '../images/chap4.png';

class AboutUs extends React.Component {
    render() {
        return ( 
          <section className = "aboutSection">
            <div className = 'container'>
            <div className = "row">
            <div className = "col-12">
            <div className = "headingBlock"> 
            <h2> About Us </h2>  
            <p> Allow us to tell you a short story...</p >
             </div>  </div>
            </div>

            <div className="row colabout">
            <div className="col-6">
            <div className="roomBlock"> 
            <img src = {chap1} width = "100%"
            height = "auto" alt = "" />
            <div className = "titalRoom"> 
            <h4> Chapter I </h4>
             <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun < /p>  </div >
              </div>  </div>  
              <div className="col-6" >
              <div ClassName="roomBlock"> <img src={chap2}
            width = "100%"
            height = "auto"
            alt = "" />
            <div className = "titalRoom" > <h4> Chapter II </h4> 
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun </p>   </div> </div>
              </div> 
            <div className = "col-6">
            <div className = "roomBlock"> <img src={chap3}
            width = "100%"
            height = "auto"
            alt = ""/>
            <div className = "titalRoom"> <h4> Chapter III </h4>
             <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun </p>  </div>
              </div> </div >
                <div className = "col-6">
                <div className = "roomBlock">
                <img src={chap4}
            width = "100%"
            height = "auto"
            alt = ""/>
                <div className = "titalRoom">
                <h4> Chapter IV</h4>
                 <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun </p>  
                  </div>
                    </div>
                     </div> 
                     </div>
                      </div> 
                      </section>
        );
    }
}
export default AboutUs;