import React from 'react'
import { InputBar } from "./InputBar"
import { AnswerContainer } from "./AnswerContainer"
import { QuestionContainer } from "./QuestionContainer"

export const ChatContainer = ({onSubmitHandler, onChangeHandler, question}) => {
  return (
    <div className="chat-container">
        {question.map((pair, index)=>(
          <div className="pair-container" key={index}>
            <QuestionContainer question={pair.question}/>
            <AnswerContainer answer={pair.answer} source={pair.source}/>
          </div>
        ))}

        <InputBar onSubmitHandler={onSubmitHandler} onChangeHandler={onChangeHandler}/>
    </div>
  )
}
