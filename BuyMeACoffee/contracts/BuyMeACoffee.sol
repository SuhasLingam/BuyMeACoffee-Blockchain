// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "hardhat/console.sol";

contract BuyMeACoffee {
    struct Memo {
        address from;
        uint256 timestamp;
        string message;
        string name;
    }

    event NewMemo(
        address indexed from,
        uint256 timestamp,
        string message,
        string name
    );

    Memo[] public memos;

    address payable owner;

    constructor() {
        owner = payable(msg.sender);
    }

    function printMemo() public view returns (Memo[] memory) {
        return memos;
    }

    function buyCoffee(
        string memory _message,
        string memory _name
    ) public payable {
        require(msg.value > 0, "Need more eth to buy a coffee");
        memos.push(Memo(msg.sender, block.timestamp, _message, _name));
        emit NewMemo(msg.sender, block.timestamp, _message, _name);
    }

    function WithEth() public {
        owner.transfer(address(this).balance);
    }
}
