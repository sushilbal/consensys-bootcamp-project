pragma solidity ^0.5.0;

contract Token{
    string public name;
    string public symbol;
    uint256 public decimals;
    uint256 public totalSupply;

    constructor() public{
        name = "ConsenSys Token";
        symbol = "ConsenSys";
        decimals = 18;
        totalSupply = 10;
    }
}