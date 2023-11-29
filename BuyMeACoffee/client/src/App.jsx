import { useState, useEffect } from "react";
import { ethers } from "ethers";
import "./App.css";
import abi from "./contractJson/BuyMeACoffee.json";
import Navbar from "./components/navbar";

function App() {
  const [account, setAccount] = useState("Not Connected");
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });

  useEffect(() => {
    const template = async () => {
      const contractAddress = "0x796CF2a2709A6d718e7D66337878C09504502068";
      const contractABI = abi.abi;

      //Metamask
      try {
        const { ethereum } = window;
        const account = await ethereum.request({
          method: "eth_requestAccounts",
        });

        setAccount(account);

        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();

        const contract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );
        setState({ provider, signer, contract });
      } catch (error) {
        alert("not Connected Error Error Eroor");
      }
    };
    template();
  }, []);

  return (
    <div>
      <Navbar />
    </div>
  );
}

export default App;
