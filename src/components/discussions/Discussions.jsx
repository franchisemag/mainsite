import React from "react-dom"
import "./Discussions.css"

import SaiRohit from "../../assets/media/images/authors/sairohit.png"

import UserFeedbackForm from "../userfeedbackform/UserFeedbackForm"
import CommentField from "../commentfield/CommentField"

const Discussions = () => {
    return (
        <div className="subbody">
            <div className="Discussions-Containter">
                <h2>
                    Your Opinion Matters!<br/>Join the Conversation
                </h2>
                <div>
                    <UserFeedbackForm />
                </div>
                <h2>
                    Discussion
                </h2>

                <CommentField
                image = {SaiRohit}
                name = "Sai Rohit"
                date = "9 Apr 2022" 
                content = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia repellat maiores sapiente nemo, aut repellendus esse sequi eligendi iure accusamus! Voluptas quasi at nihil. Modi assumenda tempore at expedita obcaecati."           
                />
                
                <CommentField
                image = {SaiRohit}
                name = "Sai Rohit"
                date = "9 Apr 2022" 
                content = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia repellat maiores sapiente nemo, aut repellendus esse sequi eligendi iure accusamus! Voluptas quasi at nihil. Modi assumenda tempore at expedita obcaecati."           
                />

                <CommentField
                image = {SaiRohit}
                name = "Sai Rohit"
                date = "9 Apr 2022" 
                content = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia repellat maiores sapiente nemo, aut repellendus esse sequi eligendi iure accusamus! Voluptas quasi at nihil. Modi assumenda tempore at expedita obcaecati."           
                />


            </div>
        </div>
    )
}

export default Discussions