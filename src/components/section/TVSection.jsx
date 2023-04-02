import React from 'react'

import Card from '../card/Card'
import Navigator from '../navigator/Navigator'

import GameofThrones from "../../assets/media/images/tvshows/GameofThrones.jpeg"
import GreysAnatomy from "../../assets/media/images/tvshows/GreysAnatomy.jpeg"
import theHungerGames from "../../assets/media/images/tvshows/theHungerGames.jpeg"
import theSopranos from "../../assets/media/images/tvshows/theSopranos.jpeg"
import TheWalkingDead from "../../assets/media/images/tvshows/TheWalkingDead.jpeg"
import LOTR from "../../assets/media/images/tvshows/LOTR.png"


import "./Section.css"

const TVSection = (props) => {
  return (
    <div className = "subbody">
        <div className = "section-title-flex">
          <div>
            <h1>{props.sectionHeading}</h1>
          </div>
          
          <Navigator/>

        </div>
        
        <hr id = "card-grid-seperator"/>
        
        <div className='cardgrid'>
          
          <Card 
          
          image = {GameofThrones}
          imgAlt = "Game of Thrones"
          title = "The Reign of Game of Thrones"
          description = "Game of Thrones is a medieval fantasy television series created by David Benioff and D. B. Weiss. It is based on the A Song of Ice and Fire book series by George R. R. Martin"
          
          />

          <Card 

          image = {LOTR}
          imgAlt = "The Lord of the Rings"
          title = "The Hobbit & The Lord of the Rings"
          description = "The Lord of the Rings is a series of three epic fantasy adventure films directed by Peter Jackson, based on the novel The Lord of the Rings by J. R. R. Tolkien."                    
          
          />

          <Card 
          
          image = {theHungerGames}
          imgAlt = "The Hunger Games"
          title = "The Hunger Games Franchise"
          description = "The Hunger Games is a science fiction media franchise created by Suzanne Collins, centered around a series of young adult novels."
          
          />
          
          <Card 
          
          image = {theSopranos}
          imgAlt = "The Sopranos"
          title = "The World of Sopranos"
          description = "It follows the life of Tony Soprano, a New Jersey-based Italian-American mobster, as he balances his family life with his role as the leader of a criminal organization.  The show is widely regarded as one of the greatest television dramas of all time"
          
          />

          <Card 
          
          image = {TheWalkingDead}
          imgAlt = "The Walking Dead"
          title = "The Walking Dead Universe"
          description = "A post-apocalyptic horror TV series based on the comic book series of the same name by Robert Kirkman. The show first aired in 2010 and follows a group of survivors"
      
          />

          <Card 
          
          image = {GreysAnatomy}
          imgAlt = "Greys Anatomy"
          title = "The Saga of Grey's Anatomy"
          description = "The show is set in the fictional Grey Sloan Memorial Hospital in Seattle and follows the lives and careers of surgical residents, attending physicians, and their mentors."
          
          />

        </div>

    </div>
  )
}

export default TVSection