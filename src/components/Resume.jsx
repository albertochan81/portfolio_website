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
                    <p className="logoText"><img className='logo'  src= 'https://github.com/albertochan81/portfolio_website/blob/main/public/Images/AWSlogo.png?raw=true'/> 
                    <strong>  AWS Cloud Practitioner Certification</strong> </p></a>
                    <a href="https://www.credly.com/earner/earned/badge/00abdbe2-7384-4082-9eeb-31c476047843">
                    <p className="logoText"><img className='logo' src= 'https://raw.githubusercontent.com/albertochan81/portfolio_website/85feac7504ffd5a21936a985e342d3629052368e/public/Images/A+.svg'/> 
                    <strong>  CompTIA A+ Certification</strong></p></a>
                </ul>
            </section>

            <hr/>

            <section>
                <h2>Employment History</h2>

                    
                    <h3>Airport Systems Support Technician - ServiceTec International Inc.</h3>
                    <p><strong>Location:</strong> JFK Airport, Jamaica, NY <br/><strong>July 2025 - Present</strong></p>

                    <ul>
                        <li>Provide front-line technical support for airport IT systems including common-use platforms (CUTE/CUPPS), flight information display systems (FIDS), kiosks, and other passenger-facing technologies.</li>
                        <li>Troubleshoot hardware and software issues across a range of devices, including workstations, printers, scanners, servers, and network components.</li>
                        <li>Configure, install, and upgrade hardware and software in accordance with airport IT policies and security protocols.</li>
                        <li>Respond to and resolve technical issues in a timely manner, often under high-pressure operational scenarios.</li>
                        <li>Maintain accurate documentation of support activities, incidents, asset inventory, and system configurations.</li>
                    </ul>

                    <h3>Courier - FedEx Express</h3>
                    <p><strong>Location:</strong> Maspeth, NY <br/><strong>March 2024 - July 2025</strong></p>

                    <ul>
                        <li>Leverage FedEx software technology to organize and optimize delivery routes efficiently and in a timely manner.</li>
                        <li>Provide excellent customer service, addressing inquiries by paying attention to details and ensuring accurate and secure handling of packages.</li>
                        <li>Identify and resolve delivery issues, such as incorrect addresses or package discrepancies, enhancing overall efficiency.</li>
                        <li>Achieved “Employee of the Month” Award twice the first year of employment..</li>
                    </ul>

                    <h3>Inventory Manager - Gigi Beauty Supply</h3>
                    <p><strong>Location:</strong> Brooklyn, NY <br/><strong>November 2016 - December 2022</strong></p>
                    <ul>
                
                        <li>Leveraged Cin 7 cloud system and Excel to maintain inventory accuracy of 90% across three store branches.</li>
                        <li>versaw quality control processes and outbound shipments of the company’s Amazon FBA inventory, ensuring timely and accurate delivery.</li>
                        <li>Achieved inventory optimization by reducing excess inventory by 20%.</li>
                    </ul><br/>
                
                
            </section>

          </Container>
   </body>
  )
}

export default Resume;