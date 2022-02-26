//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract BalanceWithEvent {
    mapping(address => uint) public balances;

    event Updated(address indexed addr, uint value);
    function update(uint value) public {
        balances[msg.sender] = value;
        emit Updated(msg.sender, value);
        console.log("update:",address(this),value);
    }
}
