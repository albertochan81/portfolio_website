import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
/*import Image from 'react-bootstrap/Image';
import background from '/public/images/background.jpg'*/
import { Image } from '@aws-amplify/ui-react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <><Container>
      <Row>
    
      
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
    
      
        
         
        
     
      <h1>Alberto Chan Liu</h1>
      <h2>Computer Science Graduate</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 2)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      
      
      
      </Row>
      <Row>
      <Image alt="Background" src= '/public/images/background.jpg' objectFit="initial"
        objectPosition="50% 50%"
        backgroundColor="initial"
        height="75%"
        width="75%"
        opacity="100%" />
      </Row>
      <Image alt="Background" src= '/public/images/background.png' objectFit="initial"
        objectPosition="50% 50%"
        backgroundColor="initial"
        height="75%"
        width="75%"
        opacity="100%" />
      </Container>
    </>
  )
}

export default App
