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
          <div>
            <br/> <br/>          
            <Row>
              <img className='profilePic' src= 'https://raw.githubusercontent.com/albertochan81/portfolio_website/refs/heads/main/public/Images/profile_pic.jpg'/>
            </Row>
          </div>
            <br/> 
            <h1>Alberto Chan Liu</h1>
            <h2>Computer Science Graduate</h2>
            <br/>

          <div className='about-section'>
            <h3>About Me</h3>
                <p>Hi, I’m Alberto Chan Liu, a recent Computer Science graduate with a passion for technology, problem-solving, and continuous learning. I was born and raised in Venezuela and later came to the United States to pursue my education and build a better future.</p>

                <p>Before transitioning fully into tech, I worked as an inventory manager at a beauty supply warehouse, where I developed strong skills in organization, efficiency, and operations management. My diverse background has shaped my ability to approach challenges with creativity and practicality.</p>

                <p>Currently, I am actively involved in testing projects to strengthen my hands-on experience, and I am also pursuing professional certifications, such as CompTIA, to further build my technical skills and industry knowledge.</p>

                <p>Whether it’s building software, solving problems, or exploring innovative ideas, I’m always looking for ways to grow and make an impact.</p>
            </div>
 
          </body>
          
        </Row>
        
        </Container>
      </>
    )
  }
  
  export default Home
  