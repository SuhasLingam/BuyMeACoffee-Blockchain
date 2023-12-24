const hre = require("hardhat");

async function main() {
  const BuyMeACoffee = await hre.ethers.getContractFactory("BuyMeACoffee");
  const buyMeACoffee = await BuyMeACoffee.deploy();
  // Deploy the contract.
  await buyMeACoffee.waitForDeployment();
  console.log("BuyMeACoffee deployed to:", await buyMeACoffee.getAddress());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

//0x3E3b0CC880793432c49B6B997cEE820c94b7e6F5
