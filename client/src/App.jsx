import { useState } from 'react'
import './App.css'
import { ethers } from "ethers";
// Import ABI Code to interact with smart contract
import Message from "../../smart_contract/artifacts/contracts/Message.sol/Message.json";

// The contract address
const messageContractAddress = "0x5fbdb2315678afecb367f032d93f642f64180aa3";

function App() {
  const [message, setMessage] = useState("");
  const [currentMessage, setCurrentMessage] = useState("");

  // Requests access to the user's Meta Mask Account
  async function requestAccount() {
    await window.ethereum.request({ method: "eth_requestAccounts" });
  }

  // Fetches the current value store in Message
  async function getMsg() {
    // If MetaMask exists
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const contract = new ethers.Contract(
        messageContractAddress,
        Message.abi,
        provider
      );
      try {        
        const data = await contract.getMessage();
        console.log("data: ", data);
        setCurrentMessage(data);
      } catch (error) {
        console.log("Error: ", error);
      }
    }
  }

  // Sets the message from input text box
  async function setMsg() {
    if (!message) return;

    // If MetaMask exists
    if (typeof window.ethereum !== "undefined") {
      await requestAccount();

      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();     
      const contract = new ethers.Contract(messageContractAddress, Message.abi, signer);
      const transaction = await contract.setMessage(message);

      setMessage("");
      await transaction.wait();
      getMsg();
    }
  }

  return (
    <div className="App">
      <div className="App-header">
        <div className="description">
          <h1>Full stack dapp using Reactjs and Hardhat</h1>
        </div>
        <div className="custom-buttons">
          <button  onClick={getMsg} style={{ backgroundColor: "#198754" }}>
            Get Message
          </button>
          <button onClick={setMsg} style={{ backgroundColor: "#0d6efd" }}>
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
