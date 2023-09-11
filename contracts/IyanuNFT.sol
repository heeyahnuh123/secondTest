// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract IyanuNFT is ERC721URIStorage {
    constructor() ERC721("IyanuNFT", "NFT") {}

    function mint(uint256 tokenId, string memory tokenURI) public {
        _mint(msg.sender, tokenId);
        _setTokenURI(tokenId, tokenURI);
    }
}