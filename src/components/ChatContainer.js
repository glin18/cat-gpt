import React from 'react'
import { InputBar } from "./InputBar"
import FaceIcon from "../images/smiling-emoticon-square-face.png"

export const ChatContainer = ({onSubmitHandler, onChangeHandler, question}) => {
  return (
    <div className="chat-container">
        <div className="question-container">
            <div className="question-inner-container">
                <img src={FaceIcon}></img>
                <div className="question">{question}</div>
            </div>
        </div>
        <div className="answer-container">

        </div>
        <InputBar onSubmitHandler={onSubmitHandler} onChangeHandler={onChangeHandler}/>
    </div>
  )
}
