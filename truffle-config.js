const HDWalletProvider = require("@truffle/hdwallet-provider");

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 8545,            // Standard BSC port (default: none)
      network_id: "*",       // Any network (default: none)
    },
  },

  mocha: {
  },
  plugins: ["solidity-coverage"],
  compilers: {
    solc: {
      settings: {
        evmVersion: "byzantium",
        optimizer: { enabled: true, runs: 200 },
      },     
      version: "^0.5.2",
      docker: false,
      parser: "solcjs",
    }
  }
};
