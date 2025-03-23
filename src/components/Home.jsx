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
            <h1 className='glow-text'>Alberto Chan Liu</h1>
            <h2>Computer Science Graduate</h2>
            <br/>

 
          </body>
          
        </Row>
        
        </Container>
      </>
    )
  }
  
  export default Home
  