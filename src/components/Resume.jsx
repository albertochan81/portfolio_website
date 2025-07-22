import React from "react";
import Container from 'react-bootstrap/Container'
import Nav from  '../components/Nav.jsx';

function Resume() {
  return(
  <body>
  <Nav />
    <br/>
    <h1>Alberto's Resume</h1>
    <br/><br/>
    <Container className='resume'>

            <section>
                <h2>Education</h2>
                <ul>
                    <li><p><strong>Hunter College of CUNY, New York, NY</strong> — Bachelor in Computer Science <br/>
                    <strong>&#x1F393;Graduated:</strong>  June 2023 </p>
                    <p><strong>Coursework:</strong> Data Structures, Database, Web Development, Operating Systems, VR/AR and Mixed Reality, Statistics</p>
                    <br/></li>
                    <li><p><strong>Kingsborough Community College, Brooklyn, NY</strong> — Associate of Science in Computer Science<br/>
                    <strong>&#x1F393; Graduated:</strong> January 2021</p>
                    <p><strong>Coursework:</strong> Intro to Programming, Computer Architecture, Discrete Math, Calculus, Assembly Language</p></li>
                </ul>
            </section>

            <hr/>

            <section>
                <h2>Skills</h2>
                <ul>
                    <li><strong>IT Support and Hardware Troubleshooting:</strong> Windows, Linux, macOS | Hardware Diagnostics | CompTIA A+ Certified; skilled in diagnosing hardware issues, resolving system errors, and maintaining end-user devices.</li>
                    <li><strong>Networking Fundamentals:</strong> Knowledge of IP addressing, subnetting, and basic network troubleshooting</li>
                    <li><strong>Programming Languages:</strong> C++, Java, Dart, Scala.</li>
                    <li><strong>Web Technologies:</strong> JavaScript, HTML, CSS, React.</li>
                    <li><strong>Database Management:</strong> SQL, NoSQL (Firebase)</li>
                    <li><strong>Tools & Platforms:</strong> Git, AWS Amplify, Firebase, Unity, Cin7, Microsoft Office Suite.</li> 
                </ul>
            </section>

            <hr/>

            <section>
                <h2>Certifications</h2>
                <ul>
                    <a href="https://www.credly.com/earner/earned/badge/b46d4159-0416-4411-97f4-33ddfb8b24de">
                    <p className="logoText"><img className='logo'  src= '/images/AWSlogo.png'/> 
                    <strong>  AWS Cloud Practitioner Certification</strong> </p></a>
                    <a href="https://www.credly.com/earner/earned/badge/00abdbe2-7384-4082-9eeb-31c476047843">
                    <p className="logoText"><img className='logo' src= '/images/A+.svg'/> 
                    <strong>  CompTIA A+ Certification</strong></p></a>
                </ul>
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
                        <li><strong>Achievements:</strong>  Achieved “Employee of the Month” Award twice the first year of employment..</li>
                    </ul>
                
            </section>

          </Container>
   </body>
  )
}

export default Resume;