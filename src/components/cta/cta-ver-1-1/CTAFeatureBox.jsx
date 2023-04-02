import React from 'react'
import "./CTA.css"

const CTAFeatureBox = (props) => {
  return (
    <div className="CTAFeatureBox">
        <span className="material-symbols-outlined">
            {props.symbol}
        </span>
        <div>
            <p>
            {props.text}
            </p>
        </div>
    </div>
  )
}

export default CTAFeatureBox