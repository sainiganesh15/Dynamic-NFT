// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract MyDNFT is ERC721 {

    string baseuri = "https://GaNaSa1502.revise.link/";
    constructor(string memory _baseuri) ERC721("Shinchan", "SHN")  
    {
        baseuri = _baseuri;
    }

    function mint(address to, uint256 tokenId) public  
    {
        _safeMint(to, tokenId);
    }

    function _baseURI() 
        internal 
        view 
        override(ERC721) 
        returns (string memory)  
   {
        return baseuri;
    }
}