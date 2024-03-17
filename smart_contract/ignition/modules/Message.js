const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("MessageModule", (m) => {

  const message = m.contract("Message");

  return { message };
});