import React from "react";
import {Link} from "react-router-dom";
import { FaUserCircle} from 'react-icons/fa';
import { IoSearchCircleSharp} from 'react-icons/io5';
import {IconContext} from "react-icons"

import "./Navbar.css"

const Navbar = () => {
    return(
        <div>
            <nav>
                <div className="subbody">
                    <Link to = "/">
                        <div id = "logo">FRANCHISE</div>
                    </Link>
                </div>
                <hr/>
                <div className="classicflex subbody navlinks">
                    <IconContext.Provider value={{ className: 'react-icons' , size: "18px", style: { verticalAlign: 'middle' }}}>
                        <div><FaUserCircle /></div>
                    </IconContext.Provider>
                    <div className = "navchild"><Link to = "/Movies">Movies</Link></div>
                    <div className = "navchild"><Link to = "/TV-Shows">TV Shows</Link></div>
                    <div className = "navchild">Anime</div>
                    <div className = "navchild">Novels</div>
                    <div className = "navchild">Comics</div>
                    <div className = "navchild">Albums</div>
                    <div className = "navchild">Sountracks</div>
                    <IconContext.Provider value={{ className: 'react-icons' , size: "23px", style: { verticalAlign: 'middle' }}}>
                        <div><IoSearchCircleSharp /></div>
                    </IconContext.Provider>
                </div>
                <hr/>
            </nav>
        </div>
    )
}

export default Navbar