import React from 'react'

import "./ArticleSection.css"

import AdvertPoster from "../../advertposter/AdvertPoster"
import VideoNavigator from "../../videoNavigator/VideoNavigator"

import StarWarsPoster from "../../../assets/media/images/movies/StarWars-1.jpeg"
import Navigator from '../../navigator/Navigator'

import StarWarsIV from "../../../assets/media/videos/Star Wars Episode IV_ A New Hope - Trailer.mp4"

const ArticleSection = () => {
  return (
    <div className="subbody">
        
            <div className="Article-Section-Header">

                <div>
                    <h1>Theatrical Release Order</h1>
                </div>
                <div>
                    <Navigator/>
                </div>                

            </div>

        <div className="Article-Section">
            <div className="Article-Section-Main-Content">
                <div>
                    <p>
                    The most obvious answer is theatrical release order, since this is how the movies were shown and what George Lucas intended. It starts with the original trilogy, then takes us back to the prequel movies, before finishing with Disney's sequel films.
                    
                    <br/>
                    <br/>
                    
                    Following this order, you get the story of Luke overcoming Darth Vader, followed by Vader's origin story, then see Rey pick up the legacy Luke left behind. This can get a little awkward if you intend to add the standalone Star Wars films to your watch party. Going by release date, Rogue One and Solo would interrupt the sequel trilogy.
                    
                    <br/>
                    <br/>
                    
                    If you're doing a re-watch and are interested in preserving the storyline of the core movies, just skip these two films. They have no impact on the overarching narrative, anyway. First-timers who want the full experience can certainly watch them in release order, or place the standalone films before or after the sequel trilogy. 

                    <br/>
                    <br/>

                    Another option is to incorporate the standalone Star Wars films into your watch party by placing them before or after the sequel trilogy. This way, you can maintain the chronological flow of the main storyline while enjoying additional adventures in the Star Wars universe. Either way, these standalone films offer unique perspectives and expand upon the rich tapestry of the Star Wars saga.
                    </p>
                </div>
                
                
                <div>
                    <img src = {StarWarsPoster} alt = "StarWars Poster" className="Article-Section-Main-Poster"></img>
                </div>
                

            </div>

            <span className="smallerspace"></span>

            <hr/>

            <span className="smallerspace"></span>

            <div>
                <p>If you want to go by release order, your marathon should look like this:</p>
                    <ol>
                        <li>Star Wars Episode IV: A New Hope</li>

                        <li>Star Wars Episode V: The Empire Strikes Back</li>

                        <li>Star Wars Episode VI: Return of the Jedi</li>

                        <li>Star Wars Episode I: The Phantom Menace</li>

                        <li>Star Wars Episode II: Attack of the Clones</li>

                        <li>Star Wars Episode III: Revenge of the Sith</li>

                        <li>Star Wars Episode VII: The Force Awakens</li>

                        <li>Rogue One (optional)</li>

                        <li>Star Wars Episode VIII: The Last Jedi</li>

                        <li>Solo (optional)</li>

                        <li>Star Wars Episode IX: The Rise of Skywalker</li>
                    </ol>
            </div>

            

            <span className="smallerspace"></span>

            <hr/>

            <span className="quitethesmallspace"></span>

            <div className="Article-Trailer-Heading">
                <div>
                    <h1>Trailers</h1>
                </div>
                <div>
                    <p>Sorted according to the list mentioned above</p>
                </div>
            </div>

            <div>
                <div>
                    <h2>1. Star Wars Episode IV: A New Hope</h2>
                </div>
                
                <video controls = "controls" preload="metadata">
                    <source src = {StarWarsIV} type="video/mp4"/>
                </video>
            </div>

            

            <div>
                <VideoNavigator/>
            </div>

            
        
        </div>

    </div>
  )
}

export default ArticleSection