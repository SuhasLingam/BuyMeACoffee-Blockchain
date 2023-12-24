import { useState, useEffect } from "react";
import { ethers } from "ethers";
import "./App.css";
import Buy from "./components/buy";
import abi from "./contractJson/BuyMeACoffee.json";
import Memos from "./components/memos";
import "./index.css";

function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });

  const [account, setAccount] = useState("Not Connected");

  useEffect(() => {
    const template = async () => {
      const contractAddress = "0x3E3b0CC880793432c49B6B997cEE820c94b7e6F5";
      const contractABI = abi.abi;

      // Metamask
      try {
        const { ethereum } = window;
        const accounts = await ethereum.request({
          method: "eth_requestAccounts",
        });

        window.ethereum.on("accountsChanged", () => {
          window.location.reload();
        });

        setAccount(accounts[0]);

        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer =
          (await provider.getSigner()) ||
          (await provider.getSigner(accounts[0]));

        const contract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );
        console.log(contract);
        setState({ provider, signer, contract });

        // Log contract information
        // console.log("Contract Address:", contract.getAddress());
        // console.log("Contract ABI:", contract.interface.format());
      } catch (error) {
        console.error("Error connecting to MetaMask:", error);
      }
    };
    template();
  }, []);

  return (
    <div className="main">
      <div className="account">Account : {account}</div>
      <Buy state={state}></Buy>
      <Memos state={state}></Memos>
      <withdraw state={state}></withdraw>
    </div>
  );
}

export default App;
