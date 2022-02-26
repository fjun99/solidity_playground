//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Balance {
    mapping(address => uint) public balances;

    function update(uint value) public {
        balances[msg.sender] = value;
        console.log("update:",address(this),value);
    }
}
