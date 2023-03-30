import React from "react";
import FaceIcon from "../images/smiling-emoticon-square-face.png"

export const QuestionContainer = ({ question }) => {
  return (
    <div className="question-container">
      <div className="question-inner-container">
        <img src={FaceIcon}></img>
        <div className="question">{question}</div>
      </div>
    </div>
  );
};
