import React, { useEffect } from "react";
import FaceIcon from "../images/smiling-emoticon-square-face.png"

export const QuestionContainer = ({ question }) => {
    useEffect(()=>{
        const chat = document.querySelector(".chat-container")
        chat.scrollTo(0, chat.scrollHeight)
    }, [])

  return (
    <div className="question-container">
      <div className="question-inner-container">
        <img src={FaceIcon}></img>
        <div className="question">{question}</div>
      </div>
    </div>
  );
};
