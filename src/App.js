import "./App.css";
import { LeftBar } from "./components/LeftBar";
import { MainContainer } from "./components/MainContainer";
import { ChatContainer } from "./components/ChatContainer";
import { useState } from "react";

function App() {
  const [showChat, setShowChat] = useState(false);
  const [message, setMessage] = useState("");
  const [question, setQuestion] = useState([]);

  const input = document.querySelector("input");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (message) {
      const answer = "meow meow meow meow meow meow";
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
  };

  const onChangeHandler = (e) => {
    setMessage(e.target.value);
    console.log(e.target.value);
  };

  const onNewChat = () => {
    setShowChat(false);
    setMessage("");
    // input.value = ""
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
