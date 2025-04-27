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
                <p><strong>Hunter College of CUNY, New York, NY</strong> — Bachelor in Computer Science<br/><strong>Graduated:</strong>  June 2023</p>
                <p><strong>Coursework:</strong> Data Structures, Database, Web Development, Operating Systems, VR/AR and Mixed Reality, Statistics</p>
                <br/>
                <p><strong>Kingsborough Community College, Brooklyn, NY</strong> — Associate of Science in Computer Science<br/><strong></strong>Graduated: January 2021</p>
                <p><strong>Coursework:</strong> Intro to Programming, Computer Architecture, Discrete Math, Calculus, Assembly Language</p>
           
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

          </Container>
   </body>
  )
}

export default Resume;