const Demo_Contract = artifacts.require("verdoc");

module.exports = function(deployer) {
  deployer.deploy(Demo_Contract);
};