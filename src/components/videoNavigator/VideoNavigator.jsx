import React from 'react'
import "./VideoNavigator.css"

import { BsArrowLeftCircle, BsArrowRightCircle, BsCircle, BsCircleFill } from 'react-icons/bs';
import { IconContext } from "react-icons"

const VideoNavigator = () => {
  return (
    <div className="navigator">
        <IconContext.Provider value={{ className: 'react-icons', size: "16px", style: { verticalAlign: 'middle' } }}>
            <div><BsArrowLeftCircle /></div>
        </IconContext.Provider>

        <IconContext.Provider value={{ className: 'react-icons', size: "16px", style: { verticalAlign: 'middle' } }}>
            <div><BsCircleFill /></div>
        </IconContext.Provider>

        <IconContext.Provider value={{ className: 'react-icons', size: "16px", style: { verticalAlign: 'middle' } }}>
            <div><BsCircle /></div>
        </IconContext.Provider>

        <IconContext.Provider value={{ className: 'react-icons', size: "16px", style: { verticalAlign: 'middle' } }}>
            <div><BsCircle /></div>
        </IconContext.Provider>
        
        <IconContext.Provider value={{ className: 'react-icons', size: "16px", style: { verticalAlign: 'middle' } }}>
            <div><BsCircle /></div>
        </IconContext.Provider>

        <IconContext.Provider value={{ className: 'react-icons', size: "16px", style: { verticalAlign: 'middle' } }}>
            <div><BsArrowRightCircle /></div>
        </IconContext.Provider>
    </div>
  )
}

export default VideoNavigator