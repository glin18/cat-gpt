import React, { useState, useEffect } from "react";
import CatIcon from "../images/cat-icon.png";
import { AnswerText } from "./AnswerText";

export const AnswerContainer = ({ answer }) => {
  // const [isLoading, setIsLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsLoading(false);
  //   }, 4000);
  //   return () => clearTimeout(timer);
  // }, []);

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
            src={`https://cataas.com/cat/gif?${performance.now()}`}
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
