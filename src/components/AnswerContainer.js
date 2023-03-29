import React, { useState, useEffect } from "react";
import CatIcon from "../images/cat-icon.png"

export const AnswerContainer = () => {
    const [ isLoading, setIsLoading ] = useState(true)

    useEffect(()=>{
        const timer = setTimeout(()=>{
            setIsLoading(false)
        }, 4000);
        return () => clearTimeout(timer);
    }, [])

  return (
    <div className="answer-container">
      <div className="question-inner-container">
        <img src={CatIcon}></img>
        { !isLoading ? <div className="question">meow meow meow</div> : <div className="loading"></div>}
      </div>
    </div>
  );
};
