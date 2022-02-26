// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract BytesExample {
    bytes2 public num = 0x0100;
    bytes12 public str = "abcdefabcd";

    function getLowByte() public view returns(bytes1){
        return num[1];       
    }

    function getHighByte() public view returns(bytes1){
        return num[0];       
    }

    function setNum(bytes2 _num) public {
        num = _num;
        console.log(num.length);
    }

    function getStr() public view returns(string memory){
        return string(abi.encodePacked(str));
    }

    function setStr(bytes12 _str) public{
        str = _str;
    }

}