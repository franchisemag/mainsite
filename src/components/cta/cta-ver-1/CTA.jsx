import React from 'react'
import "./CTA.css"

import TheGodfather from "../../assets/media/images/movies/TheGodfather.jpeg"
import BreakingBad from "../../assets/media/images/tvshows/BreakingBad.jpeg"
import TheFlashOfTwoWorlds from "../../assets/media/images/comics/coverpics/TheFlashOfTwoWorlds.jpeg"

const CTA = () => {
  return (
    <div className="subbody">
        <div className="cta-box">
            <div className="img-carousel">
                <div>
                    <img src={TheGodfather} className="media-poster"/>
                </div>
                <div>
                    <img src={TheFlashOfTwoWorlds} className="media-poster"/>
                </div>
                <div>
                    <img src={BreakingBad} className="media-poster"/>
                </div>
            </div>
            <div className="CTAtext">
                <div>
                <h2>Stay in the loop on all things entertainment</h2>
                <h2>Sign-up for our weekly newsletter</h2>
                </div>
                <div className='CTAform'>
                    <input type="text" placeholder = "Email"/>
                    <input type="submit" value="Join"/>
                </div>
                <div>
                <p><b>Why should you consider signing up?</b></p>
                <ul className='CTAlist'>
                    <li>Get interesting content delivered  personally to your mailbox!</li>
                    <li>Receive updates whenever a new article gets published on the site!</li>
                    <li>Get exclusive access to beyond the articles’ content, and get to read them a day earlier before their actual posting!</li>
                    <li>Be the first to know about exciting giveaways and promotions!</li>
                </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CTA