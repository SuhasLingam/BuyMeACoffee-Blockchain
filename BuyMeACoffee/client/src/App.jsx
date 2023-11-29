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
      const contractAddress = "0x796CF2a2709A6d718e7D66337878C09504502068";
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

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner() || provider.getSigner(accounts[0]);

        const contract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );

        setState({ provider, signer, contract });

        // Log contract information
        console.log("Contract Address:", contract.address);
        console.log("Contract ABI:", contract.interface.format());
      } catch (error) {
        console.error("Error connecting to MetaMask:", error);
      }
    };
    template();
  }, []);

  return (
    <div className="cen">
      <div>Account : {account}</div>
      <Buy state={state}></Buy>
    </div>
  );
}

export default App;
