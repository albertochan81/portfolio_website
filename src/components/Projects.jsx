import React from "react";
import { Link, Outlet } from "react-router-dom";
import Nav from  '../components/Nav.jsx';

function Projects(){
  return (
  <body> 
    <Nav/>
    
    <br/> 
    <h1>Projects</h1>
    <br/> 

    <section class="resume">

                <h3>EmpMng  (September 2025)</h3>
                <p><strong>Technologies:</strong> Python, Flask, DynamoDB, AWS S3, AWS Amplify, AWS Elastic Beanstalk</p>
                <p>
                  <strong>Employee Manager Full-Stack Web Application</strong> 
                </p>
                <p className="left-center">Full-stack web application that enables administrators to efficiently manage employee records. Users can add, edit, and delete employee information, including name, last name, position, salary, ID number, hire date, and profile image. The platform streamlines workforce management by combining secure data handling with a user-friendly interface, ensuring both functionality and ease of use.</p>
                 <a href="https://empmng.com" target="_blank">Live Demo</a>
                <hr/>

                <h3>Hunger Box (May 2023)</h3>
                <p>(Group project)</p>
                <p><strong>Technologies:</strong> Flutter, Dart, Firebase</p>
                <p className='left-center'>Food ordering mobile app tailored for Hunter College Students designed to connect students with nearby campus vendors. Student users can create accounts to browse menus and place food orders, while vendor users can manage their storefronts by uploading images, editing menu details, and tracking performance through an integrated analytics dashboard that displays sales and other key data.</p>
                <strong><Link to="HungerBox"> App demo video</Link></strong>
                <hr/>

                <h3>Obstacle Course (September 2021)</h3>
                <p>(Group project)</p>
                <p><strong>Technologies:</strong> Unity, C#, Meta Quest 2</p>
                <p className='left-center'>Virtual Reality game for Meta Quest 2 users. Led a team of 3 to create a virtual reality obstacle course game playable on Quest 2. Programmed and implemented the first level that served as the base level for the rest. Implemented player interaction with environment/objects and sound/music effects.</p>
                <strong><Link to="ObstacleCourse"> Gameplay video</Link></strong>

            </section>

           </body>
  )

}

export default Projects;