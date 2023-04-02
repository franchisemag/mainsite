import React from 'react'
import "./CTA.css"

import StarWars from "../../../assets/media/images/movies/StarWars-1.jpeg"
import theCatcherintheRye from "../../../assets/media/images/novels/theCatcherintheRye.jpeg"
import TheGodfather from "../../../assets/media/images/movies/TheGodfather.jpeg"
import BreakingBad from "../../../assets/media/images/tvshows/BreakingBad.jpeg"
import TheFlashOfTwoWorlds from "../../../assets/media/images/comics/coverpics/TheFlashOfTwoWorlds.jpeg"

import CTAFeatureBox from './CTAFeatureBox'

const CTA = () => {
  return (
    <div className="subbody">
        <div className="CTABox">
            <div>
                <h2 className="CTAheading">
                Stay in the loop on all things entertainment<br/>
                Sign-up for our weekly newsletter
                </h2>
            </div>
            <div className="CTAForm">
                <input type="text" placeholder = "Email"/>
                <input type="submit" value="Join"/>
            </div>
            <div className="CTAImgCarousel">
                {/* <div>
                    <img src = {TheGodfather} alt = "theCatcherintheRye" className="CTAImage"></img>
                </div> */}
                <div>
                    <img src = {theCatcherintheRye} alt = "theCatcherintheRye" className="CTAImage"></img>
                </div>
                <div>
                    <img src = {TheGodfather} alt = "theCatcherintheRye" className="CTAImage"></img>
                </div>
                <div>
                    <img src = {BreakingBad} alt = "theCatcherintheRye" className="CTAImage"></img>
                </div>
                <div>
                    <img src = {TheFlashOfTwoWorlds} alt = "theCatcherintheRye" className="CTAImage"></img>
                </div>
                <div>
                    <img src = {StarWars} alt = "theCatcherintheRye" className="CTAImage"></img>
                </div>
                {/* <div>
                    <img src = {theCatcherintheRye} alt = "theCatcherintheRye" className="CTAImage"></img>
                </div> */}
            </div>
            <div>
                <h2 className="CTAheading">
                    Why should you consider signing up?
                </h2>
            </div>
            <div className="CTAFeatures">
                
                <CTAFeatureBox
                symbol = "mail"
                text = "Get interesting content delivered  personally to your mailbox!"
                />

                <CTAFeatureBox
                symbol = "history"
                text = "Receive updates whenever a new article gets published on the site!"
                />

                <CTAFeatureBox
                symbol = "login"
                text = "Get exclusive access to beyond the articles’ content"
                />

                <CTAFeatureBox
                symbol = "volunteer_activism"
                text = "Be the first to know about exciting giveaways and promotions!"
                />

                <CTAFeatureBox
                symbol = "acute"
                text = "Get to read them a day earlier before their actual posting!"
                />
                
            </div>
        </div>
    </div>
  )
}

export default CTA