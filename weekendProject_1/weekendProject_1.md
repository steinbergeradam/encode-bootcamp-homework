# Weekend Project 1
> Solidity BootCamp 2023Q1 @ encode.club

:::info
## Table of Contents
[TOC]
:::

## Tasks 

* Form groups of 3 to 5 students
* Interact with “HelloWorld.sol” within your group to change message strings and change owners
* Write a report with each function execution and the transaction hash, if successful, or the revert reason, if failed

## Process Description

The team agreed to work in a shared markdown at a github repository which is also attach to hackmd.io, the team decided that the best way to procceed was to follow up on the deployment by one team memeber, each one interact with the contract through the interface, execute transactions and change ownerships between each others. Each team memeber will document its transactionsIDs/blockchain executions, following this order: 

```
Adam -> Dan -> David -> Cesar -> Rebecca -> Brent
```

Each team member will write their execution report inside, the team will help each other in any issues trogh our discord group3 channel and write together the team conclusions.

## General Contract Information

**Contract Address:**
`0x2439dad8F8942045fbA6FC6010c146ddb75849c9`

TransactionID Deployment: https://goerli.etherscan.io/tx/0x13e204b3b48c80e2eb5e589656b287cdcb944dd101a4a309d9a1254bbbe07b84

Contract Code: 
```solidity 
// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract HelloWorld {
    string private text;
    address public owner;

    constructor() {
        text = "Hello World";
        owner = msg.sender;
    }

    function helloWorld() public view returns (string memory) {
        return text;
    }

    function setText(string calldata newText) public onlyOwner {
        text = newText;
    }

    function transferOwnership(address newOwner) public onlyOwner {
        owner = newOwner;
    }

    modifier onlyOwner()
    {
        require (msg.sender == owner, "Caller is not the owner");
        _;
    }
}
```

## Adam transactions (#1)

### Metamask Wallet
https://goerli.etherscan.io/address/0xedd778b1ad8131c2ba9b9fe3764fffa26654e38f

### Ledger Wallet
https://goerli.etherscan.io/address/0x3c30DbcEcf5dBe71d9d87f86aBc8eaa5B9B60C51

### First Transaction
https://goerli.etherscan.io/tx/0x13e204b3b48c80e2eb5e589656b287cdcb944dd101a4a309d9a1254bbbe07b84

#### State Changes
1. Contract Created
2. helloWorld() called

### Second Transaction
https://goerli.etherscan.io/tx/0x9b13760b73795f819c8e7edea9d5950fc67428826022a3bc807ad1da0d796743

#### State Changes
1. "Hello World!" changed to "This is a test"

#### Get Owner
1. Owner address: `0xedd778B1Ad8131C2Ba9B9Fe3764fFfa26654e38F`

### Third Transaction
https://goerli.etherscan.io/tx/0xe52632df560dfb65c5580809877cef351fb88136ff433a473a94a67e8eb1593a

#### State Changes
1. `0xedd778b1ad8131c2ba9b9fe3764fffa26654e38f` changes to `0x3c30dbcecf5dbe71d9d87f86abc8eaa5b9b60c51`

#### Get Owner
1. Owner address: `0x3c30DbcEcf5dBe71d9d87f86aBc8eaa5B9B60C51`

## Dan transactions

### Metamask Wallet
Dan's Wallet: 0xeE69153DA5CCeAbFFc11f20212938C48d98afb5C

### interface
I attached interface Idan to the deployed contract, but was unable to create an 'owner' call to check owner status. So, I attached a compiled copy of helloWorld.sol and proceeded...
```// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

interface Idan {

    function helloWorld() external view returns(string memory);

    function setText(string calldata newText) external;

    function transferOwnership(address newOwner) external;

}

contract HelloWorld {
    string private text;
    address public owner;

    constructor() {
        text = "Hello World";
        owner = msg.sender;
    }

    function helloWorld() public view returns (string memory) {
        return text;
    }

    function setText(string calldata newText) public onlyOwner {
        text = newText;
    }

    function transferOwnership(address newOwner) public onlyOwner {
        owner = newOwner;
    }

    modifier onlyOwner()
    {
        require (msg.sender == owner, "Caller is not the owner");
        _;
    }
}
```

### First Transaction
#### setText() transaction hash: 
https://goerli.etherscan.io/tx/0xda5c4d663274a599f737b41d8ef351f4435f7dd33266a5ff4b3e31be0bee99b1
#### State Changes:

1. variable 'text' changes from "This is a test" to "I'm the mf boss in here."
2. helloWorld() called

### Second Transaction

#### transferOwner() transaction hash:
https://goerli.etherscan.io/tx/0xe1ca6a3287cc9ea28870f11cda0d3477723e2cf7cc5ab639d51fccb59fb72ee3

#### State Changes:
1. Owner changes from `0xeE69153DA5CCeAbFFc11f20212938C48d98afb5C`
to new address Owner: `0xDDd93CEC5843f471Eb2b8B2886b2Be32555B5209`

#### Owner called
confirmed new address Owner is `0xDDd93CEC5843f471Eb2b8B2886b2Be32555B5209`

## David E. Perez Negron R. transactions

### Metamask Wallet
David's Wallet: https://goerli.etherscan.io/address/0xddd93cec5843f471eb2b8b2886b2be32555b5209

### My Interface Code

