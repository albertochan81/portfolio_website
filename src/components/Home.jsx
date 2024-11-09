import { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import '@aws-amplify/ui-react/styles.css';
import { Navbar } from 'react-bootstrap';
import Hamburger from 'hamburger-react';


const Home = () => {
    const [count, setCount] = useState(0)
    const [isOpen, setOpen] = useState(false)
  
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
          <br/><br/>




      
          {/* <h3> Resume</h3> */}



          </body>
          
        </Row>
        
        </Container>
      </>
    )
  }
  
  export default Home
  