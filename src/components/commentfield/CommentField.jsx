import React from 'react'
import "./CommentField.css"

const CommentField = (props) => {
  return (
    <div className="Comment">
        <div className="Votation-System">
            <div className="upvote"></div>
            <div className="stat"></div>
            <div className="downvote"></div>
        </div>
        
        <div className="Comment-Field">
        
            <div>
                <img src = {props.image} alt = "Sai Rohit" className="Commentators-IMG"></img>
            </div>

            <div>
                <div className="Comment-Content">
                    <div>
                        <div className="Comment-Field-Header">
                            <div>
                                <b><p>{props.name}</p></b>
                            </div>
                            
                            <div><p>•</p></div>
        

                            <div>
                                <p>{props.date}</p>
                            </div>
                        </div>
                        <span className="quitethemuchsmallerspace"></span>
                        <div>
                            <p>
                                {props.content}  
                            </p>
                        </div>
                    </div>
                </div>

                <div className="Comment-Actions">
                    <div>
                        <div>
                            <p>Like</p>
                        </div>
                        <div>
                            <p>Reply</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Report</p>
                        </div>
                    </div>
                </div>

            </div>
        
        </div>
        
    </div>
  )
}

export default CommentField