require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: "https://worldchain-mainnet.g.alchemy.com/v2/YRDj93RG0iug-SuSSG6qxhdEKg4M4slV", // Use Alchemy/Infura
      accounts: ["27ead51e5b8057b1ab4d39d30cd2ba487ae3dae4d41e178852e63b7b9e29b67d"], // Wallet private key
    },
  },
};
