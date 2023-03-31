import React, { useState, useEffect } from "react";
import CatIcon from "../images/cat-icon.png";
import { AnswerText } from "./AnswerText";

export const AnswerContainer = ({ answer, source }) => {

  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="answer-container">
      <div
        className={
          !imageLoaded ? "question-inner-container" : "answer-inner-container"
        }
      >
        <img src={CatIcon}></img>
        <div className="answer-text-container">
          <img
            src={source}
            className={!imageLoaded ? "hidden" : ""}
            onLoad={() => setImageLoaded(true)}
          ></img>
          {imageLoaded ? (
            <div>
              <AnswerText>{answer}</AnswerText>
            </div>
          ) : (
            <div className="loading"></div>
          )}
        </div>
      </div>
    </div>
  );
};
