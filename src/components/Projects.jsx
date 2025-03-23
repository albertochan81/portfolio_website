import React from "react";
import { Link, Outlet } from "react-router-dom";
import Nav from  '../components/Nav.jsx';

function Projects(){
  return (
  <body> 
    <Nav/>
    
    <br></br>
    <h1>Projects</h1>
    <br></br>

    <section class="resume">

                <h3>Hunger Box (May 2023)</h3>
                <p>(Group project)</p>
                <p><strong>Technologies:</strong> Flutter, Dart, Firebase</p>
                <p className='left-center'>Food Ordering App tailored for Hunter College Students. Implemented the frontend of menu items and analytics screen, as well as the analytics backend.</p>
                <Link to="HungerBox"> App demo video</Link>
                <hr/>

                <h3>Employee Manager (May 2023)</h3>
                <p><strong>Technologies:</strong> JavaScript, CSS, HTML, Node.js, PostgreSQL, Heroku</p>
                <p className='left-center'>React Employee management web application. Programmed a CRUD employee management site with a team of 3. Worked on the backend using PostgreSQL to update the database. Contributed to the frontend to create a pleasant interaction between users and functionality of the program.</p>
                <hr/> 

                <h3>Obstacle Course (September 2021)</h3>
                <p><strong>Technologies:</strong> Unity, C#, Meta Quest 2</p>
                <p className='left-center'>Virtual Reality game for Meta Quest 2 users. Led a team of 3 to create a virtual reality obstacle course game playable on Quest 2. Programmed and implemented the first level that served as the base level for the rest. Implemented player interaction with environment/objects and sound/music effects.</p>
                <Link to="ObstacleCourse"> Gameplay video</Link>

            </section>

           </body>
  )

}

export default Projects;