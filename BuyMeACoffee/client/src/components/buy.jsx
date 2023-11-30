import { ethers } from "ethers";

const Buy = ({ state }) => {
  const { contract } = state;

  //

  const BuyMeACoffee = async (event) => {
    event.preventDefault();
    const name = document.querySelector("#name").value;
    const message = document.querySelector("#message").value;
    const account = { value: ethers.parseEther("0.001", "ether") };
    const transaction = await contract.buyCoffee(message, name, account);
    await transaction.wait();
    console.log("transaction is successful");
  };

  return (
    <>
      <form onSubmit={BuyMeACoffee}>
        <input id="name"></input>
        <input id="message"></input>
        <button>Pay</button>
      </form>
    </>
  );
};

export default Buy;
