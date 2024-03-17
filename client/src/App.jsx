import { useState } from 'react'
import './App.css'


function App() {
  const [message, setMessage] = useState("");
  const [currentMessage, setCurrentMessage] = useState(""); 

  return (
    <div className="App">
      <div className="App-header">
        <div className="description">
          <h1>Full stack dapp using Reactjs and Hardhat</h1>
        </div>
        <div className="custom-buttons">
          <button  style={{ backgroundColor: "#198754" }}>
            Get Message
          </button>
          <button style={{ backgroundColor: "#0d6efd" }}>
            Set Message
          </button>
        </div>
        <input  
          onChange={(e) => setMessage(e.target.value)}
          value={message}       
          placeholder="Set a new Message"
        />
        {currentMessage && <h2 className="current_msg">Current Message on Blockchain Network is: {currentMessage}</h2>}
      </div>
    </div>
  )
}

export default App
