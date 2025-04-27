import { useState } from 'react'
import { Link } from "react-router-dom";
import Hamburger from 'hamburger-react';

  function Nav(){
  const [isOpen, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!isOpen);
  };
  
return (

      <div>
        <Hamburger toggled={isOpen} toggle={handleToggle} />
        {isOpen &&(
          <div>
            <ul className='nav' >
              <li><a><Link to="/" onClick={handleToggle}>Home</Link></a></li>
              <li><a><Link to="/resume" onClick={handleToggle}>Resume</Link></a></li>
              <li><a><Link to="/contact" onClick={handleToggle}>Contact</Link></a></li>
              <li><a><Link to="/projects" onClick={handleToggle}>Projects</Link></a></li>
            </ul>
          </div>
        )}
        </div>
      
      );
    }
  
  export default Nav
  