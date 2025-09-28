import React from "react";
import Nav from  '../components/Nav.jsx';

function ObstacleCourse(){
  return (
  <body> 
    <Nav/>
    
    <br/> 
    <p className="ObstacleCourse">Obstacle Course</p>
    <br/> 
 
        <video className="responsive-video" src="https://github.com/albertochan81/portfolio_website/raw/refs/heads/main/public/videos/ObstacleCourse.mp4" controls> Your browser does not support the video tag.</video>
        <br/> 
        <h4>Disclaimer: No real chickens were harmed during the making of this project</h4>
    </body>
  )

}

export default ObstacleCourse;