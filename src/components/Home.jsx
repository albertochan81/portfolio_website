import { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import '@aws-amplify/ui-react/styles.css';


const Home = () => {
  
    return (
      <><Container >
        <Row >
          <body>
          <div>

            <p>
              <b>Website in progress</b>
            </p>
            <br/>
          
            <Row>
              <img src= 'https://raw.githubusercontent.com/albertochan81/staticwebsite/refs/heads/main/public/Images/profile_pic4.HEIC'/>
            </Row>
          </div>
        
          <h1>Alberto Chan Liu</h1>
          <h2>Computer Science Graduate</h2>
          <br/><br/><br/><br/>

          <Container className='resume'>
            <h1> Resume</h1>

            <section>
                <h2>Education</h2>
                <p><strong>Hunter College, New York, NY</strong> — Bachelor in Computer Science<br/><strong>Graduated:</strong>  June 2023</p>
                <p><strong>Coursework:</strong> Data Structures, Database, Web Development, Operating Systems, VR/AR and Mixed Reality, Statistics</p>
            </section>

            <hr/>

            <section>
                <h2>Skills</h2>
                <ul>
                    <li><strong>Operating Systems:</strong> Windows, Linux, macOS</li>
                    <li><strong>Hardware Troubleshooting:</strong> CompTIA A+ Certification (In Progress)</li>
                    <li><strong>Networking Basics:</strong> CompTIA A+ Certification (Network troubleshooting, basic IP configuration in Progress)</li>
                    <li><strong>Programming Languages:</strong> C++, Java, Dart, Scala</li>
                    <li><strong>Web Technologies:</strong> JavaScript, HTML, CSS</li>
                    <li><strong>Database Management:</strong> SQL, NoSQL</li>
                </ul>
            </section>

            <hr/>

            <section>
                <h2>Certifications</h2>
                <p><strong>AWS Cloud Practitioner Certification</strong> (Expires March 2027)</p>
                <p><strong>CompTIA A+ Certification </strong>- In Progress </p>
            </section>

            <hr/>

            <section>
                <h2>Employment History</h2>

                <h3>Inventory Manager - Gigi Beauty Supply</h3>
                <p><strong>Location:</strong> 145 58th St Brooklyn, NY<br/><strong>November 2016 - December 2022</strong></p>
                    <ul>
                
                        <li><strong>Inventory Management:</strong> Leveraged Cin 7 cloud system and Excel to maintain inventory accuracy of 90% across three store branches.</li>
                        <li><strong>Quality Control:</strong> Oversaw quality control processes and outbound shipments of the company’s Amazon FBA inventory, ensuring timely and accurate delivery.</li>
                        <li><strong>Optimization:</strong> Achieved inventory optimization by reducing excess inventory by 20%.</li>
                    </ul><br/>
                
                    <h3>Courier - FedEx Express</h3>
                    <p><strong>Location:</strong> 58-60 55th Dr, Maspeth, NY <br/><strong>March 2024 - Present</strong></p>

                    <ul>
                        <li><strong>Utilized Technology:</strong> Leverage FedEx software technology to organize and optimize delivery routes efficiently and in a timely manner.</li>
                        <li><strong>Customer Interaction:</strong> Provide excellent customer service, addressing inquiries by paying attention to details and ensuring accurate and secure handling of packages.</li>
                        <li><strong>Problem Solving:</strong> Identify and resolve delivery issues, such as incorrect addresses or package discrepancies, enhancing overall efficiency.</li>
                        <li><strong>Achievements:</strong> Achieved “Employee of the Month” Award within the first 3 months of employment.</li>
                    </ul>
                
            </section>

            <hr/>

            <section>
                <h2>Projects</h2>

                <h3>Hunger Box (May 2023)</h3>
                <p><strong>Technologies:</strong> Flutter, Dart, Firebase</p>
                <p>Food Ordering App tailored for Hunter College Students. Implemented the frontend of menu items and analytics screen, as well as the analytics backend.</p>

                <h3>Employee Manager (May 2023)</h3>
                <p><strong>Technologies:</strong> JavaScript, CSS, HTML, Node.js, PostgreSQL, Heroku</p>
                <p>React Employee management web application. Programmed a CRUD employee management site with a team of 3. Worked on the backend using PostgreSQL to update the database. Contributed to the frontend to create a pleasant interaction between users and functionality of the program.</p>

                <h3>Obstacle Course (September 2021)</h3>
                <p><strong>Technologies:</strong> Unity, C#, Meta Quest 2</p>
                <p>Virtual Reality game for Meta Quest 2 users. Led a team of 3 to create a virtual reality obstacle course game playable on Quest 2. Programmed and implemented the first level that served as the base level for the rest. Implemented player interaction with environment/objects and sound/music effects.</p>
            </section>



          </Container>
          <br/><br/>

          <section class="resume">
              <h2>Contact Information</h2>
              <p>If you would like to get in touch, feel free to reach out to me through the following methods:</p>
              <ul>
                  <li><strong>Phone:</strong> (646) 853-9674</li>
                  <li><strong>Email:</strong> <a href="mailto:albertochanliu@gmail.com">albertochanliu@gmail.com</a></li>
                  <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/alberto-chan-liu-597847275/" target="_blank">linkedin.com/in/alberto-chan-liu-597847275</a></li>
                  <li><strong>GitHub:</strong> <a href="https://github.com/albertochan81" target="_blank">github.com/albertochan81</a></li>
              </ul>
           </section>


          </body>
          
        </Row>
        
        </Container>
      </>
    )
  }
  
  export default Home
  