// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract ArrayExample {
    function f() public view {
        uint[] memory a = new uint[](7);
        // bytes memory b = new bytes(len);
        assert(a.length == 7);

        a[6] = 8;
        for(uint8 i=0;i<a.length;i++){
            console.log(a[i]);
        }
    }
}