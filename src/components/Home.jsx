import { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Nav from '../components/Nav.jsx';
import '@aws-amplify/ui-react/styles.css';


function Home () {
  
    return (
      
      <><Container >
        <Nav />
        <Row >
          <body>
            <head>
              <link rel="icon" type="image/png" href='/favicon.png'/>
            </head>
          <div>
            <br/> <br/>          
            <Row>
              <img className='profilePic' src= 'https://github.com/albertochan81/portfolio_website/blob/main/public/Images/profile1.jpg?raw=true'/>
            </Row>
          </div>
            <br/> 
            <h1>Alberto Chan Liu</h1>
            <h2>IT Support Specialist</h2>
            <br/>

          <div className='about-section'>
            <h3  className='center'>About Me</h3>

                <p>Hi, I’m Alberto Chan Liu, a Computer Science graduate with a passion for technology, problem-solving, and continuous learning. I was born and raised in Venezuela and later came to the United States to pursue my education and build a better future.</p>

                <p>Before my current role, I worked IT experience as an Airport Systems Support Technician at JFK Airport, providing Tier 1 and Tier 2 support for airport technologies, including CUTE/CUPPS systems, flight information display systems, and kiosks. This experience strengthened my technical troubleshooting skills and gave me hands-on experience with enterprise systems, Windows devices, network infrastructure, and critical airport operations. I also gained value working as an inventory manager at a beauty supply warehouse, where I developed strong skills in organization, efficiency, and operations management.</p>

                <p>I currently work as an IT Helpdesk Coordinator at Animal Care Centers of NYC, providing technical support across multiple locations throughout New York City. My responsibilities include managing Active Directory and Microsoft 365 services, troubleshooting hardware, software, and networking issues, supporting database administration, and maintaining IT equipment. This role has strengthened my ability to resolve technical issues, manage user access, and help maintain reliable and secure IT operations.</p>

                <p>I’ve earned both the CompTIA A+ and AWS Cloud Practitioner certifications, and I continue to expand my technical knowledge through hands-on projects and ongoing learning in areas such as networking, cloud computing, and cybersecurity.</p>

                <p>Whether I’m troubleshooting technical issues, improving IT operations, building software, or exploring innovative ideas, I’m always looking for opportunities to grow, strengthen my skills, and make a meaningful impact through technology.</p>
          </div>
 
          </body>
          
        </Row>
        
        </Container>
      </>
    )
  }
  
  export default Home
  