```solidity
// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

/// @title Just a simple Interface
/// @author David E. Perez Negron R.
interface P1r0sInterface {
    /// @notice calls the helloWorld methodID as external view 
    function helloWorld() external view returns (string memory);
    /// @notice calls the setText methodID as external
    /// @param newText is a string stored into calldata
    function setText(string calldata newText) external;
    /// @notice calls the transferOwnership methodID as external
    /// @notice it does not require onlyOwnerparameter 
    /// since it is an internal modifier from the smart contract
    /// @param newText is a string stored into calldata
    function transferOwnership(address newOwner) external;
    /// @notice this call generates a revert
    /// since there is not a getARevert methodID
    function getARevert() external;
}
```
### Get Owner
**Owner address:** `0xDDd93CEC5843f471Eb2b8B2886b2Be32555B5209`

### First Transaction 
**Call setText method:**

![](https://i.imgur.com/DsemyOm.png)
img aaa.
>img aaa. shows when I call the setText Function with the following text: "This is p1r0 from my interface :p"

transactionId: https://goerli.etherscan.io/tx/0x05c4c45cfb17cbdb76c06e337baae6aa5d5d6122a021aedd30699a514ac6b44f


### Call helloWorld method

![](https://i.imgur.com/pe4GSAO.png)
img bbb.
>img bbb shows when I call the helloWorld Function which displays the string private text from the smart contract: "This is p1r0 from my interface :p"

### Second Transaction
**Generate a Revert**
By call a getARevert() function from the interface which is not in the smart contract, since there is not a getARevert methodID I get the following revert error.

transactionId: https://goerli.etherscan.io/tx/0x8ecb8a60646b1833ed05b7d859f3b8b96f2ee48cf5458330700115c0269e0e77

![](https://i.imgur.com/9alh3zj.png)
img ccc. shows execution reverted error.

### Third Transaction
**Change ownership** 

![](https://i.imgur.com/v13ECAl.png)
img ddd. shows the parameters for

This transaction executes a call for the changeowner so that we change the ownership to the following address: `0x940029ebf6D0C4aaDE9c8bC118901701886B8664`

transactionId: https://goerli.etherscan.io/tx/0x72d67ddcf36e686b247cd3a2f334f88859699ba341654983037d642ac39ae007

### Get Owner
**Owner address:** `0x940029ebf6D0C4aaDE9c8bC118901701886B8664`


## Cesar transactions

### First Transaction 
**Call setText method:**

transactionId:
https://goerli.etherscan.io/tx/0x102a0cd1d1140293b1b3c50a5a55d683cb13a7e317775190ee21596deb94a9bb

This transaction executes a call for the setText to replace previous text with new input: `'yooo! CS tuning in ;)'`

### Second Transaction
**Change ownership**

transactionId:
https://goerli.etherscan.io/tx/0xb5455fcbcf173ff7eeb4c039dcd65712499cdafd97552e4ffcfef042c1a5f113#statechange

This transaction executes a call for the changeowner so that we change the ownership to the following address: '`0x002390240Cc451299300b8200e5bEDF5420699b6`'


## Rebecca transactions

### Attempted transaction: Text change
In the "set text" widget of Remix, I set the text to "Continuing the ownership chain! Woohoo!"
However, I did not realize that changing the text required a separate deployment. As a result, I
only transferred ownership.

From this experience, I learned that each section of a contract operates fairly separately, and
therefore changes must be made in separate deployments.

### Successful transaction: Ownership transfer
https://goerli.etherscan.io/tx/0xcca42ee3e150aca117a0aa79798a4b0f80582a9788553bdb9221724a4239ca5f

### Main bugs/obstacles/lessons
- wallet was not properly connected
    - did not know that remix does not automatically connect with my metamask wallet. without doing so, each deployment was not recording my ownership.
- misread the discord messages and mixed up "wallet address" with "contract address"
    - contract deployment kept resulting in an error because remix was looking for the specific contract address to connect with, and instead I was trying to deploy through a wallet address.

### Interface
```
interface rdwInterface {

    function helloWorld() external view returns (string memory);
  
    function setText(string calldata newText) external;
   
    function transferOwnership(address newOwner) external;

    // function getARevert() external;
}
```


## Brent transactions
### First Transaction
https://goerli.etherscan.io/tx/0xef0443745cf85d781393ea8bc4febe85643b1831bb4d2e2d4f44ca53ec3b3961
#### State Changes
1. "Yo, whats up bro"

## Adam transactions (#2)

### First Transaction
https://goerli.etherscan.io/tx/0xd93e9b059edbab9609118ab34ab4b6d72c74143e7bf007408d914fe0d24be790

#### State Changes
1. "yooo! CS tuning in ;)*" changed to "our last test"

#### Get Owner
1. Owner address: `0xedd778B1Ad8131C2Ba9B9Fe3764fFfa26654e38F`

### Second Transaction
https://goerli.etherscan.io/tx/0x15d6b5fb001d11ca87dc224cc57231bdcb042471bcda7db32d4881daad657bbc

#### State Changes
1. `0xedd778b1ad8131c2ba9b9fe3764fffa26654e38f` changes to `0x3c30dbcecf5dbe71d9d87f86abc8eaa5b9b60c51`

## Contact and Developers

- [David E. Perez Negron R.](mailto:david@neetsec.com) Github: @P1R
- [Rebecca Duke Wiesenberg](mailto:rdukewiesenb@gmail.com) Github: @rdukewiesenb
- [Adam Steinberger](mailto:adam@asteinbe.com) | Github: @asteinberger | Discord: steinz08#3291

## References

\[1\] Encode Club Solidity Bootcamp , "Lesson 4 - Interfaces and external calls", https://github.com/Encode-Club-Solidity-Bootcamp/Lesson-04#weekend-project, 2023.
