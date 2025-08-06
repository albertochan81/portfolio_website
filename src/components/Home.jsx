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
              <img className='profilePic' src= 'https://github.com/albertochan81/portfolio_website/blob/main/public/Images/profile-pic.jpg?raw=true'/>
            </Row>
          </div>
            <br/> 
            <h1>Alberto Chan Liu</h1>
            <h2>Airport Systems Support Technician</h2>
            <br/>

          <div className='about-section'>
            <h3  className='center'>About Me</h3>
                <p>Hi, I’m Alberto Chan Liu, a Computer Science graduate with a passion for technology, problem-solving, and continuous learning. I was born and raised in Venezuela and later came to the United States to pursue my education and build a better future.</p>

                <p>Before transitioning fully into tech, I worked as an inventory manager at a beauty supply warehouse, where I developed strong skills in organization, efficiency, and operations management. I also worked as a courier for FedEx Express, which taught me the importance of time management, reliability, and customer service under pressure.</p>

                <p>I currently work as an Airport Systems Support Technician, where I provide front-line IT support for various airport technologies. This role has strengthened my technical troubleshooting skills and given me real-world experience with critical infrastructure systems.</p>

                <p>I’ve earned both the CompTIA A+ and AWS Cloud Practitioner certifications, and I continue to build my knowledge through hands-on projects and ongoing learning in areas like networking and cybersecurity.</p>

                <p>Whether it’s building software, solving problems, or exploring innovative ideas, I’m always looking for ways to grow and make an impact.</p>
            </div>
 
          </body>
          
        </Row>
        
        </Container>
      </>
    )
  }
  
  export default Home
  