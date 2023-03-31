import React, { useEffect, useState, useRef } from "react";

export const AnswerText = ({ children }) => {
  const [revealedLetters, setRevealedLetters] = useState(children[0]);
  const [isTyping, setIsTyping] = useState(true);
  const index = useRef(0);
  const chat = document.querySelector(".chat-container");

  useEffect(() => {
    const chat = document.querySelector(".chat-container");
    chat.scrollTo(0, chat.scrollHeight);
  }, []);

  useEffect(() => {
    const tick = () => {
      index.current++;
      setRevealedLetters((prev) => prev + children[index.current]);
    };
    if (index.current < children.length - 1) {
      let addChar = setInterval(tick, 60);
      return () => clearInterval(addChar);
    } else {
      setIsTyping(false);
      chat.scrollTo(0, chat.scrollHeight);
    }
  }, [revealedLetters]);

  return (
    <div>
      <div className="answer-text">
        {revealedLetters}
        {isTyping && <div className="loading"></div>}
      </div>
    </div>
  );
};
