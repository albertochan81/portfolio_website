import { useState } from 'react'
import { Link } from "react-router-dom";
//import { Navbar } from 'react-bootstrap';
import Hamburger from 'hamburger-react';


//const Nav = () => {
  function Nav(){
  const [isOpen, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!isOpen);
  };
  
return (

      // <Navbar>
      <div>
        <Hamburger toggled={isOpen} toggle={handleToggle} />
        {isOpen &&(
          <div className='navContainer'>
            <ul className='nav' >
              <li><Link to="/" onClick={handleToggle}>Home</Link></li>
              <li><Link to="/resume" onClick={handleToggle}>Resume</Link></li>
              <li><Link to="/contact" onClick={handleToggle}>Contact</Link></li>
              <li><Link to="/projects" onClick={handleToggle}>Projects</Link></li>
            </ul>
          </div>
        )}
        </div>
      // </Navbar>
      );
    }
  
  export default Nav
  