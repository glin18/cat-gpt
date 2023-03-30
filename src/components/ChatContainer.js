import React from 'react'
import { InputBar } from "./InputBar"
import { AnswerContainer } from "./AnswerContainer"
import { QuestionContainer } from "./QuestionContainer"

export const ChatContainer = ({onSubmitHandler, onChangeHandler, question}) => {
  return (
    <div className="chat-container">
        <QuestionContainer question={question}/>
        <AnswerContainer/>
        {/* <QuestionContainer question={question}/>
        <AnswerContainer/> */}
        <InputBar onSubmitHandler={onSubmitHandler} onChangeHandler={onChangeHandler}/>
    </div>
  )
}
