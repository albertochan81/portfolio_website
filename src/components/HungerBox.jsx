import React from "react";
import Nav from  '../components/Nav.jsx';

function HungerBox(){
  return (
  <body> 
    <Nav/>
    
    <br/> <br/> 
    <img className="HungerBoxTitle" src= '/public/images/HBlogo.png'/>
    <br/> <br/> 
        <p>Vendor's app demo</p>
        <video className="responsive-video" src="/public/videos/HungerBoxVendorDemo.mp4" controls  > Your browser does not support the video tag.</video>
        <br/> <br/>
        <p>Vendor's earnings analytics page</p>
        <video className="responsive-video" src="/public/videos/AnalyticsScreen.mp4" controls> Your browser does not support the video tag.</video>

    </body>
  )
}

export default HungerBox;