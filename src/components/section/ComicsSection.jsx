import React from 'react'
import Card from '../card/Card'

import Navigator from '../navigator/Navigator'

import StarWars from "../../assets/media/images/movies/StarWars.jpeg"
import HarryPotter from "../../assets/media/images/movies/HarryPotter.png"
import IndianaJones from "../../assets/media/images/movies/IndianaJones.jpg"
import Transformers from "../../assets/media/images/movies/Transformers.png"
import Transporter from "../../assets/media/images/movies/Transporter.jpeg"
import BondJamesBond from "../../assets/media/images/movies/007.jpeg"

import "./Section.css"

const ComicsSection = (props) => {
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
          
          image = {StarWars}
          imgAlt = "StarWars"
          title = "The Star Wars Universe"
          description = "Star Wars is an American epic space opera multimedia franchise created by George Lucas, which began with the eponymous 1977 film and quickly became a worldwide pop culture phenomenon."
          
          />

          <Card 
          
          image = {HarryPotter}
          imgAlt = "HarryPotter"
          title = "The Harry Potter Franchise"
          description = "Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends who are students at Hogwarts School of Witchcraft and Wizardry."
          
          />

          <Card 
          
          image = {IndianaJones}
          imgAlt = "IndianaJones"
          title = "The Complete Adventures of Indiana Jones"
          description = "Indiana Jones is a media franchise created by George Lucas and Steven Spielberg, centered around the adventures of the eponymous character, Dr. Henry Walton Jones Jr., a professor of archaeology and adventurer."
          
          />
          
          <Card 
          
          image = {Transformers}
          imgAlt = "Transformers"
          title = "The Transformers Franchise "
          description = "Transformers is a series of science fiction action films based on the Transformers franchise of the 1980s. Michael Bay directed the first five films, and has served as a producer for subsequent films."
          
          />

          <Card 
          
          image = {Transporter}
          imgAlt = "Transporter"
          title = "The Transporter Franchise"
          description = "Transporter (French: Le Transporteur) is a French action thriller film franchise, comprising four films released between 2002 and 2015, and a television series."
      
          />

          <Card 
          
          image = {BondJamesBond}
          imgAlt = "BondJamesBond"
          title = "James Bond: The 007 Universe"
          description = "James Bond is a fictional character created by British novelist Ian Fleming in 1953. A British secret agent working for MI6 under the codename 007."
          
          />

        </div>

    </div>
  )
}

export default ComicsSection