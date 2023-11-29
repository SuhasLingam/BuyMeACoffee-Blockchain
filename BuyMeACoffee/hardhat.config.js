require("@nomicfoundation/hardhat-toolbox");

const ALCHEMY_API_KEY = "xBo7c9nK2wg5LexoeEalUs9v7EjT4KT4";
const SEPOLIA_PRIVATE_KEY =
  "e975d8facced011295a5758b10e5bfd261ec767e1c8f5f2ebe80df94716b5e3d";

module.exports = {
  solidity: "0.8.19",
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [SEPOLIA_PRIVATE_KEY],
    },
  },
};
