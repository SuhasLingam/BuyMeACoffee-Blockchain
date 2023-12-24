import { ethers } from "ethers";
import "../assets/css/buy.css";
const Buy = ({ state }) => {
  const { contract } = state;

  //

  const BuyMeACoffee = async (event) => {
    event.preventDefault();
    const name = document.querySelector("#name").value;
    const message = document.querySelector("#message").value;
    const account = { value: ethers.parseEther("0.00001", "ether") };
    const transaction = await contract.buyCoffee(message, name, account);
    await transaction.wait();
    console.log("transaction is successful");
  };

  return (
    <>
      <form onSubmit={BuyMeACoffee}>
        <div className="page">
          <div className="field field_v1">
            <label htmlFor="first-name" className="ha-screen-reader">
              First name
            </label>
            <input id="name" className="field__input" placeholder="e.g. Ravi" />
            <span className="field__label-wrap" aria-hidden="true">
              <span className="field__label">Name</span>
            </span>
          </div>
          <div className="field field_v2">
            <label htmlFor="last-name" className="ha-screen-reader">
              Message
            </label>
            <input
              id="message"
              className="field__input"
              placeholder="e.g. Thanks"
            />
            <span className="field__label-wrap" aria-hidden="true">
              <span className="field__label">Message</span>
            </span>
          </div>
        </div>

        <button className="button-29" role="button">
          Pay
        </button>
      </form>
    </>
  );
};

export default Buy;
