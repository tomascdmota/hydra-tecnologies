import React, {useState} from "react";
import {Link} from "react-router-dom";
import './Navbar.css';
import jsonData from '../../Data/NavData.json'

import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {

    const [isActive, setIsActive] = useState(false);

    
  const toggleClass = (e) => {
    setIsActive(!isActive);
  }

    return(
        <div>
        <nav className="nav" data-testid="navigation">
       
              <h1 className="nav-logo" data-testid="navbar-logo">
                  <h1>HYDRA<span> technologies</span></h1>
              </h1>
            <div className="navbar-container" data-testid="navbar-container">
         
           
           
          <ul className={isActive  ? "nav-menu show-nav" : "nav-menu"}>
          <Link to="/" className='nav-links' >
              <li className='nav-item'>
                <div
                  className='nav-links'>
                  {jsonData.Navigation.home}
                </div>
              </li>
            </Link>

            <Link to="/campaign" className='nav-links'>
              <li className='nav-item'>
                <div
                  className='nav-links'>
                  {jsonData.Navigation.campaign}
                </div>
              </li>
            </Link>

            <Link to="/services"  className='nav-links'>
              <li className='nav-item'>
                <div
                  className='nav-links'>
                  {jsonData.Navigation.services}
                </div>
              </li>
              </Link>

              <Link to="/contacts" className='nav-links'>
                <li className='nav-item'>
                    <div
                      className='nav-links'>
                      {jsonData.Navigation.contacts}
                    </div>
                </li>
              </Link>

             
          </ul>
          
          </div>
          
          <span className='menu-icon'> <MenuIcon className='menu-icon' onClick={toggleClass}/></span>
         
         <Link to="/getQuote" >
          <button href="#getqt"
              id="mybtn"
              type="button"
              className="qbtn"
              data-testid="qbtn">
                {jsonData.Navigation.getquote}
              </button>
              </Link>
            
              
      </nav>
        </div>
    )
};

export default Navbar;
