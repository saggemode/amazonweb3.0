require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-chai-matchers");
require("@nomiclabs/hardhat-ethers");

const fs = require("fs");
//const privateKey = fs.readFileSync(".secret").toString();
const projectId = "4fa55521d0f647f28c1a179e85f454da";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  networks: {
    hardhat: {
      chainId: 1337,
    },
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${projectId}`,
      // accounts: [privateKey]
      accounts: process.env.pk,
    },
    mainnet: {
      url: `https://polygon-mainnet.infura.io/v3/${projectId}`,
      //accounts: [privateKey]
      accounts: process.env.pk,
    },
  },
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
  // solidity: "0.8.9",
};
