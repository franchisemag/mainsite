import React from 'react'
import "./PageTitle.css"

const PageTitle = (props) => {
  return (
    <div className='subbody'>
        <center>
            <div id = "text">{props.name}</div>
        </center>
    </div>
  )
}

export default PageTitle