#  Dynamic NFT(Non-Fungible Token)
   Dynamic NFTs, also known as programmable NFTs, are a new and innovative type of non-fungible token that can change over time. Unlike traditional NFTs that represent a static digital asset like an image or video, dynamic NFTs can have their attributes or properties updated based on certain conditions or triggers.


## Working of Code

Firstly, the code defines a Solidity smart contract called **MyDNFT** that inherits from the *ERC721* contract in the OpenZeppelin library. The smart contract has a constructor that takes a `baseuri` string as input and initializes the contract with a name of "Shinchan" and a symbol of "SHN". It also defines a `mint` function that allows anyone to mint a new token and a `_baseURI` function that returns the `baseuri` string.

The next part of the code imports the `revise-sdk`library and creates an instance of *Revise* using an authentication token. It then defines an `AddNFT` function that uses the `addCollection` and `addNFT` methods provided by *Revise* to create a new NFT and associate it with a collection. The `image`, `name`, `tokenId`, and `description` parameters are passed to the `addNFT` method, along with an array of custom properties and the ID of the collection that the NFT belongs to. Finally, the function logs the ID of the new NFT to the console.

The code also defines an `API` function that returns a random mood and image for Shinchan. It then defines a `run` function that uses the *every* method provided by *Revise* to execute the `API` function every 2 minutes. The start method is then used to listen for changes in the Shinchan NFT and update the `mood` property with the new mood value.

  ### baseuri
   In the context of NFTs, BaseURI refers to the base Uniform Resource Identifier (URI) that is used to construct the final URI for an NFT's metadata.

When an NFT is created, it has a unique identifier called a token ID. The token ID is used to fetch the metadata for that NFT, which typically includes information such as the name, description, image, and other attributes of the NFT.

By using a BaseURI, creators of NFTs can easily manage and update the metadata for their NFTs without having to update each individual NFT. They can simply update the metadata at the BaseURI, and all NFTs that use that BaseURI will automatically reflect the changes.

## Prerequisites

Before you can run the tests, make sure you have the following installed:

- Node.js
- Hardhat

## Installation

1. For Hardhat Installation
``` 
npm init --yes
npm install --save-dev hardhat
```

2. For running hardhat sample project install these dependencies:
```
npm install --save-dev @nomiclabs/hardhat-ethers@^2.0.5 @nomiclabs/hardhat-waffle@^2.0.3 
npm install --save-dev chai@^4.3.6 ethereum-waffle@^3.4.4 ethers@^5.6.2 hardhat@^2.9.2
```
3. To add the Revise SDK to a project

`npm install @revise-sdk/core`

4. To install the OpenZeppelin library
`npm install @openzeppelin/contracts`
 

## Deploying Smart Contract to Localhost

1. Write your smart contract in Solidity and save it in the `contracts/` folder.

2. In the `hardhat.config.js` file, configure your local development network by adding the following:

```
require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.4",
};

  ```

  3. In the `scripts/` folder, create a new script to deploy your contract to the local network:

4. Compile and deploy the smart contract using Hardhat

```
npx hardhat compile
npx hardhat run scripts/deploy.js --network localhost

``` 

This will deploy your smart contract to the local development network.




## License
This project is licensed under the MIT license. 