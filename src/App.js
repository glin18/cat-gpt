import "./App.css";
import { LeftBar } from "./components/LeftBar";
import { MainContainer } from "./components/MainContainer";
import { ChatContainer } from "./components/ChatContainer";
import { useState } from "react";

function App() {
  const [showChat, setShowChat] = useState(false);
  const [message, setMessage] = useState("");
  const [question, setQuestion] = useState([]);
  const POSSIBLE_ANSWERS = [
    "meow ",
    "meowwww meow?? meow meow meow!",
    "meow meow, meow meow meow! meow meow meow meow meow? ",
    "meow meow meow!",
    "meow meowww meow MEOW meow meow meow! ",
  ]

  const input = document.querySelector("input");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(input);
    if (message) {
      const randNum = Math.floor(Math.random()*5)
      const randRepeat = Math.floor(Math.random()*3)
      const answer = POSSIBLE_ANSWERS[randNum].repeat(randRepeat);
      setQuestion([
        ...question,
        {
          question: message,
          answer: answer,
        },
      ]);
      setMessage("");
      setShowChat(true);
    }
    input.value = ""
  };

  const onChangeHandler = (e) => {
    setMessage(e.target.value);
    console.log(e.target.value);
  };

  const onNewChat = () => {
    setShowChat(false);
    setMessage("");
    setQuestion([]);
    
  };

  return (
    <div className="App">
      <LeftBar onNewChat={onNewChat} />
      {!showChat ? (
        <MainContainer
          onSubmitHandler={onSubmitHandler}
          onChangeHandler={onChangeHandler}
        />
      ) : (
        <ChatContainer
          onSubmitHandler={onSubmitHandler}
          onChangeHandler={onChangeHandler}
          question={question}
        />
      )}
    </div>
  );
}

export default App;
