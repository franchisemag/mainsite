import React from "react"

import "./ArticleHeader.css"

import StarWars from "../../../assets/media/images/movies/StarWars.jpeg"
import PageTitle from "../../pagetitle/PageTitle"

const ArticleHeader = () => {
    return(
        <div className="subbody">

            <PageTitle name = {"Star Wars Franchise"}/>


            <img src={StarWars} alt = "StarWars" className="Article-Header-Image"></img>

            <span className="smallerspace"/>

            <p>
            Star Wars is a science fiction media franchise created by George Lucas, centered around a film series that began with the 1977 eponymous film. It depicts the adventures of various characters "a long time ago in a galaxy far, far away." The franchise includes multiple films, TV shows, books, comics, video games, and theme park attractions. It is set in a fictional universe that includes a variety of species, technology, and force-powered individuals, most notably Jedi and Sith. The franchise has a large and dedicated fanbase, and is considered a cultural phenomenon.
            <br/>
            <br/>
            It's never been easier to marathon the whole series, but before you press play on the first movie, it's important to decide your preferred viewing order. Do you start with the original trilogy or the prequel movies? What about the standalone films and the television shows? Here is how to watch Star Wars in order, whichever order you choose.
            </p>
        
        </div>
    )
}

export default ArticleHeader