import React from 'react'
import "./Card.css"
import Author from '../author/Author'



const Card = (props) => {
  return (
    <div className='card'>
        <div>
        <div><img src = {props.image} className='card-child-image' alt = {props.imgAlt}></img></div>
            <div>
                <h2>
                  {props.title}
                </h2>
            </div>
            <div>
                <p>
                  {props.description}
                </p>
            </div>          
        </div>
        
        <Author />
    </div>
  )
}

export default Card