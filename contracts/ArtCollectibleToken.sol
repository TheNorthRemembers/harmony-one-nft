pragma solidity ^0.7.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract ArtCollectibleToken is ERC721 {

    using Counters for Counters.Counter;
    Counters.Counter private _tokenId;

    struct ArtCollectible {
        string image;
        string artist;
    }

    ArtCollectible[] public artCollectibles;

    constructor(string memory name, string memory symbol) ERC721(name, symbol)
    {
    }

    function getArtCollectible( uint256 tokenId )
    public view returns(string memory image, string memory artist) {
        ArtCollectible memory _artCollectible = artCollectibles[tokenId];
        image = _artCollectible.image;
        artist = _artCollectible.artist;
    }

    function mint(address addr, string memory _image, string memory _artist, string memory _tokenURI)
    public
    {
        uint256 tokenId = _tokenId.current();
        ArtCollectible memory artCollectible = ArtCollectible({image: _image, artist:_artist});
        artCollectibles.push(artCollectible);
        _mint(addr, tokenId);
        _setTokenURI(tokenId, _tokenURI);
        _tokenId.increment();
    }
}