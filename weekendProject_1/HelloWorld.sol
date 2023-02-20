// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

interface IHelloWorld {

    function helloWorld() external view returns(string memory);

    function setText(string calldata newText) external;

    function transferOwnership(address newOwner) external;

}

contract HelloWorld is IHelloWorld {
    string private text;
    address public owner;

    constructor() {
        text = "Hello World!";
        owner = msg.sender;
    }

    function helloWorld() public view returns (string memory) {
        return text;
    }

    modifier onlyOwner {
        require(msg.sender == owner);
        _;
    }

    function setText(string calldata newText) public  onlyOwner {
        text = newText;
    }

    function transferOwnership(address newOwner) public onlyOwner {
        owner = newOwner;
    }
}