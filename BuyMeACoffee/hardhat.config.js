require("@nomicfoundation/hardhat-toolbox");

const ALCHEMY_API_KEY = "xBo7c9nK2wg5LexoeEalUs9v7EjT4KT4";

const SEPOLIA_PRIVATE_KEY =
  "4e6a5c45d666d69350d6e4f87d8973ff966a2d0f039e39d0518c7c1787e035f7";

module.exports = {
  solidity: "0.8.23",
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [SEPOLIA_PRIVATE_KEY],
    },
  },
};
