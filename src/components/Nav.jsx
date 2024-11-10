import { useState } from 'react'
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
              <li>Home</li>
              <li>About me</li>
              <li>Resume</li>
              <li>Contact</li>
            </ul>
          </div>
        )}
        </div>
      // </Navbar>

    )
    }
  
  export default Nav
  