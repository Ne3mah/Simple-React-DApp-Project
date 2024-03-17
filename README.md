# Full Stack Web Project with Ethereum Smart Contracts

## Overview

This repository contains a full stack web project built using React.js for the front end, Ethereum smart contracts for the backend, and Hardhat for smart contract development and testing. The project utilizes the Ethers.js library for interacting with Ethereum smart contracts.

The React Dapp in this repo looks like this:

![3-17-2024 (18-08-36)](https://github.com/Ne3mah/Simple-React-DApp-Project/assets/83452116/b510f8f2-71c0-41b6-aeef-e10372fa2d2d)

## Technologies Used

- **React.js:** A popular JavaScript library for building user interfaces.
- **Ethers.js:** A JavaScript library for interacting with the Ethereum blockchain and smart contracts.
- **Hardhat:** A development environment to compile, deploy, test, and debug Ethereum smart contracts.
- **Smart Contracts:** Ethereum smart contracts written in Solidity, deployed on the Ethereum blockchain.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- An Ethereum client such as MetaMask installed in your browser for interacting with Ethereum networks.

### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/Ne3mah/Simple-React-DApp-Project.git
   ```

2. Navigate into the React project directory:

   ```bash
   cd Simple-React-DApp-Project/client
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the React.js front end:

   ```bash
   npm run dev
   ```

5. Navigate into the smart contract project directory:

   ```bash
   cd Simple-React-DApp-Project/smart_contract
   ```

6. Install dependencies:

   ```bash
   npm install
   ```

7. Run a local blockchain network using Hardhat for testing:

   ```bash
   npx hardhat node
   ```

   This command will start a local Ethereum node for testing purposes.

8. Deploy smart contracts using Hardhat:

   ```bash
   npx hardhat ignition deploy ./ignition/modules/Message.js --network localhost
   ```

## Interacting with the Project

### Using MetaMask with the Test Hardhat Blockchain Network

1. Install MetaMask

2. Add Local Network to MetaMask

3. Importing Test Accounts
