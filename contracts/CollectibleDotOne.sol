pragma solidity ^0.7.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract CollectibleDotOne is ERC721 {

    using Counters for Counters.Counter;
    Counters.Counter private _tokenId;

    struct Collectible {
        string image;
        string artist;
    }

    Collectible[] public collectibles;

    constructor(string memory name, string memory symbol) ERC721(name, symbol)
    {
    }

    function getCollectible( uint256 tokenId )
    public view returns(string memory image, string memory artist) {
        Collectible memory _collectible = collectibles[tokenId];
        image = _collectible.image;
        artist = _collectible.artist;
    }

    function mint(string memory _image, string memory _artist, string memory _tokenURI)
    public
    {
        uint256 tokenId = _tokenId.current();
        Collectible memory collectible = Collectible({image: _image, artist:_artist});
        collectibles.push(collectible);
        _safeMint(msg.sender, tokenId);
        _setTokenURI(tokenId, _tokenURI);
        _tokenId.increment();
    }
}