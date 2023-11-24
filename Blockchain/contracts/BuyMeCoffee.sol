// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "hardhat/console.sol";

contract VotingSystem {
    //event
    event FinalVote(string name, string voteFor, address from, uint timestamp);

    //details required for a Vote
    struct PersonVoter {
        string name;
        string voteFor;
        address from;
        uint timestamp;
    }

    //a array of list to store the details of Voter
    PersonVoter[] vList;

    // this is the voter address
    address payable voter;

    //init voter and make it payable
    constructor() {
        voter = payable(msg.sender);
    }

    uint count;

    function getVote(
        string memory _name,
        string memory _voteTo
    ) public payable {
        require(voter == msg.sender, "Only Owner can Vote");

        while (voter == msg.sender) {
            vList.push(
                PersonVoter(_name, _voteTo, msg.sender, block.timestamp)
            );
            emit FinalVote(_name, _voteTo, msg.sender, block.timestamp);
            count += 1;
        }
    }
}
