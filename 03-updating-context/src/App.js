import "./App.css";
import Grandparent from "./components/01-Grandparent/Grandparent";
import MessageContext from "./context/MessageContext";
import { useState } from "react";

function App() {
  const [message, setMessage] = useState("passed from context");

  return (
    <div className="App">
      <h1>Updating Context</h1>
      <MessageContext.Provider
        value={{  message, setMessage }}
      >
        <Grandparent />
      </MessageContext.Provider>
    </div>
  );
}

export default App;
