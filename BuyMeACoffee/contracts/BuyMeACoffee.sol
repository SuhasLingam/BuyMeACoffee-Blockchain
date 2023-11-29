// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "hardhat/console.sol";

contract BuyMeACoffee {
    // Define a struct to hold the memo data
    struct Memo {
        address from; // The address of the person who sent the memo
        uint256 timestamp; // The timestamp when the memo was sent
        string message; // The message content of the memo
        string name; // The name of the person who sent the memo
    }

    // Declare an event to emit when a new memo is added
    event NewMemo(
        address indexed from, // The address of the person who sent the memo
        uint256 timestamp, // The timestamp when the memo was sent
        string message, // The message content of the memo
        string name // The name of the person who sent the memo
    );

    // Declare a state variable to store the memos
    Memo[] public memos;

    // Declare a state variable to store the contract owner's address
    address payable owner;

    // Constructor function to initialize the contract
    constructor() {
        owner = payable(msg.sender); // Set the contract owner to the address that deployed the contract
    }

    // Function to retrieve all memos
    function printMemo() public view returns (Memo[] memory) {
        return memos;
    }

    // Function to add a new memo
    function buyCoffee(
        string memory _message, // The message content of the memo
        string memory _name // The name of the person who sent the memo
    ) public payable {
        // Require that the sender sends at least 1 wei (10^-18 ETH)
        require(msg.value > 0, "Need more eth to buy a coffee");

        // Add the new memo to the memos array
        memos.push(Memo(msg.sender, block.timestamp, _message, _name));

        // Emit the NewMemo event
        emit NewMemo(msg.sender, block.timestamp, _message, _name);
    }

    // Function to withdraw the collected ETH
    function WithEth() public {
        owner.transfer(address(this).balance); // Transfer the entire contract balance to the contract owner
    }
}
//undefined
//undefined This code defines a Solidity contract called `BuyMeACoffee`. The contract allows users to send memos to the contract owner, who can then withdraw the collected ETH. The contract also includes a function to retrieve all memos.
