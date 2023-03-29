import './App.css';
import { LeftBar } from "./components/LeftBar"
import { MainContainer } from "./components/MainContainer"
import { ChatContainer } from "./components/ChatContainer"
import { useState } from "react";

function App() {
  const [ showChat, setShowChat ] = useState(false)

  return (
    <div className="App">
      <LeftBar/>
      {!showChat ? <MainContainer/> : <ChatContainer/>}
    </div>
  );
}

export default App;
