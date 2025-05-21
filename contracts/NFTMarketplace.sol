// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract NFTMarketplace is ERC721URIStorage, Ownable {
    uint256 private _tokenIds;
    mapping(uint256 => uint256) public nftPrices;

    constructor() ERC721("NFT Marketplace", "NFTM") {}

    function mintNFT(string memory tokenURI, uint256 price) public returns (uint256) {
        _tokenIds++;
        uint256 newTokenId = _tokenIds;
        _mint(msg.sender, newTokenId);
        _setTokenURI(newTokenId, tokenURI);
        nftPrices[newTokenId] = price;
        return newTokenId;
    }

    function buyNFT(uint256 tokenId) public payable {
        require(msg.value >= nftPrices[tokenId], "Insufficient ETH sent");
        address seller = ownerOf(tokenId);
        _transfer(seller, msg.sender, tokenId);
        payable(seller).transfer(msg.value);
    }
}
