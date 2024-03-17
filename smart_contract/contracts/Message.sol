// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

contract Message {
    // State variable to store the message
    string public message;

    // Function to save a new message
    function setMessage(string memory newMessage) public {
        message = newMessage;
    }

    // Function to read the current message
    function getMessage() public view returns (string memory) {
        return message;
    }
}
