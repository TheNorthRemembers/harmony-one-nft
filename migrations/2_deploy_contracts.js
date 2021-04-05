const Collectible = artifacts.require("CollectibleDotOne");

module.exports = function(deployer) {
  const _name = "Collectible Dot One";
  const _symbol = "CDO";

  return deployer.then(() =>
    deployer.deploy(Collectible, _name, _symbol)
  );
};
