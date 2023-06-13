import React from 'react'
import "./Author.css"

import sairohit from "../../assets/media/images/authors/sairohit.png"

const Author = () => {
  return (
    <div className = "author">
        <div className = "author-details">
            <div className = "authorpic-encloser">
                <img src = {sairohit} className = "author-profile-pic" alt = "profile"></img>
            </div>
            <div className="authortext-date">
                <div><h6><b>Sai Rohit</b></h6></div>
                <div><h6>15/01/2023</h6></div>
            </div>
        </div>
        <div className = "author-category"><h6><b>Adventure</b></h6></div>
    </div>
  )
}

export default Author