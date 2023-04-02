import React from 'react'
import "./Footer.css"

import { BsCircleHalf, BsGlobe} from "react-icons/bs";
import { SiInstagram, SiLinkedin, SiBuymeacoffee, SiPatreon, SiPaypal} from "react-icons/si";
import { FaTwitterSquare } from "react-icons/fa";

import {Link} from "react-router-dom";
import {IconContext} from "react-icons"

const Footer = () => {
  return (
    <div>
      <hr/>
        <div className='classicflex subbody navlinks'>
          <IconContext.Provider value={{ className: 'react-icons' , size: "15px", style: { verticalAlign: 'middle' }}}>
            <div><BsGlobe /></div>
          </IconContext.Provider>
          
          <div className = "navchild"><Link to = "/Movies">About</Link></div>
          <div className = "navchild"><Link to = "/Movies">Policies</Link></div>
          <div className = "navchild"><Link to = "/Movies">Masthead</Link></div>
          <div className = "navchild"><Link to = "/Movies">Sitemap</Link></div>
          <div className = "navchild"><Link to = "/Movies">Press Room</Link></div>
          <div className = "navchild"><Link to = "/Movies">Monitor</Link></div>
          <div className = "navchild"><Link to = "/Movies">Contact</Link></div>
          
          
          <IconContext.Provider value={{ className: 'react-icons' , size: "15px", style: { verticalAlign: 'middle' }}}>
            <div><BsCircleHalf /></div>
          </IconContext.Provider>
        </div>
      <hr/>
      
      <div className='subbody classicflex footer-container'>
        <div className='footer-logos-flex'>
          
          <IconContext.Provider value={{ className: 'react-icons' , size: "16px", style: { verticalAlign: 'middle' }}}>
            <div><SiInstagram /></div>
          </IconContext.Provider>

          <IconContext.Provider value={{ className: 'react-icons' , size: "17px", style: { verticalAlign: 'middle' }}}>
            <div><FaTwitterSquare /></div>
          </IconContext.Provider>

          <IconContext.Provider value={{ className: 'react-icons' , size: "16px", style: { verticalAlign: 'middle' }}}>
            <div><SiLinkedin /></div>
          </IconContext.Provider>

        </div>

        <div>
          <div>
            <Link to = "/">
              <div id = "footerlogo">FRANCHISE</div>
            </Link>
          </div>
          <div>
            <center>
            <p>© Copyright – Franchise Media Limited (FML) – 2022</p>
            <p>All Rights Reserved.</p>
            </center>
          </div>
        </div>
        
        <div className='footer-logos-flex'>
          
          <IconContext.Provider value={{ className: 'react-icons' , size: "16px", style: { verticalAlign: 'middle' }}}>
            <div><SiBuymeacoffee /></div>
          </IconContext.Provider>

          <IconContext.Provider value={{ className: 'react-icons' , size: "16px", style: { verticalAlign: 'middle' }}}>
            <div><SiPaypal /></div>
          </IconContext.Provider>

          <IconContext.Provider value={{ className: 'react-icons' , size: "16px", style: { verticalAlign: 'middle' }}}>
            <div><SiPatreon /></div>
          </IconContext.Provider>

        </div>
      
      </div>
    
    </div>
  )
}

export default Footer