const ArtCollectibleToken = artifacts.require("ArtCollectibleToken");

module.exports = function(deployer) {
  const _name = "Art Collectible Token";
  const _symbol = "ARTCOL";

  return deployer.then(() =>
    deployer.deploy(ArtCollectibleToken, _name, _symbol)
  );
};
