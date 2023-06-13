import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"

import marvel from "../../assets/media/images/movies/Marvel.jpeg"

import Navigator from '../navigator/Navigator'
import Author from '../author/Author'

const Header = () => {
    return (
        <div>
            <div className="subbody">
                <Link>
                    <header>
                        
                        <div>
                            <img src={marvel} alt="starwars-poster" id="header-img"></img>
                        </div>

                        <div className = "text-auth-seperator">
                            
                            <div>
                                <div>
                                    <h2>Explore the Marvel Cinematic Universe</h2>
                                </div>
                                <div>
                                    <p>
                                    The Marvel Cinematic Universe (MCU) is an American media franchise and shared universe centered on a series of superhero films produced by Marvel Studios. The films are based on characters that appear in American comic books published by Marvel Comics. The franchise also includes television series, short films, digital series, and literature. The shared universe, much like the original Marvel Universe in comic books, was established by crossing over common plot elements, settings, cast, and characters.
                                    </p>
                                </div>
                            </div>

                            <Author />
                                
                        </div>
                            
                    
                    </header>
                </Link>

                <Navigator/>

            </div>
        </div>
    )
}

export default Header